import axios from 'axios';

export const signin = async (user) => {
  try {
    const response = await axios.post(
      '/auth/signin',
      { user },
      { withCredentials: true },
    );
    return response.data;
  } catch(error) {
    console.log(error);
  }
};

export const signup = async (user) => {
  try {
    const response = await axios.post('/auth/signup', { user });
    return response.data;
  } catch(error) {
    console.log(error);
  }
};

export const signout = async (callback) => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('token');
  }

  callback();

  try {
    await axios.get('/auth/signout');
    document.cookie = 't=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  } catch(error) {
    console.log(error);
  }
};

export const isAuthenticated = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  if (sessionStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
};

export const authenticate = async (token, callback) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  callback();
};

export const getAuthenticatedUser = () => {
  if (sessionStorage.getItem('token')) {
    return JSON.parse(sessionStorage.getItem('token'));
  }
  return null;
};
