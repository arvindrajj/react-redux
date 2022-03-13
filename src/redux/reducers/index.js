import {
  BUY_LAPTOP,
  BUY_MOBILE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from "../actions/actionTypes";

const laptopState = {
  numOfLaptops: 100,
};

const mobileState = {
  numOfMobiles: 1000,
};

const fetchState = {
  isLoading: false,
  users: [],
  error: "",
};

export const laptopReducer = (state = laptopState, action) => {
  switch (action.type) {
    case BUY_LAPTOP:
      return { ...state, numOfLaptops: state.numOfLaptops - 1 };
    default:
      return state;
  }
};

export const mobileReducer = (state = mobileState, action) => {
  switch (action.type) {
    case BUY_MOBILE:
      return { ...state, numOfMobiles: state.numOfMobiles - 1 };
    default:
      return state;
  }
};

export const userReducer = (state = fetchState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_USERS_SUCCESS:
      return { isLoading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAIL:
      return { isLoading: false, user: [], error: action.payload };
    default:
      return state;
  }
};
