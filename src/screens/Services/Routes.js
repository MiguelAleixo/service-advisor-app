import React, { Component } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Services from './Services';
import ServiceDetail from './ServiceDetail';
import SAFooter from '../../general/components/SAFooter/SAFooter';

const Drawer = createDrawerNavigator();

export default class Routes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            footer: true
        }
    }

    render() {
        return (
                <Drawer.Navigator>
                    <Drawer.Screen
                        name="Services" component={Services}
                    />

                    <Drawer.Screen
                        name="ServiceDetail" component={ServiceDetail}
                    />
                </Drawer.Navigator>
        );
    }
}