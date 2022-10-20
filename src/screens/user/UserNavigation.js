import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Register from './screens/Register';

const Stack = createStackNavigator();

const UserNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}

export default UserNavigation