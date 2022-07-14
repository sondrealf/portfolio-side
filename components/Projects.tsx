import React from 'react'
import data from '../data/listprojects'
import Project from './Project'

const Projects = () => {
  return (
    <div>
      {data.map((obj) => (
        <Project {...obj} />
      ))}
    </div>
  )
}

export default Projects
