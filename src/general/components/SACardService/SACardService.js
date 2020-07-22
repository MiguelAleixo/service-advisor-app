import React, { Component } from 'react';
import { Card, CardItem, Text } from 'native-base';
import { style, Text as SAText } from './Styles';

export default class SACardService extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, status, provider } = this.props.item;

        return (
            <Card style={style.card}>
                <CardItem bordered>
                    <SAText>Minha solicitação:</SAText>
                </CardItem>
                <CardItem>
                    <SAText>Prestador: </SAText>
                    <Text note style={{ fontSize: 16 }}>{provider}</Text>
                </CardItem>
                <CardItem>
                    <SAText>Serviço: </SAText>
                    <Text note style={{ fontSize: 16 }}>{name}</Text>
                </CardItem>
                <CardItem>
                    <SAText>Status: </SAText>
                    <Text note style={{ fontSize: 16 }}>{status}</Text>
                </CardItem>
            </Card>

        );
    }
}

