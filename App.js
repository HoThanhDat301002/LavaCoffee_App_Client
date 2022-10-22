import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UserNavigation } from './src/screens/user/UserNavigation';

import * as Sentry from '@sentry/react-native';
import { Navigation } from './src/screens/Navigation/Navigation';

// Sentry.init({ 
//   dsn: "https://922fec219ddc4677976b265ef14574d1@o1431293.ingest.sentry.io/4503894764158976",
// });


export default function App() {
  return (
    <Navigation>
      <UserNavigation/>
    </Navigation>
  );
}


