import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={`${styles.footerSection} ${styles.footerAbout}`}>
                    <h3 className={styles.footerLogo}>Meditest</h3>
                    <p className={styles.footerText}>Lorem ipsum is simply dummy text printing and typesetting industry. Lorem Ipsum has been industry.</p>
                </div>
                <div className={`${styles.footerSection} ${styles.footerLinks}`}>
                    <h4 className={styles.footerTitle}>Support</h4>
                    <ul className={styles.footerList}>
                        <li className={styles.footerItem}><a href="#">Teams</a></li>
                        <li className={styles.footerItem}><a href="#">Careers</a></li>
                        <li className={styles.footerItem}><a href="#">Blog</a></li>
                        <li className={styles.footerItem}><a href="#">Security</a></li>
                    </ul>
                </div>
                <div className={`${styles.footerSection} ${styles.footerLinks}`}>
                    <h4 className={styles.footerTitle}>Product</h4>
                    <ul className={styles.footerList}>
                        <li className={styles.footerItem}><a href="#">Clinical Board</a></li>
                        <li className={styles.footerItem}><a href="#">News</a></li>
                        <li className={styles.footerItem}><a href="#">Events</a></li>
                        <li className={styles.footerItem}><a href="#">Service</a></li>
                    </ul>
                </div>
                <div className={`${styles.footerSection} ${styles.footerLinks}`}>
                    <h4 className={styles.footerTitle}>Security</h4>
                    <ul className={styles.footerList}>
                        <li className={styles.footerItem}><a href="#">Privacy Policy</a></li>
                        <li className={styles.footerItem}><a href="#">Terms & Conditions</a></li>
                        <li className={styles.footerItem}><a href="#">Reviews</a></li>
                        <li className={styles.footerItem}><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className={`${styles.footerSection} ${styles.footerContact}`}>
                    <h4 className={styles.footerTitle}>Contact Us</h4>
                    <p className={styles.footerContactText}>Phone: +55(0)37-95-75</p>
                    <p className={styles.footerContactText}>Higntfly.com</p>
                    <div className={styles.footerSocial}>
                    
                    <li><i className="fab fa-facebook-f"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-linkedin-in"></i></li>
                
                    
                        
                    </div>
                </div>
            </div>
            <hr className={styles.footerLine} />
            <div className={styles.copyRight}>
                <p>&copy; Project By MONICA KHINCHI</p>
            </div>
        </footer>
    );
}

export default Footer;
