import React, {useContext, useState} from 'react'
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { ProductNavigation } from '../product/ProductNavigation';
import { UserNavigation } from '../user/UserNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Navigation =  () => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
    return ( 
        <NavigationContainer >
        {
             isLoggedIn == false ?
            // AsyncStorage.getItem('token') != null  ? 
            <ProductNavigation/>:
            <UserNavigation/>
        }
        </NavigationContainer>
    )
}


