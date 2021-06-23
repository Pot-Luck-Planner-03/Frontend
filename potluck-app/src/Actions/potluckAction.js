export const ADD_FEATURE = 'ADD_FEATURE';
export const NEW_USER_FEATURE = 'NEW_USER_FEATURE';
export const LOGIN_FEATURE = 'LOGIN_FEATURE';


export const addFeature = (newFeature) => {
  return { type: ADD_FEATURE, payload: newFeature };
};

export const newUserFeature = (newUser) => {
  return { type: NEW_USER_FEATURE, payload: newUser };
};

export const loginFeature = (loginSuccess) => {
  return { type: LOGIN_FEATURE, payload: loginSuccess };
};