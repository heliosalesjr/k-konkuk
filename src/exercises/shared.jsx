import { Speak } from '../components/ui'
import { speak } from '../lib/korean'

/* Small pieces shared by the 쓰기 and 연습 sections. */

// Inline highlight: dark blue instead of bold, so it reads clearly next to the black text.
export function Hi({ children }) {
  return <span className="text-blue-700">{children}</span>
}

export function Step({ kr, en, why, n }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-extrabold text-slate-500">{n}</div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-2">
          <Speak text={kr} />
          <div className="min-w-0">
            <div className="font-kr text-2xl leading-snug text-slate-900 sm:text-3xl">{kr}</div>
            <div className="text-sm font-semibold text-slate-600">{en}</div>
          </div>
        </div>
        <p className="mt-2 border-l-2 border-rose-200 pl-3 text-sm leading-relaxed text-slate-700">{why}</p>
      </div>
    </div>
  )
}

export function FullText({ text, label }) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-rose-50 to-amber-50 p-5 ring-2 ring-rose-200 sm:p-6">
      <div className="mb-3 flex items-center gap-2">
        <Speak text={text} />
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-rose-700">{label}</span>
      </div>
      <p className="font-kr text-2xl leading-[1.9] text-slate-900 sm:text-3xl sm:leading-[1.9]">{text}</p>
    </div>
  )
}

export function Chips({ items, tone }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map(([kr, en]) => (
        <button
          key={kr}
          type="button"
          onClick={() => speak(kr)}
          className={`rounded-2xl px-3 py-1.5 text-left shadow-sm ring-1 transition hover:scale-105 ${tone}`}
        >
          <span className="font-kr text-xl">{kr}</span>
          <span className="ml-2 text-xs font-semibold opacity-70">{en}</span>
        </button>
      ))}
    </div>
  )
}

export function AdjTable({ rows, caption }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[24rem] border-separate border-spacing-y-2 text-center">
        <caption className="pb-2 text-left text-sm font-bold text-slate-500">{caption}</caption>
        <thead>
          <tr className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
            <th className="p-2 text-left">Adjective</th>
            <th className="p-2 text-violet-700">Now</th>
            <th className="p-2 text-rose-700">Past</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((a) => (
            <tr key={a.kr + a.en}>
              <td className="rounded-l-2xl bg-slate-50 p-2 text-left">
                <span className="font-kr text-xl text-slate-900">{a.kr}</span>
                {a.irr && <span className="ml-1.5 rounded bg-amber-200 px-1 text-[10px] font-black text-amber-900">ㅂ</span>}
                <div className="text-xs font-semibold text-slate-500">{a.en}</div>
              </td>
              <td className="bg-violet-50 p-2 font-kr text-xl text-violet-900">{a.now}</td>
              <td className="rounded-r-2xl bg-rose-50 p-2 font-kr text-xl text-rose-900">{a.past}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
