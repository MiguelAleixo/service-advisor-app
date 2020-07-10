import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import { style, Text as SAText } from './Styles';
import SAAvaliation from '../SAAvaliation/SAAvaliation';

export default class SACardImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, avaliation, provider, time, value, description } = this.props;

        return (
            <Card style={style.card}>
                <CardItem style={style.card}>
                    <Image style={style.card} source={{ uri: image }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem bordered>
                    <SAText>Avaliação: </SAText>
                    <SAAvaliation small avaliation={avaliation} />
                </CardItem>
                <CardItem bordered>
                    <SAText>Prestador: </SAText>
                    <Text note style={{ fontSize: 16 }}> {provider} </Text>
                </CardItem>
                <CardItem bordered>
                    <SAText>Tempo: </SAText>
                    <Text note style={{ fontSize: 16 }}> {time} </Text>
                </CardItem>
                <CardItem bordered>
                    <SAText>Valor: </SAText>
                    <Text note style={{ fontSize: 16 }}> {value} </Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <SAText>Descrição: </SAText>
                        <Text note style={{ fontSize: 16, textAlign: 'left' }}>
                            { description }
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

