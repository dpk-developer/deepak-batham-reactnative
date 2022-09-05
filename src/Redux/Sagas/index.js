import { all, fork } from 'redux-saga/effects';
import watchProductSaga from './ProductSaga';

const rootSaga = function* () {
  yield all([fork(watchProductSaga)]);
};

export default rootSaga;
