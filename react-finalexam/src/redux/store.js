import { legacy_createStore } from 'redux';



import studentReducer from './reducers/studentReducer';

export let store = legacy_createStore(studentReducer)


