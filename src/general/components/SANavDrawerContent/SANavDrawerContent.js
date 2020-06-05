import React from 'react';
import { View } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';
import SAUserHeader from '../SAUserHeader/SAUserHeader';

export default function SANavDrawerContent(props) {
    return (
        <View {...props}>
            <SAUserHeader title="Miguel Aleixo" subtitle="miguel@luizalabs.com"/>
            <DrawerItemList {...props} />
        </View>
    );
}