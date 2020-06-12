import React, { Component } from 'react';
import { Circle, Text } from './Styles';

export default class SAAvaliation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { avaliation } = this.props;
        return (
            <Circle>
                <Text> { avaliation } </Text>
            </Circle>
        );
    }
}