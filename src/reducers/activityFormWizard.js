const initialState = {
  step: 1,
};

const reducer = (state=initialState, {type, payload}) => {
  switch (type) {
    case 'SET_STEP': {
      return {
        ...state,
        step: payload.step
      };
    }
    default:
      return state;
  }
};

export default reducer;
