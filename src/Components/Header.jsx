import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.ted}>
        <h3>TED</h3>
        <h5>Ideas Change Everything</h5>
      </div> 
      
      <nav>
        <ul className={styles.innerDiv}>
          <li className={styles.dropdown}>
            <Link to="/">Home</Link>
            <ul className={styles.dropdownContent}>
              <li><Link to="/home">Home 1</Link></li>
              <li><Link to="/home-2">Home 2</Link></li>
              <li><Link to="/home-3">Home 3</Link></li>
            </ul>
          </li>
          <li className={styles.dropdown}>
            <Link to="/about">About</Link>
            <ul className={styles.dropdownContent}>
              <li><Link to="/about-1">About 1</Link></li>
              <li><Link to="/about-2">About 2</Link></li>
              <li><Link to="/about-3">About 3</Link></li>
            </ul>
          </li>
          <li className={styles.dropdown}>
            <Link to="/discover">Discover</Link>
            <ul className={styles.dropdownContent}>
              <li><Link to="/discover-1">Discover 1</Link></li>
              <li><Link to="/discover-2">Discover 2</Link></li>
              <li><Link to="/discover-3">Discover 3</Link></li>
            </ul>
          </li>
          <li className={styles.dropdown}>
            <Link to="/watch">Watch</Link>
            <ul className={styles.dropdownContent}>
              <li><Link to="/watch-1">Watch 1</Link></li>
              <li><Link to="/watch-2">Watch 2</Link></li>
              <li><Link to="/watch-3">Watch 3</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
