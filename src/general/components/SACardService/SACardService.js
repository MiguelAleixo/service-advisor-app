import React, { Component } from 'react';
import { Card, CardItem, Text, Body } from 'native-base';
import { style, Text as SAText } from './Styles';
import SADropDown from '../SADropDown/SADropDown';

export default class SACardService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avaliation: [
                {
                    id: 1,
                    name: 'Muito ruim'
                },
                {
                    id: 2,
                    name: 'Ruim'
                },
                {
                    id: 3,
                    name: 'Razoavel'
                },
                {
                    id: 4,
                    name: 'Bom'
                },
                {
                    id: 5,
                    name: 'Muito bom'
                }
            ]
        }
    }

    render() {
        const { requester, logradouro, numero, bairro, cep } = this.props;

        return (
            <Card style={style.card}>
                <CardItem header>
                    <SAText>Meus serviços </SAText>
                </CardItem>

                <CardItem bordered>
                    <SAText>Limpeza de piscina </SAText>
                </CardItem>
                <CardItem bordered>
                    <SAText>Status: </SAText>
                    <Text note style={{ fontSize: 16 }}>Finalizado</Text>
                </CardItem>
                {true && (
                    <CardItem bordered>
                       <SADropDown name='Avaliação' items={this.state.avaliation} />
                    </CardItem>
                )}

            </Card>

        );
    }
}

