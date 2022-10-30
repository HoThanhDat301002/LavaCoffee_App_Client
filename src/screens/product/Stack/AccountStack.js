import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Account from './Account';
import Contact from './Contact';
import Feedback from './Feedback';

const Stack = createStackNavigator();

const AccountStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='Account' component={Account} />
            <Stack.Screen name='Contact' component={Contact} />
            <Stack.Screen name='Feedback' component={Feedback} />
        </Stack.Navigator>
    )
}

export default AccountStack