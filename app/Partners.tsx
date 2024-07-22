import React from 'react';
import styles from './Partners.module.css';

const Partners: React.FC = () => {
  return (
    <section className={styles.partners}>
      <div className="container">
        <h2>Our Partners</h2>
        <div className={styles['partners-logos']}>
          <img
            src="https://itindeedtheme.com/meditest/wp-content/uploads/2023/11/meditest-partner-8.png"
            alt="Partner 1"
          />
          <img
            src="https://itindeedtheme.com/meditest/wp-content/uploads/2023/11/meditest-partner-7.png"
            alt="Partner 2"
          />
          <img
            src="https://itindeedtheme.com/meditest/wp-content/uploads/2023/11/meditest-partner-6.png"
            alt="Partner 3"
          />
          <img
            src="https://itindeedtheme.com/meditest/wp-content/uploads/2023/11/meditest-partner-5.png"
            alt="Partner 4"
          />
          <img
            src="https://itindeedtheme.com/meditest/wp-content/uploads/2023/11/meditest-partner-4.png"
            alt="Partner 5"
          />
        </div>
        <br />
        <div className={styles['partners-logo']}>
          <img
            src="https://itindeedtheme.com/meditest/wp-content/uploads/2023/11/meditest-partner-3.png"
            alt="Partner 6"
          />
          <img
            src="https://itindeedtheme.com/meditest/wp-content/uploads/2023/11/meditest-partner-2.png"
            alt="Partner 7"
          />
          <img
            src="https://itindeedtheme.com/meditest/wp-content/uploads/2023/11/meditest-partner-1.png"
            alt="Partner 8"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
