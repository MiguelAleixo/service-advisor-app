import React, { Component } from 'react';
import InputMargin from './Styles';
import { Item, Input } from 'native-base';

export default class SAInput extends Component {
    constructor(props) {
        super(props);
    }

    handlerInput = (value, field) => {
        this.setState({ [field]: value })
    }

    render() {
        const { value, field } = this.props;

        return (
            <InputMargin>
                <Item style={{ marginLeft: 0 }}>
                    <Input
                        value={value}
                        onChangeText={(value) => this.handlerInput(value, field)}
                        style={style.input}
                        placeholder="Login" />
                </Item>
            </InputMargin>
        );
    }
}