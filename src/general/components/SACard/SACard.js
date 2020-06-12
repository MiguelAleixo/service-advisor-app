import React, { Component } from 'react';
import { style, Flex } from './Styles';
import { Card, CardItem, Left, Thumbnail, Body, Text, Right } from 'native-base';
import SAAvaliation from '../SAAvaliation/SAAvaliation';

export default class SACard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, name, provider, avaliation, time } = this.props;
        return (
            <Card style={style.card}>
                <CardItem style={style.card}>
                    <Left>
                        <Thumbnail square source={{ uri: image }} />
                        <Body style={style.border}>
                            <Text style={style.text}>{name}</Text>

                            <Flex>
                                <Text note style={style.noMargin}>{provider}</Text>
                                <Text note style={style.dot, style.noMargin}>•</Text>
                                <Text note style={style.noMargin}> {time}hr </Text>
                            </Flex>
                        </Body>
                        <SAAvaliation avaliation={avaliation} />
                    </Left>
                </CardItem>
            </Card>
        );
    }
}