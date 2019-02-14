import React, { Component } from 'react';

import AboutActivityForm from './AboutActivityForm';
import AddressActivityForm from './AddressActivityForm';

class ActivityForm extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);

    this.state = {
      currentStep: 1
    };
  }

  nextStep() {
    this.setState({ currentStep: this.state.currentStep + 1 });
  }

  previousStep() {
    this.setState({ currentStep: this.state.currentStep - 1 });
  }

  render() {
    const { id } = this.props;
    const { currentStep } = this.state;

    return (
      <>
        {currentStep === 1 && <AboutActivityForm id={id} onSubmit={this.nextStep} />}
        {currentStep === 2 && <AddressActivityForm id={id} />}
      </>
    );
  }
}

export default ActivityForm;
