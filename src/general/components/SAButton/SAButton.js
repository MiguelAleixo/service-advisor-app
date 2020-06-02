import React, { Component } from 'react';
import { ButtonMargin, style } from './Styles';
import { Button, Text } from 'native-base';

export default class SAButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, transparent, small, accent, onPress } = this.props;

        return (
            <ButtonMargin>
                <Button small={small} transparent={transparent} 
                onPress={onPress} style={!accent ? style.primary : style.accent}>
                    <Text style={{ color: (accent ? '#FFF' : '#000')}}>{name}</Text>
                </Button>
            </ButtonMargin>
        );
    }
}