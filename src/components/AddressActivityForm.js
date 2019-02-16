import React from 'react';

import { reduxForm, Form, Field } from 'redux-form';

import { FormField } from './FormField.js';

import './Form.css';

const validate = values => {
  const errors = {};

  if (!values.placeName) {
    errors.placeName = 'Required';
  }

  if (!values.postcode) {
    errors.postcode = 'Required';
  }

  return errors;
};

let AddressActivityForm = ({ id, handleSubmit, onSubmit }) => (
  <Form id={id} className="base-form" onSubmit={handleSubmit(onSubmit)}>
    <Field
      label="Place Name"
      name="placeName"
      component={FormField}
      type="text"
    />

    <Field
      label="Postcode"
      name="postcode"
      component={FormField}
      type="text"
    />

    <Field
      label="Building Unit"
      name="buildingUnit"
      component={FormField}
      type="text"
      optional={true}
    />

    <Field
      label="Building Name"
      name="buildingName"
      component={FormField}
      type="text"
      optional={true}
    />

    <Field
      label="Street Number"
      name="streetNumber"
      component={FormField}
      type="text"
      optional={true}
    />

    <Field
      label="Street Name"
      name="streetName"
      component={FormField}
      type="text"
      optional={true}
    />

    <Field
      label="Town"
      name="town"
      component={FormField}
      type="text"
      optional={true}
    />
  </Form>
);

AddressActivityForm = reduxForm({
  form: 'activity',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(AddressActivityForm);

export default AddressActivityForm;
