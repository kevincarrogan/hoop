const initialState = {
  currentStep: 1,
};

const reducer = (state=initialState, {type, currentStep}) => {
  switch (type) {
    case 'SET_CURRENT_STEP': {
      return {
        ...state,
        currentStep,
      };
    }
    default:
      return state;
  }
};

export default reducer;
