import React, { Component } from 'react';
import { Header, Left, Right, Body, Title } from 'native-base';
import { style } from './Styles';

export default class SAHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;

        return (
            <Header style={{ backgroundColor: '#263238' }}>
                <Left style={style.flex}></Left>
                <Body style={style.flex}>
                    <Title>
                        { title }
                    </Title>
                </Body>
                <Right style={style.flex}></Right>
            </Header>
        );
    }
}