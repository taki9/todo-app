import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const call = method => async (url, { body, query, headers } = {}) => {
  const defaultHeaders = {
    'Authorization': `Bearer ${sessionStorage.getItem('jwtToken') || ''}`
  };

  const result = await axios({
    method,
    url,
    baseURL: BASE_URL,
    headers: Object.assign(defaultHeaders, headers),
    data: body,
    params: query
  }).catch(error => {
    const apiError = new Error(
      (error.response && error.response.data && error.response.data.message) ||
        error.message
    );

    apiError.code =
      (error.response && error.response.data && error.response.data.code) ||
      'NETWORK_ERROR';

    apiError.status =
      error.response && error.response.data && error.response.data.status
        ? parseInt(error.response.data.status)
        : 500;

    throw apiError;
  });

  return result.data;
};

export default {
  get: call('GET'),
  post: call('POST'),
  put: call('PUT'),
  delete: call('DELETE')
};
