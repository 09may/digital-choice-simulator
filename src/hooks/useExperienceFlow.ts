import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { TOTAL_QUESTIONS } from '../data/questions'
import { isMidAnalysisCheckpoint } from '../data/analysis-checkpoints'
import { calculateProfile } from './useProfileScore'
import {
  buildShareUrl,
  clearShareUrl,
  getSharedProfileResult,
  parseShareSubtypeFromUrl,
} from '../utils/share-result'
import type {
  ExperienceState,
  FlowProgress,
  FlowStep,
  TransitionDirection,
  TransitionState,
} from '../types/experience-flow'
import {
  FLOW_TRANSITION_MS,
  INITIAL_EXPERIENCE_STATE,
  INITIAL_QUIZ_STATE,
  INITIAL_TRANSITION,
} from '../types/experience-flow'

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function buildStageKey(
  step: FlowStep,
  questionIndex: number,
  analysisCheckpoint: number | null,
): string {
  if (step === 'quiz') return `quiz-${questionIndex}`
  if (step === 'analyzing') return `analyzing-${analysisCheckpoint ?? 0}`
  return step
}

function buildProgress(
  step: FlowStep,
  questionIndex: number,
  analysisCheckpoint: number | null,
): FlowProgress {
  const total = TOTAL_QUESTIONS

  if (step === 'start' || step === 'about') {
    return { current: 0, total, percentage: 0, visible: false }
  }

  if (step === 'quiz') {
    const current = questionIndex + 1
    return {
      current,
      total,
      percentage: Math.round((current / total) * 100),
      visible: true,
    }
  }

  if (step === 'analyzing') {
    const anchor = analysisCheckpoint ?? questionIndex
    const current = anchor + 1
    return {
      current,
      total,
      percentage: Math.round((current / total) * 100),
      visible: true,
    }
  }

  if (step === 'calculating') {
    return { current: total, total, percentage: 100, visible: true }
  }

  return { current: total, total, percentage: 100, visible: false }
}

function resolveInitialState(): ExperienceState {
  const sharedSubtype = parseShareSubtypeFromUrl()
  if (sharedSubtype) {
    return { ...INITIAL_EXPERIENCE_STATE, step: 'result' }
  }
  return INITIAL_EXPERIENCE_STATE
}

export function useExperienceFlow() {
  const [state, setState] = useState<ExperienceState>(resolveInitialState)
  const [transition, setTransition] = useState<TransitionState>(INITIAL_TRANSITION)
  const isAnimatingRef = useRef(false)
  const mountedRef = useRef(true)
  const stateRef = useRef(state)

  useEffect(() => {
    stateRef.current = state
  }, [state])

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  const runTransition = useCallback(
    async (direction: TransitionDirection, onMidpoint: () => void): Promise<void> => {
      if (isAnimatingRef.current) return
      isAnimatingRef.current = true

      setTransition({ phase: 'exit', direction })
      await delay(FLOW_TRANSITION_MS.exit)

      if (!mountedRef.current) {
        isAnimatingRef.current = false
        return
      }

      onMidpoint()
      setTransition({ phase: 'enter', direction })
      await delay(FLOW_TRANSITION_MS.enter)

      if (!mountedRef.current) {
        isAnimatingRef.current = false
        return
      }

      setTransition({ phase: 'idle', direction })
      isAnimatingRef.current = false
    },
    [],
  )

  const advanceQuiz = useCallback(async () => {
    const { quiz, step } = stateRef.current
    if (step !== 'quiz') return

    const currentIndex = quiz.index
    const isLast = currentIndex >= TOTAL_QUESTIONS - 1

    if (!isLast) {
      const nextIndex = currentIndex + 1

      if (isMidAnalysisCheckpoint(currentIndex)) {
        await runTransition('forward', () => {
          setState((prev) => ({
            ...prev,
            step: 'analyzing',
            analysisCheckpoint: currentIndex,
            quiz: { ...prev.quiz, selection: null },
          }))
        })

        await delay(FLOW_TRANSITION_MS.midAnalysis)
        if (!mountedRef.current) return

        await runTransition('forward', () => {
          setState((prev) => ({
            ...prev,
            step: 'quiz',
            analysisCheckpoint: null,
            quiz: { ...prev.quiz, index: nextIndex, selection: null },
          }))
        })
        return
      }

      await runTransition('forward', () => {
        setState((prev) => ({
          ...prev,
          quiz: {
            ...prev.quiz,
            index: nextIndex,
            selection: null,
          },
        }))
      })
      return
    }

    await runTransition('forward', () => {
      setState((prev) => ({ ...prev, step: 'calculating', analysisCheckpoint: null }))
    })

    await delay(FLOW_TRANSITION_MS.calculating)
    if (!mountedRef.current) return

    await runTransition('forward', () => {
      setState((prev) => ({ ...prev, step: 'result' }))
    })
  }, [runTransition])

  const start = useCallback(() => {
    runTransition('forward', () => {
      setState({
        step: 'quiz',
        quiz: { ...INITIAL_QUIZ_STATE },
        analysisCheckpoint: null,
        returnStep: null,
      })
    })
  }, [runTransition])

  const chooseOption = useCallback(
    async (questionId: string, optionId: string) => {
      const { step, quiz } = stateRef.current
      if (step !== 'quiz' || quiz.selection || isAnimatingRef.current) return

      setState((prev) => ({
        ...prev,
        quiz: {
          ...prev.quiz,
          selection: optionId,
          answers: { ...prev.quiz.answers, [questionId]: optionId },
        },
      }))

      await delay(FLOW_TRANSITION_MS.selection)
      if (!mountedRef.current) return

      await advanceQuiz()
    },
    [advanceQuiz],
  )

  const back = useCallback(() => {
    const { quiz, step } = stateRef.current
    if (step !== 'quiz' || quiz.selection || isAnimatingRef.current) return

    if (quiz.index === 0) {
      runTransition('backward', () => {
        setState({ ...INITIAL_EXPERIENCE_STATE })
      })
      return
    }

    runTransition('backward', () => {
      setState((prev) => ({
        ...prev,
        quiz: {
          ...prev.quiz,
          index: prev.quiz.index - 1,
          selection: null,
        },
      }))
    })
  }, [runTransition])

  const restart = useCallback(() => {
    clearShareUrl()
    runTransition('backward', () => {
      setState({ ...INITIAL_EXPERIENCE_STATE })
    })
  }, [runTransition])

  const openAbout = useCallback(() => {
    const { step } = stateRef.current
    if (step === 'about' || isAnimatingRef.current) return

    runTransition('forward', () => {
      setState((prev) => ({
        ...prev,
        step: 'about',
        returnStep: prev.step,
      }))
    })
  }, [runTransition])

  const closeAbout = useCallback(() => {
    const { returnStep } = stateRef.current
    if (isAnimatingRef.current) return

    const target = returnStep ?? 'start'

    runTransition('backward', () => {
      setState((prev) => ({
        ...prev,
        step: target,
        returnStep: null,
      }))
    })
  }, [runTransition])

  const progress = useMemo(
    () =>
      buildProgress(
        state.step,
        state.quiz.index,
        state.analysisCheckpoint,
      ),
    [state.step, state.quiz.index, state.analysisCheckpoint],
  )

  const stageKey = useMemo(
    () =>
      buildStageKey(
        state.step,
        state.quiz.index,
        state.analysisCheckpoint,
      ),
    [state.step, state.quiz.index, state.analysisCheckpoint],
  )

  const result = useMemo(() => {
    if (state.step !== 'result') return null

    const hasQuizAnswers = Object.keys(state.quiz.answers).length > 0
    if (hasQuizAnswers) {
      return calculateProfile(state.quiz.answers)
    }

    const sharedSubtype = parseShareSubtypeFromUrl()
    if (sharedSubtype) {
      return getSharedProfileResult(sharedSubtype)
    }

    return null
  }, [state.step, state.quiz.answers])

  useEffect(() => {
    if (state.step !== 'result' || !result?.profile.subtype) return
    if ('isShared' in result && result.isShared) return

    const nextUrl = buildShareUrl(result.profile.subtype)
    if (window.location.href !== nextUrl) {
      window.history.replaceState(null, '', nextUrl)
    }
  }, [state.step, result])

  const isTransitioning = transition.phase !== 'idle'
  const isSelectionLocked =
    state.quiz.selection !== null || state.step === 'analyzing'

  return {
    state,
    progress,
    transition,
    stageKey,
    result,
    isTransitioning,
    isSelectionLocked,
    actions: {
      start,
      chooseOption,
      back,
      restart,
      openAbout,
      closeAbout,
    },
  }
}

export type ExperienceFlow = ReturnType<typeof useExperienceFlow>
