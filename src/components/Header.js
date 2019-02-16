import React from 'react';

import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <img alt="The activity's avatar" className={styles.activityAvatar} src="https://www.fillmurray.com/40/40" />
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Mr Boing's Trampoline Club</h1>
      <nav className={styles.nav}>
        <a className={styles.link} href="/">Back to Your Activities</a>
      </nav>
    </div>
  </header>
);

export default Header;
