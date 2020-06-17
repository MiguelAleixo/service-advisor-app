import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Services from './Services';
import ServiceDetail from './ServiceDetail';
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
                            name="Services" component={Services}
                        />

                        <Drawer.Screen
                            name="ServiceDetail" component={ServiceDetail}
                        />
                    </Drawer.Navigator>
                </NavigationContainer>
                <SAFooter {...this.props} />
            </>
        );
    }
}