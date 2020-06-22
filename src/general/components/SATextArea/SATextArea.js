import React, { Component } from 'react';
import { style, TextAreaMargin } from './Styles';
import { Textarea, Label } from 'native-base';

export default class SATextArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {  name } = this.props;

        return (
            <TextAreaMargin>
                <Label style={style.label}> { name } </Label>
                <Textarea style={style.textArea} rowSpan={4} bordered placeholder="Escreva uma breve descrição de seu serviço" />
            </TextAreaMargin>
        );
    }
}