import React, { Component } from 'react';
import { style } from './Styles';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class SAEditCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { image, name, onEdit, onService, idSolicitation, idStatus } = this.props;

        return (
            <>
                <Card style={style.card}>
                    <CardItem style={style.card}>
                        <Left>
                            <Thumbnail square source={{ uri: image }} />
                            <Body style={style.border}>
                                <Text style={style.text}>{name}</Text>
                            </Body>
                        </Left>
                        <Button transparent onPress={onEdit}>
                            <Icon style={style.editIcon} name='create' />
                        </Button>
                        <Button transparent onPress={(idSolicitation && idStatus < 2) ? onService : null}>
                            <Icon style={(idSolicitation && idStatus < 2) ? style.alert : style.icon} type='Fontisto' name='bell' />
                        </Button>
                    </CardItem>
                </Card>
            </>
        );
    }
}