import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { Button as BT } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        
        return (
            <Container>
                <Content>
                    <Button primary><Text> Home </Text></Button>
                    <BT
                        title="Go to Services"
                        onPress={() => navigation.navigate('Services')}
                    />
                </Content>
            </Container>
        );
    }
}