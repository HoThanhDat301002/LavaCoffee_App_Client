import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UserNavigation } from './src/screens/user/UserNavigation';
import { Navigation } from './src/screens/Navigation/Navigation';
import { Provider } from 'mobx-react';

export default function App() {
  return (
    <Provider>
      <Navigation>
        <UserNavigation/>
      </Navigation>
    </Provider>
  );
}


