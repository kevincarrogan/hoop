import React from 'react';
import { connect } from 'react-redux';

const ActivitySummary = ({ activity }) => {
  return <>
    <h1>Activity summary</h1>

    <dl>
      <dt>Name</dt>
      <dd>{ activity.name }</dd>

      <dt>Recommended age</dt>
      <dd>{ activity.recommendedAgeFrom } - { activity.recommendedAgeTo }</dd>

      <dt>Webpage</dt>
      <dd>{ activity.webpage }</dd>

      <dt>Phone number</dt>
      <dd>{ activity.phoneNumber }</dd>
    </dl>
  </>
};

const mapStateToProps = state => {
  return {
    activity: state.form.activity.values
  };
};

export default connect(mapStateToProps)(ActivitySummary);
