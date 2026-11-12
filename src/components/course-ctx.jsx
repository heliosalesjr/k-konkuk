import { createContext, useContext } from 'react'

// Which page of the course we are rendering. Set once, at the top of each page, so that
// any Section can work out on its own which topic ladders run through it.
export const CourseContext = createContext(null)
export const useCoursePage = () => useContext(CourseContext)
