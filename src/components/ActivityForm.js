import React, { Component } from 'react';
import { connect } from 'react-redux';

import AboutActivityForm from './AboutActivityForm';
import AddressActivityForm from './AddressActivityForm';
import ActivitySummary from './ActivitySummary';

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
        {currentStep === 2 && <AddressActivityForm id={id} onSubmit={this.nextStep} />}
        {currentStep === 3 && <ActivitySummary />}
      </>
    );
  }
}

const mapStateToProps = ({})

export default ActivityForm;
