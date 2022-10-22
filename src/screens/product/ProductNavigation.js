import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();
import {getFocusedRouteNameFromRoute} from "@react-navigation/native"
import {HomeStack} from '../product/Stack/AppStack';
import EndowScreen from './EndowScreen';
import ProductScreen from './ProductScreen';
import ProfileScreen from './ProfileScreen';




export const ProductNavigation = () => {
    const getTabBarVisibility = (route:any)=>{
        const routeName = getFocusedRouteNameFromRoute(route);
        // console.log(routeName)
        if(routeName?.includes('DetailNews') || routeName?.includes('ProductDetail')){
          return 'none'
        }
        return 'flex'
      }
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: 'white', height: 61 },
                tabBarInactiveTintColor: '#581B00',
                tabBarActiveTintColor: '#F7C33C',
                tabBarLabelPosition: 'below-icon',
                tabBarLabelStyle: {paddingBottom: 5,display:getTabBarVisibility(route)},
                tabBarIcon: ({ color }) => {
                    if (route.name == "Trang Chủ") {
                        return <Entypo name="home" size={24} color={color} />
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
            <Tab.Screen name="Trang Chủ" component={HomeStack} 
            options={({route})=>({
                tabBarStyle:{display:getTabBarVisibility(route)},
            })}
            />
            <Tab.Screen name="Đặt Hàng" component={ProductScreen}
            options={({route})=>({
                tabBarStyle:{display:getTabBarVisibility(route)},
            })}
            />
            <Tab.Screen name="Ưu Đãi" component={EndowScreen} 
            options={({route})=>({
                tabBarStyle:{display:getTabBarVisibility(route)},
            })}
            />
            <Tab.Screen name="Tài Khoản" component={ProfileScreen} 
                options={({route})=>({
                    tabBarStyle:{display:getTabBarVisibility(route)},
                })}
            />

        </Tab.Navigator>

        
    )
}
