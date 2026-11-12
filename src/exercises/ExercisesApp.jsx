import { CourseContext } from '../components/course-ctx'
import CourseNav, { CourseFooter } from '../components/CourseNav'
import Writing from './Writing'
import Exercises from './Exercises'
import Talking from './Talking'

export default function ExercisesApp() {
  return (
    <CourseContext.Provider value="exercises">
      <div className="min-h-screen">
        <CourseNav page="exercises" />
        <main className="mx-auto max-w-5xl space-y-16 px-4 pb-24 pt-6 sm:space-y-20">
          <header id="top" className="scroll-mt-32 rounded-[2.5rem] bg-gradient-to-br from-rose-300 via-amber-200 to-violet-300 p-6 shadow-xl sm:p-10">
            <p className="text-sm font-extrabold uppercase tracking-widest text-slate-800/70">유닛 2 · 현재와 과거 · 워크시트</p>
            <h1 className="mt-2 font-kr text-6xl leading-tight text-slate-900 sm:text-8xl">쓰기 · 연습 · 말하기</h1>
            <p className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">The two worksheets, three more to practise, and the 25 partner questions</p>
            <p className="mt-4 max-w-2xl text-base font-semibold text-slate-800 sm:text-lg">
              First the two 쓰기 texts sentence by sentence, then three extra prompts built from the same toolbox, and finally the 25 말하기 questions with an
              answer for each. The grammar behind all of it is on{' '}
              <a href="materials.html" className="underline decoration-2 underline-offset-2 hover:text-violet-800">
                문법 정리
              </a>
              . Tap 🔊 to hear any Korean.
            </p>
          </header>
          <Writing />
          <Exercises />
          <Talking />
          <CourseFooter page="exercises" />
        </main>
      </div>
    </CourseContext.Provider>
  )
}
