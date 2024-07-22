import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles['about-content']}>
          <div className={styles['about-text']}>
            <h2>About Us</h2>
            <h1>Complete Medical Solutions In One Place and Good Health</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis tempus orci ut lacinia. Sed tempor hendrerit fernen Pellentesque ac diam commodo.
            </p>

            <div className={styles['about-list']}>
              <ul className={styles.column1}>
                <li>• Positive Feedback</li><br />
                <li>• From Scientific Journal</li>
              </ul>
              <ul className={styles.column2}>
                <li>• 100% Expert Doctors</li><br />
                <li>• Medicine & Instrument</li>
              </ul>
            </div>
            <br />
            <button>About More</button>
          </div>
        </div>
        <div className={styles['about-image']}>
          <img
            src="https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?cs=srgb&dl=pexels-thirdman-5327653.jpg&fm=jpg&_gl=1*inhpv9*_ga*NDAzNzYwODIzLjE3MTgyOTQ5NjA.*_ga_8JE65Q40S6*MTcyMDU0Mjk0Ni45LjEuMTcyMDU0Mzc3NC4wLjAuMA.."
            alt="About Us Image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
