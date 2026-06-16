import { FlowStage, ExperienceRouter, ProgressBar } from './components'
import { useExperienceFlow } from './hooks'

/**
 * Experience Flow
 * ─────────────────────────────────────────
 * start → quiz → [analyzing] → quiz → … → calculating → result
 *
 * 상태: useExperienceFlow (useState 기반)
 * 전환: FlowStage (exit → enter → idle)
 * 진행: progress.current / progress.total
 */
function App() {
  const flow = useExperienceFlow()
  const { progress, transition, stageKey } = flow

  return (
    <div className="app">
      <ProgressBar progress={progress.percentage} visible={progress.visible} />

      <main className="app__main">
        <FlowStage stageKey={stageKey} transition={transition}>
          <ExperienceRouter flow={flow} />
        </FlowStage>
      </main>
    </div>
  )
}

export default App
