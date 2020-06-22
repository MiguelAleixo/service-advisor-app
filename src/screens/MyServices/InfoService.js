import React, { Component } from 'react';
import { Container, Content, Fab, Icon, Textarea, Picker, Form } from 'native-base';
import SAInput from '../../general/components/SAInput/SAInput';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SADropDown from '../../general/components/SADropDown/SADropDown';
import SATextArea from '../../general/components/SATextArea/SATextArea';


export default class InfoService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoria: '',
            nome: '',
            tempo: '',
            descricao: '',
            types: [
                {
                    id: 1,
                    name: 'Obras'
                },
                {
                    id: 2,
                    name: 'Tecnologia'
                },
                {
                    id: 3,
                    name: 'Saúde e beleza'
                }
            ],
            values: [
                {
                    id: 4,
                    name: 'A combinar'
                },
                {
                    id: 1,
                    name: 'R$25,00 - R$50,00'
                },
                {
                    id: 2,
                    name: 'R$50,00 - R$75,00'
                },
                {
                    id: 3,
                    name: 'R$100,00 - R$150,00'
                },
                {
                    id: 3,
                    name: 'R$150,00 - R$200,00'
                },
            ],
            time: [
                {
                    id: 4,
                    name: 'A combinar'
                },
                {
                    id: 1,
                    name: 'até 1 hora'
                },
                {
                    id: 2,
                    name: '1 - 2 horas'
                },
                {
                    id: 3,
                    name: '2 - 5 horas'
                }
            ]
        }
    }

    render() {
        const { categoria, nome, tempo, descricao, types, values, time } = this.state;
        const { navigation } = this.props;

        return (
            <Container style={{ backgroundColor: '#F5F5F5' }}>
                <SAHeader title='Novo serviço' onPress={() => navigation.navigate('MyServices')} />
                <Content style={{ marginHorizontal: 12 }} showsVerticalScrollIndicator={false}>
                    <SAInput name='Nome' field='nome' placeholder='ex: Troca de resistência' value={nome} onChange={(nome) => this.handlerInput(nome, 'nome')} />
                    <SADropDown name='Categoria' items={types}/>
                    <SADropDown name='Valor' items={values}/>
                    <SADropDown name='Tempo' items={time}/>
                    <SATextArea name='Descrição'/>
                </Content>

                <Fab
                    style={{ backgroundColor: '#FFC107' }}
                    position="bottomRight">
                    <Icon type="Octicons" name="check" style={{ color: '#263238' }} />
                </Fab>
            </Container>
        );
    }
}