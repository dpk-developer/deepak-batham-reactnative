import { combineReducers } from 'redux';

import ProductReducer from './ProductReducer';

const rootReducer = combineReducers({
  productReducer: ProductReducer,
});

export default rootReducer;
