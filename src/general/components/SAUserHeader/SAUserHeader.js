import React, { Component } from 'react';
import { style } from './Styles';
import { Header, Title, Text, Right, Body, Button, Icon, Thumbnail, Subtitle } from 'native-base';

export default class SAUserHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, subtitle } = this.props;
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

        return (
            <Header style={style.header}>
                <Body style={style.body}>
                    <Thumbnail small source={{ uri: uri }} />
                    <Text style={style.title}>{title}</Text>
                    <Text note >{subtitle}</Text>
                </Body>

            </Header>
        );
    }
}