import React from 'react';

import { reduxForm, Form, Field } from 'redux-form';

import ExistingAddressFetcher from '../containers/ExistingAddressFetcher';

import Button from './Button.js';
import { FormField } from './FormField.js';

import './Form.css';

import styles from './AddressActivityForm.module.css';

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
  <>
    <h1 className={styles.h1}>Add the address</h1>
    <div className={styles.copyActionWrapper}>
      <ExistingAddressFetcher>{
        (fetchAddress) => (
          <Button className={styles.copyButton} onClick={fetchAddress}>Copy from existing activity</Button>
        )
      }</ExistingAddressFetcher>
    </div>
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
  </>
);

AddressActivityForm = reduxForm({
  form: 'activity',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(AddressActivityForm);

export default AddressActivityForm;
