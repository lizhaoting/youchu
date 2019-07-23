import axios from 'axios';

export const handleNetwork = axiosPromise => new Promise((resolve, reject) => {
  axiosPromise.then(response => resolve(response))
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        // TODO
        // login page
        // reject(new Error('No Permission'));
      }
      reject(new Error('Network Error'));
    });
});

// TODO
// request and response handle

export const AXIOS = axios;
