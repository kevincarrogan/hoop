import React from 'react';

import ActivityFormStepDataSource from '../containers/ActivityFormStepDataSource';

import Button from './Button.js';

import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerWrapper}>
      <ActivityFormStepDataSource>{
        ({previousStep, formId, hasPreviousStep, hasNextStep}) => (
          <>
            <Button
              className={styles.secondaryAction}
              disabled={!hasPreviousStep}
              onClick={previousStep}
            >
              Back
            </Button>
            <Button
              className={styles.mainAction}
              disabled={!hasNextStep}
              form={formId}
            >
              Next
            </Button>
          </>
        )
      }</ActivityFormStepDataSource>
    </div>
  </footer>
);

export default Footer;
