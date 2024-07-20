import {
  axiosInstance,
  deleteRefreshToken,
  getRefreshToken,
  saveRefreshToken,
} from '@/shared/lib/index';
import { API_URL } from '@/shared/util';

export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post(`${API_URL}/login`, {
    email,
    password,
  });
  await saveRefreshToken(response.data.refreshToken);
  return response;
};

export const logout = async () => {
  const refreshToken = await getRefreshToken();
  if (refreshToken) {
    await axiosInstance.post(`${API_URL}/logout`, { token: refreshToken });
    await deleteRefreshToken();
  }
};

export const getAccessToken = async () => {
  const refreshToken = await getRefreshToken();
  if (refreshToken) {
    return axiosInstance.post(`${API_URL}/token`, { token: refreshToken });
  }
  throw new Error('No refresh token available');
};

export const getBoardData = async () => {
  return axiosInstance.get(`${API_URL}/board`);
};
