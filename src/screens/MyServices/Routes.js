import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyServices from './MyServices';
import InfoService from './InfoService';
import CallService from './CallService';

const Stack = createStackNavigator();

export default class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    options={{
                        animationEnabled: false,
                    }}
                    name="MyServices" component={MyServices}
                />

                <Stack.Screen
                    options={{
                        animationEnabled: false,
                    }}
                    name="InfoService" component={InfoService}
                />

                <Stack.Screen
                    options={{
                        animationEnabled: false,
                    }}
                    name="CallService" component={CallService}
                />
            </Stack.Navigator>
        );
    }
}