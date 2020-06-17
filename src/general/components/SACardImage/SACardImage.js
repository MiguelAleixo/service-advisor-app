import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { style } from './Styles';
import SAAvaliation from '../SAAvaliation/SAAvaliation';

export default class SACardImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, avaliation, provider, time, value } = this.props;

        return (
            <Card style={style.card}>
                <CardItem style={style.card}>
                    <Image style={style.card} source={{ uri: image }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem bordered>
                    <Text>Prestador: {provider}</Text>
                </CardItem>
                <CardItem bordered>
                    <Text>Avaliação: </Text>
                    <SAAvaliation avaliation={avaliation} />
                </CardItem>
                <CardItem bordered>
                    <Text>Tempo: {time}hr</Text>
                </CardItem>
                <CardItem bordered>
                    <Text>Valor: R${value},00</Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text>
                            Descrição:
                            t is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The point
                            of using Lorem Ipsum is that it has a more-or-less normal distribution
                            of letters, as opposed to using 'Content here, content here', making
                            it look like readable English. Many desktop publishing packages and
                            web page editors now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still in
                            their infancy. Various versions have evolved over the years, sometimes
                            by accident, sometimes on purpose (injected humour and the like).
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

