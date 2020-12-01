import {createSlice } from '@reduxjs/toolkit';

export const initialState = {
  userEntity: {},
  isLoading: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    init: (state, action) => {
      console.log(action);
      state.userEntity = action.payload
    },
    setIsLoading: (state, action) => {
      console.log(action);
      state.isLoading = action.payload
    }
  }
});

const fetchUser = () => async (dispatch, getState) => {
  dispatch(userSlice.actions.setIsLoading(true));

  const response = await fetch('http://localhost:3001/user');
  const json = await response.json();

  dispatch(userSlice.actions.init(json));

  dispatch(userSlice.actions.setIsLoading(false))
}

export const actions = {
  ...userSlice.actions,
  fetchUser
}

export const reducer = userSlice.reducer;