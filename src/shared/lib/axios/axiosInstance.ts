// src/api/axiosInstance.ts
import { getAccessToken } from '@/shared/api/index';
import { API_URL } from '@/shared/util';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: API_URL, // 로컬 개발 서버의 기본 URL
  withCredentials: true, // 쿠키와 함께 요청을 보냄
  timeout: 10000, // 요청 시간 초과
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  async config => {
    return config;
  },
  function (error) {
    // 요청 오류 처리
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await getAccessToken();
        const newAccessToken = response.data.accessToken;

        axiosInstance.defaults.headers.common['Authorization'] =
          `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
