import { createStore } from 'redux';
import * as counterReducer from '../reducer/reducer';

// Store
const store = createStore(counterReducer.default);

export default store;