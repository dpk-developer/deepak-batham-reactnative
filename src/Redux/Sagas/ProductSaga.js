import { takeLatest, put } from 'redux-saga/effects';

import { HttpService } from '../../Services';
import { ActionTypes, ApiEndPoints } from '../../Contants';

const httpService = new HttpService();

/*** All GET Products Function Declare Here ***/
function* getProducts({ type }) {
  try {
    const { products } = yield httpService.get(ApiEndPoints.PRODUCTS_URL);

    yield put({
      type: ActionTypes.GET_PRODUCTS_SUCCESS,
      payload: products,
    });
  } catch (error) {
    console.error(`Caught Error in ProductSaga with ActionType ${type}`, error);
  }
}

function* getProductById({ type, payload }) {
  try {
    const {} = yield httpService.get(`${ApiEndPoints.PRODUCTS_URL}/${payload}`);
  } catch (error) {
    console.error(`Caught Error in ProductSaga with ActionType ${type}`, error);
  }
}

/*** All GET Categories Function Declare Here ***/
function* getCategories({ type }) {
  try {
    const {} = yield httpService.get(ApiEndPoints.CATEGORIES_URL);
  } catch (error) {
    console.error(`Caught Error in ProductSaga with ActionType ${type}`, error);
  }
}

function* getCategoriesById({ type, payload }) {
  try {
    const {} = yield httpService.get(`${ApiEndPoints.PRODUCTS_URL}/${payload}`);
  } catch (error) {
    console.error(`Caught Error in ProductSaga with ActionType ${type}`, error);
  }
}

/*** All POST Add Products Function Declare Here ***/
function* addProducts({ type, payload }) {
  try {
    const { message } = yield httpService.post(
      ApiEndPoints.PRODUCTS_URL,
      payload,
    );

    if (message === 'Success') {
      yield put({ type: ActionTypes.GET_PRODUCTS });
      yield put({ type: ActionTypes.POST_PRODUCTS_SUCCESS, payload: message });
    }
  } catch (error) {
    console.error(`Caught Error in ProductSaga with ActionType ${type}`, error);
  }
}

const productSaga = function* () {
  /*** All GET Products Actions Declare Here ***/
  yield takeLatest(ActionTypes.GET_PRODUCTS, getProducts);
  yield takeLatest(ActionTypes.GET_PRODUCT_BY_ID, getProductById);

  /*** All GET Categories Actions Declare Here ***/
  yield takeLatest(ActionTypes.GET_CATEGORIES, getCategories);
  yield takeLatest(ActionTypes.GET_CATEGORIES_BY_ID, getCategoriesById);

  /*** All POST Products Actions Declare Here ***/
  yield takeLatest(ActionTypes.POST_PRODUCTS, addProducts);
};

export default productSaga;
