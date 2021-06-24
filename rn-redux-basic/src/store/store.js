import { createStore, combineReducers } from 'redux';
import itemReducer from './reducers/item';

const rootReducer = combineReducers({
  item: itemReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
