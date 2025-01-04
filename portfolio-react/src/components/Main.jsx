import React from 'react'
import Experience from './Experience'
import Services from './Services'
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './Achievements'
import Contact from './Contact'

function Main() {
  return (
    <main>
      <div className="background"></div>
      <Experience />
      <Services />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  )
}

export default Main

