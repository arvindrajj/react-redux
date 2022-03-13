import {
  BUY_LAPTOP,
  BUY_MOBILE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
} from "./actionTypes";

export const buyLaptop = () => ({
  type: BUY_LAPTOP,
});

export const buyMobile = () => ({
  type: BUY_MOBILE,
});

export const fetchUserRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUserSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUserFail = (error) => ({
  type: FETCH_USERS_FAIL,
  payload: error,
});

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUserRequest());
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  if (response.status === 200) {
    dispatch(fetchUserSuccess(data));
  } else {
    dispatch(fetchUserFail("fetch failed"));
    
  }
};
