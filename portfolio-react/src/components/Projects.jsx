import React from 'react'
import developersLibraryImage from '../assets/developers-library.webp';
import androPayImage from '../assets/andro3.webp';
import htmlIcon from '../assets/html.webp';
import cssIcon from '../assets/css.webp';
import jsIcon from '../assets/js.webp';
import figmaIcon from '../assets/figma.webp';
import androidIcon from '../assets/android.webp';
import javaIcon from '../assets/java.webp';
import uiuxIcon from '../assets/uiux.webp';
import firebaseIcon from '../assets/firebase.webp';

const toolIconsMap = {
  html: htmlIcon,
  css: cssIcon,
  js: jsIcon,
  figma: figmaIcon,
  android: androidIcon,
  java: javaIcon,
  uiux: uiuxIcon,
  firebase: firebaseIcon
};

function Projects() {
  return (
    <div className="project-container" id="ProjectsSection">
      <h2 className="main-title">
        Some of my recent <span className="title-highlight">projects</span>
      </h2>
      <Project 
        title="Developer's Library"
        description="Developer's Library is your go-to platform for free programming Courses/Cheat-Sheet/Projects to provide high-quality, free educational content to help you succeed in your programming journey."
        image="developers-library.webp"
        tools={['html', 'css', 'js', 'figma']}
        reversed={false}
      />
      <Project 
        title="Andro Pay App"
        description="With Andro Pay App, supermarkets can embrace the future of retail by offering a robust, secure, and customer-focused payment solution. Let's pave the way for a cashless shopping era."
        image="andro3.webp"
        tools={['android', 'java', 'uiux', 'firebase', 'figma']}
        reversed={true}
      />
    </div>
  )
}

function Project({ title, description, image, tools, reversed }) {
  return (
    <div className={`project ${reversed ? 'project-2' : 'project-1'}`}>
      <div className="project-image">
        <img className={`image-overlay ${reversed ? 'project-2-image' : 'project-1-image'}`} src={image === 'developers-library.webp' ? developersLibraryImage : androPayImage} alt={title} />
      </div>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="tool-icons">
          {tools.map(tool => (
            <img key={tool} src={toolIconsMap[tool]} alt={tool} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

