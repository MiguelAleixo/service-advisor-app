import React, { Component } from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';
import { style } from './Styles';

export default class SAHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;

        return (
            <Header style={{ backgroundColor: '#263238' }}>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}