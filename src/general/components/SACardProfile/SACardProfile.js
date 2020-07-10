import React, { Component } from 'react';
import { Card, CardItem, Text, Body } from 'native-base';
import { style, Text as SAText } from './Styles';

export default class SACardProfile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { requester, logradouro, numero, bairro, cep } = this.props;

        return (
            <Card style={style.card}>
                <CardItem bordered>
                    <SAText>Nome: </SAText>
                    <Text note style={{ fontSize: 16 }}>Miguel Gomes Aleixo</Text>
                </CardItem>
                <CardItem bordered>
                    <SAText>Data de nascimento: </SAText>
                    <Text note style={{ fontSize: 16 }}>01/12/1999</Text>
                </CardItem>
                <CardItem bordered>
                <SAText>CPF: </SAText>
                    <Text note style={{ fontSize: 16 }}>456.869.008-09</Text>
                </CardItem>
                <CardItem bordered>
                    <SAText>Logradouro: </SAText>
                    <Text note style={{ fontSize: 16 }}>Rua Felisbino de Lima</Text>
                </CardItem>
                <CardItem bordered>
                    <SAText>Número: </SAText>
                    <Text note style={{ fontSize: 16 }}>1277</Text>
                </CardItem>
                <CardItem bordered>
                    <SAText>Bairro: </SAText>
                    <Text note style={{ fontSize: 16 }}>Cidade Nova</Text>
                </CardItem>
                <CardItem bordered>
                    <SAText>CEP: </SAText>
                    <Text note style={{ fontSize: 16 }}>14401-146</Text>
                </CardItem>
            </Card>

        );
    }
}

