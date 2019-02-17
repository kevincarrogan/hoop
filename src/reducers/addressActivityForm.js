const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ADDRESS': {
      return {
        ...state,
        values: {
          ...state.values,
          ...action.address,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
