import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Services from './screens/Services/Services';
import MyServices from './screens/MyServices/MyServices';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

const Drawer = createDrawerNavigator();

export default function Main() {
    return (

        true ? (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Services" component={Services} />
                    <Drawer.Screen name="MyServices" component={MyServices} />
                </Drawer.Navigator>
            </NavigationContainer>

        ) : (
                <NavigationContainer>
                    <Drawer.Navigator>
                        <Drawer.Screen name="Login" component={Login} />
                        <Drawer.Screen name="Register" component={Register} />
                    </Drawer.Navigator>
                </NavigationContainer>
            )
    );
}