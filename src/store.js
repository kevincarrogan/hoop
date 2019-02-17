import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import activityFormWizardReducer from './reducers/activityFormWizard';

const rootReducer = combineReducers({
  form: formReducer,
  activityFormWizard: activityFormWizardReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default store;
