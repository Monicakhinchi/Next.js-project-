import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css'; // Import the CSS module

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles['hero-content']}`}>
        <div className={styles['hero-text']}>
          <h1>Take The World&apos;s Best Quality Treatment</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis
            tempus orci ut lacinia. Sed tempor hendrerit fermentum.
          </p>
          <div className={styles['hero-buttons']}>
            <button>Appointment</button>
            <button>+123 456 789</button>
          </div>
          <div className={styles['hero-stats']}>
            <div className={styles.stat}>
              <h3>20+</h3>
              <p>Years Of Experience</p>
            </div>
            <div className={styles.stat}>
              <h3>140+</h3>
              <p>Thousands Doctor</p>
            </div>
            <div className={styles.stat}>
              <h3>500+</h3>
              <p>Worldwide Offices</p>
            </div>
          </div>
        </div>
        <div className={styles['hero-image']}>
          <Image
            src="https://images.pexels.com/photos/5996762/pexels-photo-5996762.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-5996762.jpg&fm=jpg&_gl=1*1pjeyoi*_ga*NDAzNzYwODIzLjE3MTgyOTQ5NjA.*_ga_8JE65Q40S6*MTcyMDI2NzcxNS4yLjEuMTcyMDI2ODA5Ni4wLjAuMA.."
            alt="Hero Image"
            width={500} // Replace with actual width of your image
            height={300} // Replace with actual height of your image
          />
        </div>
      </div>
      <div><br></br></div>
    </section>
  );
};

export default Hero;
