import React, { Component } from 'react';
import { Circle, style } from './Styles';
import { Icon } from 'native-base';

export default class SABadge extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { avaliation, small } = this.props;
        return (
            <Circle>
                <Icon name="hammer" style={{ fontSize: 15, color: "blue", lineHeight: 20 }}/>
            </Circle>
        );
    }
}