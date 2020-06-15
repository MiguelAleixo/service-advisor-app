import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyServices from './MyServices';
import InfoService from './InfoService';
import SAFooter from '../../general/components/SAFooter/SAFooter';

const Drawer = createDrawerNavigator();

export default class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
            <>
                <NavigationContainer independent={true}>
                    <Drawer.Navigator>
                        <Drawer.Screen
                            name="MyServices" component={MyServices}
                        />

                        <Drawer.Screen
                            name="InfoService" component={InfoService}
                        />
                    </Drawer.Navigator>
                </NavigationContainer>
                <SAFooter {...this.props} />
            </>
        );
    }
}