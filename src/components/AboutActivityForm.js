import React from 'react';
import { reduxForm, Form, Field } from 'redux-form';

import './Form.css';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.recommendedAgeFrom) {
    errors.recommendedAgeFrom = 'Required';
  }

  if (!values.recommendedAgeTo) {
    errors.recommendedAgeTo = 'Required';
  }

  if (values.recommendedAgeFrom && values.recommendedAgeTo) {
    let ageFrom = parseInt(values.recommendedAgeFrom, 10);
    let ageTo = parseInt(values.recommendedAgeTo, 10);

    if (ageTo < ageFrom) {
      errors.age = "We think you've got the ages the wrong way around.";
    }
  }

  if (!values.webpage) {
    errors.webpage = 'Required';
  }

  return errors;
};

let AboutActivityForm = ({ id, handleSubmit, onSubmit }) => {
  return (
    <>
      <h1>About your activity</h1>
      <Form id={id} className="base-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label htmlFor="name">Activity Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div className="form-field">
          <label>Recommended Age</label>
          <Field name="recommendedAgeFrom" component="select">
            <option>From</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Field>
          <Field name="recommendedAgeTo" component="select">
            <option>To</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Field>
        </div>
        <div className="form-field">
          <label htmlFor="webpage">Activity Webpage</label>
          <p className="instructions">Use a specific page if possible. Try to avoid homepage links.</p>
          <Field name="webpage" component="input" type="text" placeholder="e.g. example.com/activity" />
        </div>
        <div className="form-field">
          <div className="label-wrapper">
            <label htmlFor="phoneNumber">Activity Phone Number</label>
            <span className="optional">Optional</span>
          </div>
          <Field name="phoneNumber" component="input" type="text" />
        </div>
      </Form>
    </>
  );
};

AboutActivityForm = reduxForm({
  form: 'activity',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(AboutActivityForm);

export default AboutActivityForm;
