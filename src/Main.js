import React from 'react';
import { Container, Content, Button, Header, Left, Right, Body, Icon, Title } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home/Home'
import Services from './screens/Services/Services'
import Login from './screens/Login/Login'

const Stack = createStackNavigator();

export default function Main() {
    return (

        false ? (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen name="Services" component={Services} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </Content>
            </Container>
        ) : (
                <Login />
            )
    );
}