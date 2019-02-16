import React from 'react';

import Button from './Button.js';

import styles from './Footer.module.css';

const Footer = ({formId}) => (
  <footer className={styles.footer}>
    <div className={styles.footerWrapper}>
      <Button className={styles.secondaryAction}>Back</Button>
      <Button className={styles.mainAction} form={formId}>Next</Button>
    </div>
  </footer>
);

export default Footer;
