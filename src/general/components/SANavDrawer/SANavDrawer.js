import React from 'react';
import { style } from './Styles';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SANavDrawerContent from '../SANavDrawerContent/SANavDrawerContent';

const Drawer = createDrawerNavigator();

export default function SANavDrawer(props) {

    const { children } = props;

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={style.drawerOptions}
                drawerStyle={style.drawer}
                drawerContent={(props) => <SANavDrawerContent {...props} />}>
                {children}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}