import type { ExperienceFlow } from '../hooks/useExperienceFlow'
import { questions } from '../data'
import {
  IntroPage,
  AboutPage,
  QuestionPage,
  AnalysisCheckpointPage,
  CalculatingPage,
  ResultPage,
} from '../pages'

interface ExperienceRouterProps {
  flow: ExperienceFlow
}

export function ExperienceRouter({ flow }: ExperienceRouterProps) {
  const { state, result, progress, isSelectionLocked, actions } = flow

  switch (state.step) {
    case 'start':
      return (
        <IntroPage onStart={actions.start} onAbout={actions.openAbout} />
      )

    case 'about':
      return (
        <AboutPage
          onBack={actions.closeAbout}
          onStart={actions.start}
          showStart={state.returnStep === 'start'}
        />
      )

    case 'quiz': {
      const question = questions[state.quiz.index]
      return (
        <QuestionPage
          questionIndex={state.quiz.index}
          selectedOption={state.quiz.selection}
          savedOptionId={
            question ? (state.quiz.answers[question.id] ?? null) : null
          }
          progress={progress}
          isLocked={isSelectionLocked}
          onChoose={actions.chooseOption}
          onBack={actions.back}
        />
      )
    }

    case 'analyzing':
      return (
        <AnalysisCheckpointPage
          checkpointIndex={state.analysisCheckpoint ?? state.quiz.index}
        />
      )

    case 'calculating':
      return <CalculatingPage />

    case 'result':
      if (!result) return null
      return (
        <ResultPage
          profile={result.profile}
          scores={result.scores}
          isShared={'isShared' in result && result.isShared === true}
          onRestart={actions.restart}
          onAbout={actions.openAbout}
        />
      )

    default:
      return null
  }
}
