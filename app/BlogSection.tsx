// components/BlogSection.tsx

import React from 'react';
import styles from './BlogSection.module.css';

const BlogSection: React.FC = () => {
    return (
        <div className={styles['blog-section']}>
            <h2 className={styles['blog-title']}>From The Blog</h2>
            <h3 className={styles['blog-update']}>Latest Update</h3>
            <div className={styles['blog-container']}>
                <div className={styles['blog-post']}>
                    <img src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?cs=srgb&dl=pexels-shvetsa-3845810.jpg&fm=jpg&_gl=1*1juewqs*_ga*NDAzNzYwODIzLjE3MTgyOTQ5NjA.*_ga_8JE65Q40S6*MTcyMTE0NDMyNS4xMC4xLjE3MjExNDQ0MzEuMC4wLjA." alt="Blog Image 1" className={styles['blog-image']} />
                    <div className={styles['blog-details']}>
                        <p className={styles['blog-date']}>Dec 1, 2023 | 0 Comment</p>
                        <h4 className={styles['blog-headline']}>Explore the essentials of heart care, from lifestyle</h4>
                        <p className={styles['blog-summary']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis enim sit amet placerat vestibulum.</p>
                        <p className={styles['blog-author']}>Meditest | Cardiology</p>
                        <a href="#" className={styles['learn-more']}>Learn more</a>
                    </div>
                </div>
                <div className={styles['blog-post']}>
                    <img src="https://images.pexels.com/photos/8260437/pexels-photo-8260437.jpeg?cs=srgb&dl=pexels-mm-dental-56682202-8260437.jpg&fm=jpg&_gl=1*1bg8xw7*_ga*NDAzNzYwODIzLjE3MTgyOTQ5NjA.*_ga_8JE65Q40S6*MTcyMTE0NDMyNS4xMC4xLjE3MjExNDQzNjUuMC4wLjA." alt="Blog Image 2" className={styles['blog-image']} />
                    <div className={styles['blog-details']}>
                        <p className={styles['blog-date']}>Dec 1, 2023 | 0 Comment</p>
                        <h4 className={styles['blog-headline']}>Lifestyle adjustments that can significantly enhance your...</h4>
                        <p className={styles['blog-summary']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis enim sit amet placerat vestibulum.</p>
                        <p className={styles['blog-author']}>Meditest | Cosmetic Dentistry</p>
                        <a href="#" className={styles['learn-more']}>Learn more</a>
                    </div>
                </div>
                <div className={styles['blog-post']}>
                    <img src="https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg?cs=srgb&dl=pexels-jonathanborba-3279209.jpg&fm=jpg&_gl=1*12oyrkd*_ga*NDAzNzYwODIzLjE3MTgyOTQ5NjA.*_ga_8JE65Q40S6*MTcyMTE0NDMyNS4xMC4xLjE3MjExNDQ0NzkuMC4wLjA." alt="Blog Image 3" className={styles['blog-image']} />
                    <div className={styles['blog-details']}>
                        <p className={styles['blog-date']}>Dec 1, 2023 | 0 Comment</p>
                        <h4 className={styles['blog-headline']}>Shed light on prevalent heart conditions, such as</h4>
                        <p className={styles['blog-summary']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis enim sit amet placerat vestibulum.</p>
                        <p className={styles['blog-author']}>Meditest | Oral Health</p>
                        <a href="#" className={styles['learn-more']}>Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
