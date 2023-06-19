const ACCESS_TOKEN = 'accessToken';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const setAccessToken = (token) =>
  localStorage.setItem(ACCESS_TOKEN, token);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

/********/

const ACCESS_TOKEN_2 = 'accessToken2';

export const getAccessToken2 = () => localStorage.getItem(ACCESS_TOKEN_2);
export const setAccessToken2 = (tokenSeller) =>
  localStorage.setItem(ACCESS_TOKEN_2, tokenSeller);
export const removeAccessToken2 = () => localStorage.removeItem(ACCESS_TOKEN_2);
