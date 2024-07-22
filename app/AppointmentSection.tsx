// components/AppointmentSection.tsx

import React from 'react';
import styles from './AppointmentSection.module.css';

const AppointmentSection: React.FC = () => {
    return (
        <div className={styles['appointment-section']}>
            <div className={styles.overlay}></div>
            <div className={styles['appointment-container']}>
                <div className={styles['appointment-image']}>
                    <img src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?cs=srgb&dl=pexels-shkrabaanthony-5215024.jpg&fm=jpg&_gl=1*1ar3pkq*_ga*NDAzNzYwODIzLjE3MTgyOTQ5NjA.*_ga_8JE65Q40S6*MTcyMTE0Njk5My4xMS4xLjE3MjExNDcwNTkuMC4wLjA." alt="Doctor" />
                </div>
                <div className={styles['appointment-form']}>
                    <h2>Make an appointment</h2>
                    <h3>Health Checkup Packs Online with Biogenic</h3>
                    <form action="#">
                        <input type="text" placeholder="Name*" required />
                        <input type="email" placeholder="Your email*" required />
                        <select required>
                            <option value="">Choose Doctor...</option>
                            {/* Add options here */}
                        </select>
                        <input type="text" placeholder="Choose Time" required />
                        <textarea placeholder="Describe Your Problem" required></textarea>
                        <button type="submit">Make an Appointment</button>
                    </form>
                </div>
            </div>
            <div className={styles['emergency-contact']}>
                <p>Emergency cases</p>
                <p className={styles['emergency-number']}>123-456-789</p>
            </div>
        </div>
    );
};

export default AppointmentSection;
