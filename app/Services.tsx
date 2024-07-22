import React from 'react';
import styles from './Services.module.css';

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className="container">
        <div className={styles['services-content']}>
          <div className={styles['services-text']}>
            <h2>High Quality Services for You</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis tempus orci ut lacinia. Sed tempor hendrerit.</p>
          </div>
          <div className={styles['service-cards']}>
            <div className={styles.card}>
              <h3>Dental Care</h3>
              <p>Hospitals are equipped with advanced medical technologies and facilities.</p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <h3>Heart Care</h3>
              <p>Hospitals are equipped with advanced medical technologies and facilities.</p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <h3>Ambulance</h3>
              <p>Hospitals are equipped with advanced medical technologies and facilities.</p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <h3>Laboratory</h3>
              <p>Hospitals are equipped with advanced medical technologies and facilities.</p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <h3>Eye Care</h3>
              <p>Hospitals are equipped with advanced medical technologies and facilities.</p>
              <a href="#">Read More</a>
            </div>
            <div className={styles.card}>
              <h3>Radiology</h3>
              <p>Hospitals are equipped with advanced medical technologies and facilities.</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <button className={styles['appointment-button']}>Make an Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
