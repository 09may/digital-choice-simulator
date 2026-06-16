import type { ReactNode } from 'react'
import type { TransitionState } from '../types/experience-flow'
import './FlowStage.css'

interface FlowStageProps {
  stageKey: string
  transition: TransitionState
  children: ReactNode
}

function getStageClass(transition: TransitionState): string {
  if (transition.phase === 'exit') return 'flow-stage--exit'
  if (transition.phase === 'enter') return 'flow-stage--enter'
  return 'flow-stage--idle'
}

export function FlowStage({ stageKey, transition, children }: FlowStageProps) {
  return (
    <div
      key={stageKey}
      className={`flow-stage ${getStageClass(transition)}`}
      data-direction={transition.direction}
      data-phase={transition.phase}
      aria-live={transition.phase === 'idle' ? 'polite' : 'off'}
    >
      <div className="flow-stage__pane">{children}</div>
    </div>
  )
}
