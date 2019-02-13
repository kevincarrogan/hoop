import React from 'react';

import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <img className={styles.activityAvatar} src="https://www.fillmurray.com/40/40" />
    <div>
      <h1 className={styles.h1}>Mr Boing's Trampoline Club</h1>
      <nav>
        <a className={styles.link} href="#">Back to Your Activities</a>
      </nav>
    </div>
  </header>
);

export default Header;
