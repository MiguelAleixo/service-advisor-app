import React, { Component } from 'react';
import { InputMargin, style } from './Styles';
import { Item, Input } from 'native-base';

export default class SAInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, name, disabled, password, onChange } = this.props;

        return (
            <InputMargin>
                <Item style={style.noMargin}>
                    <Input
                        value={value}
                        disabled={disabled}
                        onChangeText={onChange}
                        style={style.input}
                        secureTextEntry={password}
                        placeholder={name} />
                </Item>
            </InputMargin>
        );
    }
}