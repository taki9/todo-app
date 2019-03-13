import axios from 'axios';

const call = method => async (url, { body, query, headers } = {}) => {
  const result = await axios({
    method,
    url,
    headers,
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
