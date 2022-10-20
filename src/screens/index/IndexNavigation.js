import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Order from './screens/Order';
import Sale from './screens/Sale';
import Account from './screens/Account';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const IndexNavigation = (props) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: 'white', height: 61 },
                tabBarInactiveTintColor: '#581B00',
                tabBarActiveTintColor: '#F7C33C',
                tabBarLabelPosition: 'below-icon',
                tabBarLabelStyle: {paddingBottom: 5},
                tabBarIcon: ({ color }) => {
                    if (route.name == "Trang Chủ") {
                        return <AntDesign name="home" size={24} color={color} />
                    } else if (route.name == "Đặt Hàng") {
                        return <Feather name="coffee" size={24} color={color} />
                    } else if (route.name == "Ưu Đãi") {
                        return <AntDesign name="gift" size={24} color={color} />
                    } else if (route.name == "Tài Khoản") {
                        return <Ionicons name="person-outline" size={24} color={color} />
                    }
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Trang Chủ" component={Home} />
            <Tab.Screen name="Đặt Hàng" component={Order} />
            <Tab.Screen name="Ưu Đãi" component={Sale} />
            <Tab.Screen name="Tài Khoản" component={Account} />
        </Tab.Navigator>
    )
}

export default IndexNavigation
