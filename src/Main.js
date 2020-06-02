import React from 'react';
import { Container, Content, Button, Header, Left, Right, Body, Icon, Title } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home/Home'
import Services from './screens/Services/Services'
import Login from './screens/Login/Login'
import Register from './screens/Register/Register'

const Stack = createStackNavigator();

export default function Main() {
    return (

        false ? (

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Services" component={Services} />
                </Stack.Navigator>
            </NavigationContainer>
        ) : (
                // <Login />
                // <Register />
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
                        <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
                    </Stack.Navigator>
                </NavigationContainer>
            )
    );
}