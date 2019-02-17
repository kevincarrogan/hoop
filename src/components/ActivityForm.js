import React, { Component } from 'react';

import AboutActivityForm from './AboutActivityForm';
import AddressActivityForm from './AddressActivityForm';
import ActivitySummary from './ActivitySummary';

class ActivityForm extends Component {
  constructor(props) {
    super(props);

    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    this.props.nextStep();
  }

  render() {
    const { id, currentStep } = this.props;

    return (
      <>
        {currentStep === 1 && <AboutActivityForm id={id} onSubmit={this.nextStep} />}
        {currentStep === 2 && <AddressActivityForm id={id} onSubmit={this.nextStep} />}
        {currentStep === 3 && <ActivitySummary />}
      </>
    );
  }
}

export default ActivityForm;
