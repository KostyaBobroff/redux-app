export const USER_INIT = 'USER_INIT';
export const USER_ISLOADING = 'USER_ISLOADING';

export const userInitAction = (user) => ({
  type: USER_INIT,
  payload: user
});

export const userIsLoading = (isLoading) => ({
  type: USER_ISLOADING,
  payload: isLoading
});

export const fetchUser = () => async (dispatch, getState) => {
  dispatch(userIsLoading(userIsLoading(true)));

  const response = await fetch('http://localhost:3001/user');
  const json = await response.json();

  dispatch(userInitAction(json));

  dispatch(userIsLoading(false))
}



