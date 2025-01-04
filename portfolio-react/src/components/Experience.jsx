import React from 'react'
import raktaIcon from '../assets/rakta.webp';
import amityIcon from '../assets/Amity.webp';
import cetpaIcon from '../assets/cetpa.webp';

function Experience() {
  return (
    <section className="hero" id="ExperienceSection">
      <h2 className="main-title">
        Work <span className="title-highlight">Experience </span>
      </h2>
      <div className="cards-container">
        <ExperienceCard 
          icon="rakta.webp"
          title="Android Developer"
          company="Intern at Rakta Cure"
          description="Contributing to innovative Android development projects and enhancing my expertise in building impactful healthcare solutions."
        />
        <ExperienceCard 
          icon="Amity.webp"
          title="TechPreneur Core Team"
          company="Amity University, Patna"
          description="Core team member of TechPreneur at Amity University, contributing to innovative tech initiatives and entrepreneurial projects."
        />
        <ExperienceCard 
          icon="cetpa.webp"
          title="Android Training"
          company="Training at CETPA Info Tech"
          description="Completed comprehensive Android Development training at CETPA Infotech, gaining hands-on experience in building efficient and user-friendly Android applications."
        />
      </div>
    </section>
  )
}

function ExperienceCard({ icon, title, company, description }) {
  return (
    <div className="card">
      <img src={icon === 'rakta.webp' ? raktaIcon : icon === 'Amity.webp' ? amityIcon : cetpaIcon} alt={title} className="icon" />
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Experience

