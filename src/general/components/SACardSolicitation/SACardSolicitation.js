import React, { Component } from 'react';
import { Card, CardItem, Text, Body } from 'native-base';
import { style, Text as SAText } from './Styles';
import SATextArea from '../SATextArea/SATextArea';

export default class SACardSolicitation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { requester, logradouro, numero, bairro, cep, message } = this.props;

        return (
            <Card style={style.card}>
                <CardItem bordered>
                    <SAText>Solicitante: </SAText>
                    <Text note style={{ fontSize: 16 }}> {requester} </Text>
                </CardItem>
                <CardItem bordered>
                    <SAText>Logradouro: </SAText>
                    <Text note style={{ fontSize: 16 }}> {logradouro} </Text>
                </CardItem>
                <CardItem bordered>
                    <SAText>Número: </SAText>
                    <Text note style={{ fontSize: 16 }}> {numero} </Text>
                </CardItem>
                <CardItem bordered>
                    <SAText>Bairro: </SAText>
                    <Text note style={{ fontSize: 16 }}> {bairro} </Text>
                </CardItem>
                <CardItem bordered>
                    <SAText>CEP: </SAText>
                    <Text note style={{ fontSize: 16 }}> {cep} </Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <SAText>Mensagem de {requester}: </SAText>
                        <Text note style={{ fontSize: 16 }}>
                            {message}
                        </Text>
                    </Body>
                </CardItem>
            </Card>

        );
    }
}

