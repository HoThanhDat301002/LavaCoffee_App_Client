import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import DetailNews from '../../product/DetailNews';
import HomeScreen from '../../product/HomeScreen';
import ProductDetail from '../ProductDetail';
const RootStack = createStackNavigator();

export const HomeStack = () => {
    return (
            <RootStack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                <RootStack.Screen name="Home" component={HomeScreen} />
                <RootStack.Screen name="DetailNews" component={DetailNews} />
                <RootStack.Screen name="ProductDetail" component={ProductDetail} />
            </RootStack.Navigator>
    )
}

