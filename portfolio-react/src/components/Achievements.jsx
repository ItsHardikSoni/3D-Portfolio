import React from 'react'
import cricketPic from '../assets/cricket_pic.webp';
import paperPrint from '../assets/paper_print.webp';
import mpl from '../assets/mpl.webp';
import medal from '../assets/medal.webp';
import xavierMedal from '../assets/xavier_madel.webp';
import xavierMedal2 from '../assets/xavier_madel2.webp';
import ball from '../assets/ball.webp';
import ball2 from '../assets/ball2.webp';
import champions from '../assets/champions.webp';

const achievementImages = {
  'cricket_pic.webp': cricketPic,
  'paper_print.webp': paperPrint,
  'mpl.webp': mpl,
  'medal.webp': medal,
  'xavier_madel.webp': xavierMedal,
  'xavier_madel2.webp': xavierMedal2,
  'ball.webp': ball,
  'ball2.webp': ball2,
  'champions.webp': champions
};

function Achievements() {
  const achievements = [
    {
      image: 'cricket_pic.webp',
      title: 'Inter University Cricket Tournament - KIIT Odisha'
    },
    {
      image: 'paper_print.webp',
      title: 'Bihar University Team for East Zone University Cricket Tournament At KIIT University'
    },
    {
      image: 'mpl.webp',
      title: 'Most Valuable Person Of The Event - MPL (Muzaffarpur Premier League)'
    },
    {
      image: 'medal.webp',
      title: 'Friendship Match - Third Highest Runs - Bronze medal'
    },
    {
      images: ['xavier_madel.webp', 'xavier_madel2.webp'],
      title: 'Inter School Cricket Tournament - Third Highest Wicket - Bronze Medal'
    },
    {
      images: ['ball.webp', 'ball2.webp'],
      title: 'Friendship Match - Highest Wickets - Leather Cricket Ball'
    },
    {
      image: 'champions.webp',
      title: 'Challenger\'s Trophy - Best Performance - Silver Medal'
    }
  ]

  return (
    <section className="achievements-section" id="RewardsSection">
      <h2 className="main-title">
        See my proud <span className="title-highlight">achievements</span>
      </h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </section>
  )
}

function AchievementCard({ image, images, title }) {
  return (
    <div className="card-flip">
      {images ? (
        <>
          <img src={achievementImages[images[0]]} alt={title} className="card__image" />
          <img src={achievementImages[images[1]]} alt={title} className="card__image" />
        </>
      ) : (
        <img src={achievementImages[image]} alt={title} className="card__image" />
      )}
      <div className="card__content">
        <p className="card__title">{title}</p>
      </div>
    </div>
  )
}

export default Achievements

