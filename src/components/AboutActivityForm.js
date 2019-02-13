import React from 'react';

import './Form.css';

const AboutActivityForm = () => (
  <form className="base-form">
    <div className="form-field">
      <label>Activity Name</label>
      <input type="text" name="activity_name" />
    </div>
    <div className="form-field">
      <label>Recommended Age</label>
      <select>
        <option>From</option>
        <option>2</option>
        <option>3</option>
      </select>
      <select>
        <option>To</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
    <div className="form-field">
      <label>Activity Webpage</label>
      <p className="instructions">Use a specific page if possible. Try to avoid homepage links.</p>
      <input type="text" name="activity_webpage" placeholder="e.g. example.com/actiivty" />
    </div>
    <div className="form-field">
      <div className="label-wrapper">
        <label>Activity Phone Number</label>
        <span className="optional">Optional</span>
      </div>
      <input type="text" name="activity_phone_number" />
    </div>
  </form>
);

export default AboutActivityForm;
