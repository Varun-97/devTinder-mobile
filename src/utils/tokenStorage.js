import AsyncStorage from '@react-native-async-storage/async-storage';

export const tokenStorage = {
  getAccessToken: () => AsyncStorage.getItem('accessToken'),
  setToken: (accessToken) => AsyncStorage.setItem('accessToken', accessToken),
  clearToken: () => AsyncStorage.removeItem('accessToken'),
};