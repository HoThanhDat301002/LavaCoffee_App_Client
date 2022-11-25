import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import DetailNews from '../../product/DetailNews';
import HomeScreen from '../../product/HomeScreen';
import ProductDetail from '../ProductDetail';
import CartProduct from '../CartProduct';
import ProfileScreen from '../Profile/ProfileScreen';
import Contact from '../Profile/Contact';
import Feedback from '../Profile/Feedback';
import ProductScreen from '../ProductScreen';
import BuyingHistory from '../Profile/BuyingHistory';
import UserInformation from '../Profile/UserInformation';
import AddressList from '../Profile/AddressList';
import FavouriteProduct from '../Profile/FavouriteProduct';

const RootStack = createStackNavigator();

export const HomeStack = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="DetailNews" component={DetailNews} />
            <RootStack.Screen name="ProductDetail" component={ProductDetail} />
            <RootStack.Screen name="CartProduct" component={CartProduct} />
        </RootStack.Navigator>
    )
}

export const ProductStack = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="ProductScreen" component={ProductScreen} />
            <RootStack.Screen name="ProductDetail" component={ProductDetail} />
            <RootStack.Screen name="CartProduct" component={CartProduct} />
        </RootStack.Navigator>
    )
}

export const AccountStack = () => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }} >
            <RootStack.Screen name='ProfileScreen' component={ProfileScreen} />
            <RootStack.Screen name='Contact' component={Contact} />
            <RootStack.Screen name='Feedback' component={Feedback} />
            <RootStack.Screen name='BuyingHistory' component={BuyingHistory} />
            <RootStack.Screen name='UserInformation' component={UserInformation} />
            <RootStack.Screen name='AddressList' component={AddressList} />
            <RootStack.Screen name='FavouriteProduct' component={FavouriteProduct} />
        </RootStack.Navigator>
    )
}

