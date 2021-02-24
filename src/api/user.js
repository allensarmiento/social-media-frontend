import axios from 'axios';

export const list = async (signal) => {
  try {
    const response = await axios.get('/api/users', {
      signal
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const profile = async (params, credentials) => {
  try {
    const response = await axios.get(`/api/users/${params.userId}`, {
      headers: {
        'Authorization': `Bearer ${credentials.token}`
      }
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
