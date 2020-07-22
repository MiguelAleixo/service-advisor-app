import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Services from './Services';
import ServiceDetail from './ServiceDetail';

const Stack = createStackNavigator();

export default class Routes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            footer: true
        }
    }

    render() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Services" component={Services}
                />

                <Stack.Screen
                    name="ServiceDetail" component={ServiceDetail}
                />
            </Stack.Navigator>
        );
    }
}