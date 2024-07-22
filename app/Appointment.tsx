import React from 'react';
import styles from './Appointment.module.css';

const Appointment: React.FC = () => {
  return (
    <section className={styles.appointment}>
      <div className="container">
        <h2>Book an Appointment</h2>
        <form>
          <div className={styles['input-container']}>
            <label htmlFor="email">
              Email Address<br />MedicalInfo@gmail.com
            </label>
          </div>
          
          <div className={styles['input-container']}>
            <label htmlFor="date">
              Appointment Date<br />18-07-2024
            </label>
          </div>
          
          <div className={styles['input-container']}>
            <label htmlFor="phone">
              Phone No<br />+123 456 789
            </label>
          </div>
          
          <label className={styles['submit-button']} htmlFor="submit">
            Book Now
          </label>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
