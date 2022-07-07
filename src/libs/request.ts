// 请求相关
import axios from "axios";

// 创建 axios 实例
const request = axios.create({
  timeout: 60000, // 请求超时时间
});

// 异常拦截处理器
const errorHandler = (error: any) => {
  if (error.response) {
    const data = error.response.data;
    console.log("errorHandler", error);
    // Toast(data.message);
  }
  return Promise.reject(error);
};

request.interceptors.request.use((config) => {
  // 自定义全局header
  config.headers = config.headers ? config.headers : {};
  config.headers["Content-Type"] = "application/json";
  return config;
}, errorHandler);

request.interceptors.response.use((response) => {
  return response.data;
}, errorHandler);

export default request;
