import { applyMiddleware, createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

export default store;
