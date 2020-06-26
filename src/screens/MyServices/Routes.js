import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyServices from './MyServices';
import InfoService from './InfoService';
import CallService from './CallService';

const Drawer = createDrawerNavigator();

export default class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
            <Drawer.Navigator>
                <Drawer.Screen
                    name="MyServices" component={MyServices}
                />

                <Drawer.Screen
                    name="InfoService" component={InfoService}
                />

                <Drawer.Screen
                    name="CallService" component={CallService}
                />
            </Drawer.Navigator>
        );
    }
}