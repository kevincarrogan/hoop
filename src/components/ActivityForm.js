import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentStep } from '../actions';

import AboutActivityForm from './AboutActivityForm';
import AddressActivityForm from './AddressActivityForm';
import ActivitySummary from './ActivitySummary';

class ActivityForm extends Component {
  constructor(props) {
    super(props);

    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  nextStep() {
    const nextStep = this.props.currentStep + 1;
    this.props.dispatch(setCurrentStep(nextStep));
  }

  previousStep() {
    const previousStep = this.props.currentStep - 1;
    this.props.dispatch(setCurrentStep(previousStep));
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

const mapStateToProps = ({activityFormWizard: {currentStep}}) => ({currentStep});

export default connect(mapStateToProps)(ActivityForm);
