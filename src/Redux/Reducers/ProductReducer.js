import { ActionTypes } from '../../Contants';

const initialState = {
  /*** All Products State Declare Here ***/
  productList: [],
  productByIdList: [],

  /*** All Categories State Declare Here ***/
  catergoriesList: [],
  catergoriesByIdList: [],

  /*** All Add Product State Declare Here ***/
  addProduct: false,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /*** All Product Success State Declare Here ***/
    case ActionTypes.GET_PRODUCTS_SUCCESS: {
      return { ...state, productList: payload };
    }

    case ActionTypes.GET_PRODUCT_BY_ID_SUCCESS: {
      return { ...state, productList: payload };
    }

    /*** All Categories Success State Declare Here ***/
    case ActionTypes.GET_CATEGORIES_SUCCESS: {
      return { ...state, catergoriesList: payload };
    }

    case ActionTypes.GET_CATEGORIES_BY_ID_SUCCESS: {
      return { ...state, catergoriesByIdList: payload };
    }

    /*** All Add Product Success State Declare Here ***/
    case ActionTypes.POST_PRODUCTS_SUCCESS: {
      return { ...state, addProduct: payload };
    }

    default:
      return state;
  }
};

export default productReducer;
