import { CourseContext } from '../components/course-ctx'
import CourseNav, { CourseFooter } from '../components/CourseNav'
import Hero from '../sections/Hero'
import Greetings from '../sections/Greetings'
import Structure from '../sections/Structure'
import Batchim from '../sections/Batchim'
import Copula from '../sections/Copula'
import Topic from '../sections/Topic'
import Negation from '../sections/Negation'
import Speaking from '../sections/Speaking'
import Vocab from '../sections/Vocab'
import Quiz from '../sections/Quiz'

export default function BasicsApp() {
  return (
    <CourseContext.Provider value="basics">
      <div className="min-h-screen">
        <CourseNav page="basics" />
        <main className="mx-auto max-w-5xl space-y-16 px-4 pb-24 pt-6 sm:space-y-20">
          <Hero />
          <Greetings />
          <Structure />
          <Batchim />
          <Copula />
          <Topic />
          <Negation />
          <Speaking />
          <Vocab />
          <Quiz />
          <CourseFooter page="basics" />
        </main>
      </div>
    </CourseContext.Provider>
  )
}
