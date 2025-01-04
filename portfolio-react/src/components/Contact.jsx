import React from 'react'
import homeIcon from '../assets/home.webp';
import briefcaseIcon from '../assets/briefcase.webp';
import serviceIcon from '../assets/service.webp';
import creativeThinkingIcon from '../assets/creative-thinking.webp';
import terminalIcon from '../assets/terminal.webp';
import badgeIcon from '../assets/badge.webp';
import facebookIcon from '../assets/facebook.webp';
import twitterIcon from '../assets/twitter.webp';
import linkedinIcon from '../assets/linkedin.webp';
import whatsappIcon from '../assets/whatsapp.webp';
import instagramIcon from '../assets/instagram.webp';
import shareIcon from '../assets/share.webp';

const iconMap = {
  'home.webp': homeIcon,
  'briefcase.webp': briefcaseIcon,
  'service.webp': serviceIcon,
  'creative-thinking.webp': creativeThinkingIcon,
  'terminal.webp': terminalIcon,
  'badge.webp': badgeIcon
};

const socialIconMap = {
  'facebook.webp': facebookIcon,
  'twitter.webp': twitterIcon,
  'linkedin.webp': linkedinIcon,
  'whatsapp.webp': whatsappIcon,
  'instagram.webp': instagramIcon,
  'share.webp': shareIcon
};

function Contact() {
  const icons = [
    { title: 'Home', image: 'home.webp', href: '#HomeSection' },
    { title: 'Experience', image: 'briefcase.webp', href: '#ExperienceSection' },
    { title: 'Services', image: 'service.webp', href: '#ServiceSection' },
    { title: 'Skills', image: 'creative-thinking.webp', href: '#SkillsSection' },
    { title: 'Projects', image: 'terminal.webp', href: '#ProjectsSection' },
    { title: 'Rewards', image: 'badge.webp', href: '#RewardsSection' }
  ]

  const socialIcons = [
    { title: 'Share on Facebook', image: 'facebook.webp', href: 'https://www.facebook.com/sharer/sharer.php?u=https://www.yourwebsite.com' },
    { title: 'Share on Tweet', image: 'twitter.webp', href: 'https://twitter.com/intent/tweet?url=https://www.yourwebsite.com&text=Check%20this%20out!' },
    { title: 'Share on LinkedIn', image: 'linkedin.webp', href: 'https://www.linkedin.com/shareArticle?mini=true&url=https://www.yourwebsite.com' },
    { title: 'Share on WhatsApp', image: 'whatsapp.webp', href: 'https://wa.me/?text=Check%20this%20out%20https://www.yourwebsite.com' },
    { title: 'Share on Instagram', image: 'instagram.webp', href: 'https://www.instagram.com/?url=https://www.yourwebsite.com' },
    { title: 'Share', image: 'share.webp', href: 'https://www.addtoany.com/share' }
  ]

  return (
    <section className="contact-section">
      <h2 className="main-title">
        Ready to know <span className="title-highlight">me</span> more?
      </h2>
      <p className="contact-subtext">
        Reach out to me today and let's create something amazing together.
      </p>
      <div className="cta-button">
        <button className="interactive-btn">Let's get in touch</button>
      </div>
      <div className="icon-container">
        {icons.map((icon, index) => (
          <IconCard key={index} {...icon} />
        ))}
      </div>
      <div className="social-share-container">
        <p>Share On</p>
        {socialIcons.map((icon, index) => (
          <SocialShareCard key={index} {...icon} />
        ))}
      </div>
    </section>
  )
}

function IconCard({ title, image, href }) {
  return (
    <div className="icon-card" data-title={title}>
      <a href={href}><img src={iconMap[image]} className="icon" alt={title} /></a>
    </div>
  )
}

function SocialShareCard({ title, image, href }) {
  return (
    <div className="social-share-card" data-title={title}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={socialIconMap[image]} className="social-icon" alt={title} />
      </a>
    </div>
  )
}

export default Contact

