const setCurrentStep = currentStep => (
  {
    type: 'SET_CURRENT_STEP',
    currentStep,
  }
);

const fetchAddress = () => (dispatch) => {
  dispatch({type: 'FETCHING_ADDRESS'});
  fetch('http://localhost:8000/places/')
    .then(response => {
      return response.json();
    })
    .then(data => {
      const address = data.places[0];
      dispatch({type: 'SET_ADDRESS', address})
    });
};

export {setCurrentStep, fetchAddress};
