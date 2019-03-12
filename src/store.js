import { createStore } from 'redux';
import reducer from '../src/ducks/reducer';

const store = createStore( reducer );

export default store;