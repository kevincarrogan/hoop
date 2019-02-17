import { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentStep } from '../actions';

class ActivityFormStepDataSource extends Component {
  constructor(props) {
    super(props);

    this.formId = 'activity-form';

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
    const { currentStep } = this.props;

    return this.props.children({
      formId: this.formId,
      nextStep: this.nextStep,
      previousStep: this.previousStep,
      currentStep,
    });
  }
}

const mapStateToProps = ({activityFormWizard: {currentStep}}) => ({currentStep});

export default connect(mapStateToProps)(ActivityFormStepDataSource);
