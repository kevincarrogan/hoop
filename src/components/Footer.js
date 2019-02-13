import React from 'react';

import styles from './Footer.module.css';

const Footer = ({children}) => (
  <footer className={styles.footer}>
    {children}
  </footer>
);

export default Footer;
