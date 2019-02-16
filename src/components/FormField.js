import React from 'react';

import classNames from 'classnames';

const FormField = ({
  input,
  label,
  type,
  placeholder,
  instructions,
  meta: { touched, error }
}) => {
  const className = classNames('form-field', {error: touched && error});
  let inputElement;

  switch (type) {
    default:
      inputElement = <input {...input} placeholder={placeholder} id={input.name} type={type} />;
  }

  return (
    <div className={className}>
      <label htmlFor={input.name}>{label}</label>
      {instructions && <p className="instructions">{instructions}</p>}
      {inputElement}
      {error && touched && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FormField;
