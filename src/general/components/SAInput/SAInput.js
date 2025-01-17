import React, { Component } from 'react';
import { InputMargin, style } from './Styles';
import { Item, Input, Label } from 'native-base';

export default class SAInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { value, name, disabled, password, placeholder, onChange, color } = this.props;

        return (
            <InputMargin>
                <Label style={{ ...style.label, color: color ? '#FFF' : '#212121' }}>{name}</Label>
                <Item regular style={style.noMargin}>
                    <Input
                        value={value}
                        disabled={disabled}
                        onChangeText={onChange}
                        style={style.input}
                        placeholder={placeholder}
                        secureTextEntry={password} />
                </Item>
            </InputMargin>
        );
    }
}