import React from 'react';

import classNames from 'classnames';

import styles from './Button.module.css';

const Button = ({className, ...props}) => {
  const classes = classNames(styles.button, className);

  return <button className={classes} {...props} />;
};

export default Button;
