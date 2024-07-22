import React from 'react';
import styles from './PricingPlan.module.css';

const PricingPlan: React.FC = () => {
  return (
    <div className={styles['pricing-plan']}>
      <div className={styles['container']}>
        <div className={styles['header']}>
          <div className={styles['title']}>
            <h3>Pricing Plan</h3>
            <h2>Get Started Now Pick A Plan Later</h2>
          </div>
          <p className={styles['description']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis tempus orci ut lacinia. Sed tempor hendrerit.
          </p>
        </div>
        <div className={styles['plan-cards']}>
          <div className={styles['plan-card']}>
            <h4>Standard</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis tempus.</p>
            <p className={styles['price']}>
              $119 <span>Per Seat / Per Month</span>
            </p>
            <ul>
              <li>Arthritis</li>
              <li>Cardiac risk markers</li>
              <li>Complete hemogram</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className={`${styles['plan-card']} ${styles['professional']}`}>
            <h4>Professional</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis tempus.</p>
            <p className={styles['price']}>
              $159 <span>Per Seat / Per Month</span>
            </p>
            <ul>
              <li>Arthritis</li>
              <li>Cardiac risk markers</li>
              <li>Complete hemogram</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className={styles['plan-card']}>
            <h4>Prestige</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis tempus.</p>
            <p className={styles['price']}>
              $189 <span>Per Seat / Per Month</span>
            </p>
            <ul>
              <li>Arthritis</li>
              <li>Cardiac risk markers</li>
              <li>Iron deficiency</li>
            </ul>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
