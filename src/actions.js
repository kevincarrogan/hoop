const setCurrentStep = currentStep => (
  {
    type: 'SET_CURRENT_STEP',
    currentStep,
  }
);

const fetchAddress = () => (
  {
    type: 'FETCH_ADDRESS',
  }
);

export {setCurrentStep, fetchAddress};
