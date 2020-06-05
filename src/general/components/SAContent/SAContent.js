import React, { Component } from 'react';
import { style } from './Styles';
import { Content } from 'native-base';

export default class SAContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
                <Content contentContainerStyle={style.alignCenter}>
                    {children}
                </Content>
        );
    }
}