import React from 'react';
import styles from './ServiceReviews.module.css';

const ServiceReviews: React.FC = () => {
  return (
    <div className={styles['service-reviews']}>
      <div className={styles['service-reviews-header']}>
        <div className={styles['service-reviews-titles']}>
          <h3>Our Service & Testimonial</h3>
          <h2>Service & Reviews</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis tempus orci ut lacinia. Sed tempor hendrerit.
        </p>
      </div>
      <div className={styles['testimonial']}>
        <div className={styles['testimonial-image']}>
          <img src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?cs=srgb&dl=pexels-thirdman-5327656.jpg&fm=jpg&_gl=1*1g2af1f*_ga*NDAzNzYwODIzLjE3MTgyOTQ5NjA.*_ga_8JE65Q40S6*MTcyMTIyNTM4Ni4xMy4xLjE3MjEyMjU2MTEuMC4wLjA." alt="Doctor" />
        </div>
        <div className={styles['testimonial-content']}>
          <p>
            hospitals play a vital role in medical research and education. Many hospitals are affiliated with academic institutions, fostering an environment of constant learning, innovation, and the exchange of medical knowledge. These institutions serve as training grounds for aspiring healthcare professionals, where they can gain hands-on experience and learn from experienced mentors. Be ready to provide your full name, contact information.
          </p>
          <div className={styles['testimonial-info']}>
            <h4>Carry Malan</h4>
            <p>Happy Patients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceReviews;
