// components/NewsletterSection.tsx

import React from 'react';
import styles from './NewsletterSection.module.css';

const NewsletterSection: React.FC = () => {
    return (
        <div className={styles['newsletter-section']}>
            <div className={styles['newsletter-box']}>
                <div className={styles['newsletter-content']}>
                    <div className={styles['newsletter-text-container']}>
                        <h2 className={styles['newsletter-title']}>Join Our Newsletter</h2>
                        <p className={styles['newsletter-text']}>Subscribe For Any News Update From Wecare</p>
                    </div>
                    <form className={styles['newsletter-form']} action="#">
                        <input type="email" placeholder="Email address" className={styles['newsletter-input']} />
                        <button type="submit" className={styles['newsletter-button']}>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;
