import React from 'react';
import { reduxForm, Form, Field } from 'redux-form';

import './Form.css';

const onSubmit = () => {};

let AddressActivityForm = ({ id, handleSubmit }) => (
  <Form id={id} className="base-form" onSubmit={handleSubmit(onSubmit)}>
    <div className="form-field">
      <label htmlFor="placeName">Place name</label>
      <Field name="placeName" component="input" type="text" />
    </div>
    <div className="form-field">
      <label htmlFor="postcode">Postcode</label>
      <Field name="postcode" component="input" type="text" />
    </div>
    <div className="form-field">
      <div className="label-wrapper">
        <label htmlFor="buildingUnit">Building Unit</label>
        <span className="optional">Optional</span>
      </div>
      <Field name="buildingUnit" component="input" type="text" />
    </div>
    <div className="form-field">
      <div className="label-wrapper">
        <label htmlFor="buildingName">Building Name</label>
        <span className="optional">Optional</span>
      </div>
      <Field name="buildingUnit" component="input" type="text" />
    </div>
    <div className="form-field">
      <div className="label-wrapper">
        <label htmlFor="streetNumber">Street Number</label>
        <span className="optional">Optional</span>
      </div>
      <Field name="streetNumber" component="input" type="text" />
    </div>
    <div className="form-field">
      <div className="label-wrapper">
        <label htmlFor="streetName">Street Name</label>
        <span className="optional">Optional</span>
      </div>
      <Field name="streetName" component="input" type="text" />
    </div>
    <div className="form-field">
      <div className="label-wrapper">
        <label htmlFor="town">Town</label>
        <span className="optional">Optional</span>
      </div>
      <Field name="town" component="input" type="text" />
    </div>
  </Form>
);

AddressActivityForm = reduxForm({
  form: 'activity'
})(AddressActivityForm);

export default AddressActivityForm;
