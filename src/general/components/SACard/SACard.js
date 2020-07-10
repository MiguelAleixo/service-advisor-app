import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { style, Flex } from './Styles';
import { Card, CardItem, Left, Thumbnail, Body, Text } from 'native-base';
import SAAvaliation from '../SAAvaliation/SAAvaliation';

export default class SACard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, name, provider, avaliation, time, value, onPress } = this.props;
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <Card style={style.card}>
                    <CardItem style={style.card}>
                        <Left>
                            <Thumbnail square source={{ uri: image }} />
                            <Body style={style.border}>
                                <Text style={style.text}>{name}</Text>

                                <Flex>
                                <Text note style={style.noMargin}> {provider} </Text>
                                    {/* <Text note style={style.dot, style.noMargin}>•</Text> */}
                                </Flex>
                                <Text note style={style.noMargin}> {value} </Text>
                            </Body>
                            <SAAvaliation avaliation={avaliation} />
                        </Left>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }
}