import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { Button as BT } from 'react-native';

export default class Services extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
            <Container>
                <Content>
                    <Button primary><Text> Services </Text></Button>
                    <BT
                        title="Go to Home"
                        onPress={() => navigation.navigate('Home')}
                    />
                </Content>
            </Container>
        );
    }
}