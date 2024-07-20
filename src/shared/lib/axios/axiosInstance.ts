// src/api/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api`, // 로컬 개발 서버의 기본 URL
  withCredentials: true, // 쿠키와 함께 요청을 보냄
});

export default axiosInstance;
