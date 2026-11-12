import { CourseContext } from '../components/course-ctx'
import CourseNav, { CourseFooter } from '../components/CourseNav'
import Present from './Present'
import Past from './Past'
import Adverbs from './Adverbs'

export default function MaterialsApp() {
  return (
    <CourseContext.Provider value="materials">
      <div className="min-h-screen">
        <CourseNav page="materials" />
        <main className="mx-auto max-w-5xl space-y-16 px-4 pb-24 pt-6 sm:space-y-20">
          <header id="top" className="scroll-mt-32 rounded-[2.5rem] bg-gradient-to-br from-emerald-300 via-sky-300 to-violet-300 p-6 shadow-xl sm:p-10">
            <p className="text-sm font-extrabold uppercase tracking-widest text-slate-800/70">유닛 2 · 현재와 과거 · 2과</p>
            <h1 className="mt-2 font-kr text-6xl leading-tight text-slate-900 sm:text-8xl">문법 정리</h1>
            <p className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">Present · Past · Adverbs</p>
            <p className="mt-4 max-w-2xl text-base font-semibold text-slate-800 sm:text-lg">
              Verbs and adjectives as the book teaches them (어휘 1–2, 문법 및 표현 1–4), with the worksheet and handout rules. The 쓰기 texts and the practice
              prompts live on the next page,{' '}
              <a href="exercises.html" className="underline decoration-2 underline-offset-2 hover:text-violet-800">
                쓰기 · 연습
              </a>
              . Tap 🔊 to hear any Korean.
            </p>
          </header>
          <Present />
          <Past />
          <Adverbs />
          <CourseFooter page="materials" />
        </main>
      </div>
    </CourseContext.Provider>
  )
}
