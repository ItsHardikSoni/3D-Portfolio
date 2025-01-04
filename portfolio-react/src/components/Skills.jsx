import React from 'react'
import htmlIcon from '../assets/html.webp';
import cssIcon from '../assets/css.webp';
import jsIcon from '../assets/js.webp';
import cppIcon from '../assets/c++.webp';
import cIcon from '../assets/c.webp';
import javaIcon from '../assets/java.webp';
import sqlIcon from '../assets/sql.webp';
import reactIcon from '../assets/react.webp';
import androidIcon from '../assets/android.webp';
import firebaseIcon from '../assets/firebase.webp';
import uiuxIcon from '../assets/uiux.webp';
import figmaIcon from '../assets/figma.webp';

const techIconsMap = {
  html: htmlIcon,
  css: cssIcon,
  js: jsIcon,
  'c++': cppIcon,
  c: cIcon,
  java: javaIcon,
  sql: sqlIcon,
  react: reactIcon,
  android: androidIcon,
  firebase: firebaseIcon,
  uiux: uiuxIcon,
  figma: figmaIcon
};

function Skills() {
  const techIcons = ['html', 'css', 'js', 'c++', 'c', 'java', 'sql', 'react', 'android', 'firebase', 'uiux', 'figma']

  return (
    <div className="main-container" id="SkillsSection">
      <h2 className="main-title">
        My daily <span className="title-highlight">tech </span>stack
      </h2>
      <p className="title-subtext">that values improving people's lives through accessible design</p>
      <div className="tech-icons">
        {techIcons.map(icon => (
          <img key={icon} src={techIconsMap[icon]} alt={icon} />
        ))}
      </div>
      <div className="rotating-glow-circle">
        <div className="centered-logo">⚡</div>
      </div>
    </div>
  )
}

export default Skills

