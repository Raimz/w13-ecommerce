const initialState = {
  goods: [],
  rates: {},
  currency: 'USD',
  sort: {
    type: 'price',
    direction: 'a-z'
  }
}

const GET_PRODUCTS = 'store/products/GET_PRODUCTS'
const ADD_RATES = 'store/products/ADD_RATES'
const SET_CURRENCYNAME = 'store/products/SET_CURRENCYNAME'
const SET_SORT_TYPE = 'store/products/SET_SORT_TYPE'

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        goods: action.listOfGoods
      }
    }
    case ADD_RATES: {
      return {
        ...state,
        rates: action.rates
      }
    }
    case SET_CURRENCYNAME: {
      return {
        ...state,
        currency: action.currencyName
      }
    }
    case SET_SORT_TYPE: {
      return {
        ...state,
        sort: {
          type: action.sortType,
          direction: action.sortDirection
        }
      }
    }
    default:
      return state
  }
}

export function getProductsFromServer() {
  return (dispatch) => {
    fetch('/api/v1/goods')
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: GET_PRODUCTS, listOfGoods: result })
      })
  }
}

export function addRates() {
  return (dispatch) => {
    fetch('/api/v1/rates')
      .then((response) => response.json())
      .then((rates) => {
        dispatch({ type: ADD_RATES, rates })
      })
  }
}

export function setCurrency(currencyName) {
  return { type: SET_CURRENCYNAME, currencyName }
}

export function sortProducts(sortType = 'price', sortDirection = 'a-z') {
  return (dispatch) => {
    fetch(`/api/v1/goods/${sortType}/${sortDirection}`)
      .then((response) => response.json())
      .then((result) => {
        dispatch({ type: GET_PRODUCTS, listOfGoods: result })
      })
    dispatch({
      type: SET_SORT_TYPE,
      sortType,
      sortDirection
    })
  }
}
