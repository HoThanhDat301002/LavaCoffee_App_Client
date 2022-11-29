import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UserNavigation } from './src/screens/user/UserNavigation';
import { Navigation } from './src/screens/Navigation/Navigation';
import { Provider } from 'mobx-react';
import { UserContextProvider } from './src/screens/user/UserContext';
import { ProductContextProvider } from './src/screens/product/ProductContext';

export default function App() {
  return (
    <Provider>
      <UserContextProvider>
        <ProductContextProvider>
          <Navigation>
            <UserNavigation/>
          </Navigation>
        </ProductContextProvider>
      </UserContextProvider>
    </Provider>
  );
}


