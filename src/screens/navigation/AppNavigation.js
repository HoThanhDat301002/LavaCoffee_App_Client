import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserNavigation from '../user/UserNavigation';
import IndexNavigation from '../index/IndexNavigation';

const AppNavigation = (props) => {

    const [login, setLogin] = useState(true);

    return (
        <NavigationContainer>
            {
                login == true ? <IndexNavigation /> : <UserNavigation />
            }
        </NavigationContainer>
    )
}

export default AppNavigation