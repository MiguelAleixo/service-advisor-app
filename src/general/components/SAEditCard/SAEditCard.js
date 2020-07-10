import React, { Component } from 'react';
import { style } from './Styles';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class SAEditCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        const { image, name, time, onEdit, onService, solicitation } = this.props;

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
                        <Button transparent onPress={solicitation ? onService : null}>
                            <Icon style={ solicitation ? style.alert : style.icon} type='Fontisto' name='bell' />
                        </Button>
                    </CardItem>
                </Card>
            </>
        );
    }
}