import { createStore, combineReducers } from 'redux';
import invoiceReducer from './src/redux/reducers/invoiceReducer';

const rootReducer = combineReducers(
  { invoice: invoiceReducer }
);

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;