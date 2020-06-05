import React, { Component } from 'react';
import { style } from './Styles';
import { Header, Title, Left, Right, Body, Button, Icon } from 'native-base';

export default class SAHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, icon, onPress } = this.props;

        return (
            <Header style={style.header}>
                <Left>
                    {icon && (
                        <Button transparent onPress={onPress}>
                            <Icon name={icon} />
                        </Button>
                    )}
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}