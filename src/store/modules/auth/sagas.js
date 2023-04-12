//call, put, ↓
import { all, takeLatest } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
// import * as actions from './actions';
import * as types from '../types';

function* loginRequest({ payload }) {
  yield console.log('SAGA', payload);
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
