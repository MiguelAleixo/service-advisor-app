import React, { Component } from 'react';
import { style } from './Styles';
import { Title } from 'native-base';

export default class SATitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {  title } = this.props;

        return (
        <Title style={style.title}> { title } </Title>
        );
    }
}