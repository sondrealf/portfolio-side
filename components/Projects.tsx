import React from 'react'
import data from '../data/listprojects'
import Project from './Project'

const Projects = () => {
  return (
    <div className="font-basic">
      <p className="mb-0 mt-8 text-center text-4xl font-bold text-blue-400 md:mt-0">
        Projects
      </p>
      <p className="text-center font-bold text-white dark:text-black">
        (Newest to oldest)
      </p>
      {data.map((obj) => (
        <Project {...obj} />
      ))}
    </div>
  )
}

export default Projects
