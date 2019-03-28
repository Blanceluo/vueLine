/*
 * @Description: axios 二次封装
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-03-26 19:35:33
 * @LastEditTime: 2019-03-28 13:07:57
 */

import axios from 'axios';

axios.defaults.timeout = 5000; // 超时最大5s

// request 拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
