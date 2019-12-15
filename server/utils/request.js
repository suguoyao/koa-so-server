/**
 * Created by Sugar on 2019/12/15.
 */
const axios = require('axios')
const config = require('./../../config');

const http = axios.create({
  baseURL: config.soAPiUrl,
  timeout: 10000,
  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data
    return data;
  }],
});

module.exports = http
