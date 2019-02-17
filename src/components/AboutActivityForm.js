import React from 'react';
import { reduxForm, Form, Field } from 'redux-form';
import range from 'lodash.range';
import validUrl from 'valid-url';

import { GroupedField, FormField } from './FormField.js';

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
      errors.recommendedAgeTo = "We think you've got the ages the wrong way around.";
    }
  }

  if (!values.webpage) {
    errors.webpage = 'Required';
  }

  if (values.webpage && !validUrl.isUri(values.webpage)) {
    errors.webpage = "You've not entered a valid webpage."
  }

  return errors;
};

let AboutActivityForm = ({ id, handleSubmit, onSubmit }) => {
  const minAge = 1;
  const maxAge = 11;
  return (
    <>
      <h1>About your activity</h1>
      <Form id={id} className="base-form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          label="Activity Name"
          name="name"
          component={FormField}
          type="text"
        />

        <GroupedField label="Recommended Age">
          <Field
            name="recommendedAgeFrom"
            component={FormField}
            type="select"
            grouped={true}
          >
            <option value="">From</option>
            {
              range(minAge, maxAge + 1).map(age => {
                return <option key={age} value={age}>{age}</option>
              })
            }
          </Field>
          <Field
            name="recommendedAgeTo"
            component={FormField}
            type="select"
            grouped={true}
          >
            <option value="">To</option>
            {
              range(minAge, maxAge + 1).map(age => {
                return <option key={age} value={age}>{age}</option>
              })
            }
          </Field>
        </GroupedField>

        <Field
          label="Activity Webpage"
          name="webpage" 
          component={FormField}
          placeholder="e.g. example.com/activity"
          instructions="Use a specific page if possible. Try to avoid homepage links."
          type="text"
        />

        <Field
          label="Activity Phone Number"
          name="phoneNumber"
          component={FormField}
          type="text"
          optional={true}
        />
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
