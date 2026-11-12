import { laddersAt, stageLabel } from '../course'
import { useCoursePage } from './course-ctx'

/* A topic is not taught once. It comes back, each time with more to it.
   This strip shows where in that ladder the section you are reading sits. */

function Ladder({ topic, index }) {
  const stages = topic.stages.map(stageLabel)
  const prev = index > 0 ? stages[index - 1] : null
  const next = index < stages.length - 1 ? stages[index + 1] : null

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="text-base">{topic.icon}</span>
        <span className="font-kr text-lg text-slate-900">{topic.kr}</span>
        <span className="text-sm font-bold text-slate-500">{topic.en}</span>
        <span className="ml-auto text-xs font-extrabold uppercase tracking-wide text-slate-400">
          step {index + 1} of {stages.length}
        </span>
      </div>

      {/* the ladder itself — every step is a link, so you can jump up or down it */}
      <ol className="mt-2 flex flex-wrap items-center gap-1">
        {stages.map((st, i) => {
          const here = i === index
          return (
            <li key={st.href} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden className="text-slate-300">→</span>}
              <a
                href={here ? undefined : st.href}
                aria-current={here ? 'step' : undefined}
                title={topic.stages[i].adds}
                className={`rounded-full px-2.5 py-1 text-xs font-bold transition ${
                  here
                    ? 'cursor-default bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-yellow-200 hover:text-slate-900'
                }`}
              >
                <span className="opacity-60">{st.unit.n}</span> <span className="font-kr text-sm">{st.section.label.replace(/^\S+\s/, '')}</span>
              </a>
            </li>
          )
        })}
      </ol>

      <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
        {prev && (
          <a href={prev.href} className="rounded-xl bg-slate-50 px-3 py-1.5 text-xs leading-snug text-slate-600 transition hover:bg-yellow-50">
            <span className="font-extrabold text-slate-400">← came from</span>{' '}
            <span className="font-kr text-sm text-slate-800">{prev.section.label}</span> · {topic.stages[index - 1].adds}
          </a>
        )}
        {next && (
          <a href={next.href} className="rounded-xl bg-slate-50 px-3 py-1.5 text-xs leading-snug text-slate-600 transition hover:bg-yellow-50">
            <span className="font-extrabold text-slate-400">continues in →</span>{' '}
            <span className="font-kr text-sm text-slate-800">{next.section.label}</span> · {topic.stages[index + 1].adds}
          </a>
        )}
      </div>
    </div>
  )
}

// Renders nothing when this section is not part of any multi-step topic.
export default function Progression({ sectionId }) {
  const page = useCoursePage()
  if (!page) return null
  const ladders = laddersAt(page, sectionId)
  if (!ladders.length) return null
  return (
    <div className="mb-5 space-y-2">
      {ladders.map((l) => (
        <Ladder key={l.topic.id} topic={l.topic} index={l.index} />
      ))}
    </div>
  )
}
