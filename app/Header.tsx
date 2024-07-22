import React from 'react';
import styles from './Header.module.css'; // Import the CSS module
import { FaSearch } from 'react-icons/fa'; // Import Font Awesome search icon

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-black py-4">
      <div className={`container mx-auto flex justify-between items-center px-4 ${styles.header}`}>
        <div className={styles.logoWrapper}>
          <img
            src="https://media.istockphoto.com/id/1345301535/photo/plus-sign-icon.jpg?s=1024x1024&w=is&k=20&c=dKwMKkIh0W76wDPk9qlbhqHXmE8HDO_Pp53PXTgaiVQ="
            alt="MediTest Logo"
            className={styles.logoImage}
          />
          <span className={styles['logo-text']}>MediTest</span>
        </div>
        <nav className={styles.nav}>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Service</a></li>
            <li><a href="#" className="hover:text-gray-400">Shop</a></li>
            <li><a href="#" className="hover:text-gray-400">Doctors Booking</a></li>
            <li><a href="#" className="hover:text-gray-400">Pages</a></li>
          </ul>
        </nav>
        <div className={`flex items-center ${styles['search-contact']}`}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search..."
              className={styles['search-input']}
              
            />
            <FaSearch className={styles.searchIcon} /> {/* Use the search icon from react-icons */}
          </div>
          <button className={styles['contact-button']}>
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
