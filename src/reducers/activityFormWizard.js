const initialState = {
  currentStep: 1,
};

const reducer = (state=initialState, {type, payload}) => {
  switch (type) {
    case 'SET_CURRENT_STEP': {
      return {
        ...state,
        currentStep: payload.currentStep
      };
    }
    default:
      return state;
  }
};

export default reducer;
