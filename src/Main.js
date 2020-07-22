import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MyServicesRoutes from './screens/MyServices/Routes';
import ServicesRoutes from './screens/Services/Routes';
import Profile from './screens/Profile/Profile';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import { connect } from 'react-redux'

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Main(props) {
    console.log('id do usuário', props.login)
    return (
        props.login.idUser ? (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen
                        options={{
                            animationEnabled: false,
                        }}
                        name="Services" component={ServicesRoutes} />
                    <Stack.Screen
                        options={{
                            animationEnabled: false,
                        }}
                        name="MyServices" component={MyServicesRoutes} />
                    <Stack.Screen
                        options={{
                            animationEnabled: false,
                        }}
                        name="Profile" component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>

        ) : (
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                    >
                        <Stack.Screen
                            options={{
                                animationEnabled: false,
                            }}
                            name="Login" component={Login} />
                        <Stack.Screen
                            options={{
                                animationEnabled: false,
                            }}
                            name="Register" component={Register} />
                    </Stack.Navigator>
                </NavigationContainer>
            )
    );
}

const mapStateToProps = ({ login }) => ({ login })

export default connect(mapStateToProps, null)(Main)