import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import SplashSreen from './SplashSreen';
import  {Login}  from '../user/Login';
import  Register  from '../user/Register';

export const UserNavigation = (props) => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashSreen" component ={SplashSreen} />
            <Stack.Screen name="Login" component ={Login} />
            <Stack.Screen name="Register" component ={Register} />
        </Stack.Navigator>
       
    )
}

