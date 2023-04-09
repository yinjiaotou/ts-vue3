/*
 * @Author: yin
 * @Date: 2023-04-02 17:46:56
 * @LastEditTime: 2023-04-02 17:47:09
 * @LastEditors: yin
 * @Description: 
 */
import axios from 'axios';

//1. 创建axios对象
const service = axios.create();


//2. 请求拦截器
service.interceptors.request.use(config => {
    return config;
}, error => {
    Promise.reject(error);
});


//3. 响应拦截器
service.interceptors.response.use(response => {
    //判断code码
    return response.data;
}, error => {
    return Promise.reject(error);
});


export default service;
