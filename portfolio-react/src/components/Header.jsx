import React from 'react'
import profilePic from '../assets/profile_pix.webp';
import instagramIcon from '../assets/instagram.webp';
import githubIcon from '../assets/github.webp';
import linkedinIcon from '../assets/linkedin.webp';
import gmailIcon from '../assets/gmail.webp';
import whatsappIcon from '../assets/whatsapp.webp';

function Header() {
  return (
    <header className="hero" id="HomeSection">
      <div className="intro">
        <h1 className="title">Judges a book <br /> by its cover...</h1>
        <p className="subtitle"><span className="cover">Because</span> if the cover does not inspire you, what can?</p>
      </div>
      <div className="emoji">
        <img src={profilePic} alt="Ayush - Android Developer Profile" className="emoji-img" />
      </div>
      <div className="description">
        <p className="hello">Hello! I am <span className="name">Ayush</span></p>
        <h2>I'm a Android Developer.</h2>
        <p>Currently, I'm a intern at <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Rakta Cure</a>.</p>
        <p className="details">
          A self-taught Android developer | Mobile App Development with 3+ years of experience in the industry.
          Passionate about designing and building intuitive Android applications,
          I focus on creating impactful digital solutions that deliver exceptional user experiences.
          Skilled in Java and modern development frameworks,
          I strive to bring ideas to life on the Android platform.
        </p>
      </div>
      <div className="cv-download">
        <div className="cv-container">
          <a href="/Images/Resume.pdf" download="Ayush-Resume.pdf"><button className="cv-button">Download CV</button></a>
        </div>
      </div>
      <div className="card-social">
        <SocialButton href="https://www.instagram.com/its.hardiksoni/" icon="instagram" />
        <SocialButton href="https://github.com/ItsHardikSoni" icon="github" />
        <SocialButton href="https://www.linkedin.com/in/its-hardik-soni/" icon="linkedin" />
        <SocialButton href="/cdn-cgi/l/email-protection#046c6576606d6f776b6a6d34353d446369656d682a676b69" icon="gmail" />
        <SocialButton href="https://wa.me/9661850789" icon="whatsapp" />
      </div>
    </header>
  )
}

function SocialButton({ href, icon }) {
  return (
    <button className="Btn">
      <span className="imgContainer">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img src={icon === 'instagram' ? instagramIcon : icon === 'github' ? githubIcon : icon === 'linkedin' ? linkedinIcon : icon === 'gmail' ? gmailIcon : whatsappIcon} alt={`${icon} Icon`} />
        </a>
      </span>
      <span className={`BG${icon === 'instagram' ? '1' : icon === 'github' ? '2' : icon === 'linkedin' ? '3' : icon === 'gmail' ? '4' : '5'}`}></span>
    </button>
  )
}

export default Header

