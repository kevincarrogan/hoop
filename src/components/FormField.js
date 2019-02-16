import React from 'react';

import classNames from 'classnames';

import styles from './FormField.module.css';

const FormField = ({
  input,
  label,
  type,
  placeholder,
  instructions,
  optional,
  meta: { touched, error }
}) => {
  const className = classNames(styles.formField, {[styles.error]: touched && error});
  let inputElement;

  switch (type) {
    default:
      inputElement = <input {...input} className={styles.input} placeholder={placeholder} id={input.name} type={type} />;
  }

  return (
    <div className={className}>
      <div className={styles.labelWrapper}>
        <label className={styles.label} htmlFor={input.name}>{label}</label>
        {optional && <span className={styles.optional}>Optional</span>}
      </div>
      {instructions && <p className={styles.instructions}>{instructions}</p>}
      {inputElement}
      {error && touched && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default FormField;
