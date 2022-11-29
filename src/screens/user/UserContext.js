import React, {useState, createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, register } from './UserService';
import { ToastAndroid } from 'react-native';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const { children } = props;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = async (email, password) => {
    try {
      const res = await login(email, password);
      if (res && res.token) {
        await AsyncStorage.setItem('token', res.token);
        setIsLoggedIn(true);
        ToastAndroid.show("Đăng nhập thành công", ToastAndroid.CENTER);
        return;
      }
    } catch (error) {
      console.log("onLogin error", error);
    }
  };

  const onRegister = async (email, password, confirm_password) => {
    try {
      const res = await register(email, password, confirm_password);
      return res.status;
    } catch (error) {
      console.log("onRegister error", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        onLogin,
        onRegister,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};


