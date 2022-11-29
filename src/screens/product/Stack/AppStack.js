import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import DetailNews from '../Home/DetailNews';
import HomeScreen from '../Home/HomeScreen';
import ProductDetail from '../Order/ProductDetail';
import CartProduct from '../Order/CartProduct';
import ProductScreen from '../Product/ProductScreen';
import OrderConfirmation from '../Order/OrderConfirmation';
import Contact from '../Profile/Contact';
import Feedback from '../Profile/Feedback';
import BuyingHistory from '../Profile/BuyingHistory';
import AddressList from '../Profile/AddressList';
import FavouriteProduct from '../Profile/FavouriteProduct';
import UserInformation from '../Profile/UserInformation';
import ProfileScreen from '../Profile/ProfileScreen';
const RootStack = createStackNavigator();

export const HomeStack = () => {
    return (
            <RootStack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                <RootStack.Screen name="Home" component={HomeScreen} />
                <RootStack.Screen name="DetailNews" component={DetailNews} />
                <RootStack.Screen name="ProductDetail" component={ProductDetail} />
                <RootStack.Screen name="CartProduct" component={CartProduct} />
                <RootStack.Screen name="OrderConfirmation" component={OrderConfirmation} />
            </RootStack.Navigator>
    )
}

export const ProductStack = () => {
    return (
            <RootStack.Navigator screenOptions={{headerShown: false}}>
                <RootStack.Screen name="ProductScreen" component={ProductScreen} />
                <RootStack.Screen name="ProductDetail" component={ProductDetail} />
                <RootStack.Screen name="CartProduct" component={CartProduct} />
                <RootStack.Screen name="OrderConfirmation" component={OrderConfirmation} />
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
            <RootStack.Screen name='AddressList' component={AddressList} />
            <RootStack.Screen name='FavouriteProduct' component={FavouriteProduct} />
            <RootStack.Screen name='UserInformation' component={UserInformation} />
        </RootStack.Navigator>
    )
}

