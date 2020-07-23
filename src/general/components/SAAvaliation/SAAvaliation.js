import React, { Component } from 'react';
import { Circle, Text, SmallCircle, SmallText } from './Styles';

export default class SAAvaliation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { avaliation, small } = this.props;
        return (
            !small ? (
                <Circle>
                    <Text> {avaliation && avaliation.substring(0,3)} </Text>
                </Circle>
            ) : (
                    <SmallCircle>
                        <SmallText> {avaliation && avaliation.substring(0,3)} </SmallText>
                    </SmallCircle>
                )
        );
    }
}