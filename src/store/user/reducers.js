import * as user from './actions';

const initialState = {
  userEntity: {},
  isLoading: false
}


const actionsMap = {
  [user.USER_INIT]: (state, action) => ({
    ...state,
    userEntity: action.payload
  }),
  [user.USER_ISLOADING]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
}



export default (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}