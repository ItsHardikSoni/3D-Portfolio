import React from 'react'
import androidIcon from '../assets/android.webp';
import webIcon from '../assets/web.webp';
import uiuxIcon from '../assets/uiux.webp';

function Services() {
  return (
    <section className="service-section" id="ServiceSection">
      <h2 className="main-title">
        My <span className="title-highlight">Services</span>
      </h2>
      <div className="service-container">
        <ServiceCard 
          icon="android.webp"
          title="Android Development"
          description="Custom Android app development tailored to your specific needs and requirements."
        />
        <ServiceCard 
          icon="web.webp"
          title="Web Development"
          description="Responsive and dynamic web applications using modern frontend technologies."
        />
        <ServiceCard 
          icon="uiux.webp"
          title="UI/UX Design"
          description="Intuitive and visually appealing user interfaces for both mobile and web platforms."
        />
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <img src={icon === 'android.webp' ? androidIcon : icon === 'web.webp' ? webIcon : uiuxIcon} alt={title} className="service-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Services

