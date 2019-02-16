import React from 'react';

import classNames from 'classnames';

import styles from './FormField.module.css';

const GroupedField = ({label, children}) => {
  return (
    <div className={styles.groupedField}>
      <div className={styles.labelWrapper}>
        <label className={styles.label}>{label}</label>
      </div>
      <div className={styles.groupedFieldFieldsWrapper}>
        {children}
      </div>
    </div>
  );
};

const FormField = ({
  input,
  label,
  type,
  placeholder,
  instructions,
  optional,
  children,
  grouped,
  meta: { touched, error }
}) => {
  const className = classNames(
    styles.formField,
    {
      [styles.error]: touched && error,
      [styles.grouped]: !!grouped
    });
  let inputElement;

  switch (type) {
    case 'select':
      inputElement = <select {...input} className={styles.select}>{children}</select>
      break
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

export {GroupedField, FormField};
