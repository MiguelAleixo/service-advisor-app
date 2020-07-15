import React, { Component } from 'react';
import { Container, Content, Fab, Icon, Textarea, Picker, Form } from 'native-base';
import SAInput from '../../general/components/SAInput/SAInput';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SADropDown from '../../general/components/SADropDown/SADropDown';
import SATextArea from '../../general/components/SATextArea/SATextArea';
import * as actions from './controller/actions'
import { connect } from 'react-redux'

class InfoService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: {
                nome: '',
                descricao: '',
                idCategoria: 1,
                idTempo: 1,
                idValor: 1,
            },
            types: [
                {
                    id: 1,
                    name: 'Tecnologia e Design'
                },
                {
                    id: 2,
                    name: 'Obras'
                },
                {
                    id: 3,
                    name: 'Saúde e beleza'
                },
                {
                    id: 4,
                    name: 'Doméstico'
                }
            ],
            values: [
                {
                    id: 1,
                    name: 'A combinar'
                },
                {
                    id: 2,
                    name: 'R$25,00 - R$50,00'
                },
                {
                    id: 3,
                    name: 'R$50,00 - R$75,00'
                },
                {
                    id: 4,
                    name: 'R$100,00 - R$150,00'
                },
                {
                    id: 5,
                    name: 'R$150,00 - R$200,00'
                },
            ],
            time: [
                {
                    id: 1,
                    name: 'A combinar'
                },
                {
                    id: 2,
                    name: 'até 1 hora'
                },
                {
                    id: 3,
                    name: '1 - 2 horas'
                },
                {
                    id: 4,
                    name: '2 - 5 horas'
                },
                {
                    id: 5,
                    name: 'mais de 5 horas'
                }
            ]
        }
    }

    createMyService = (data, navigation) => {
        const { login: { content: { id_user } } } = this.props
        const { createMyService } = this.props
        createMyService(id_user, data)
        navigation.navigate('MyServices')
    }

    handlerInput = (value, field) => {
        this.setState({
            service: {
                ...this.state.service,
                [field]: value
            }
        })
    }

    render() {
        const { service, types, values, time } = this.state;
        const { navigation } = this.props;

        return (
            <Container style={{ backgroundColor: '#F5F5F5' }}>
                <SAHeader
                    title='Novo serviço'
                    onPress={() => navigation.navigate('MyServices')}
                    OnPressIcon={() => console.log('teste')} />
                <Content style={{ marginHorizontal: 12 }} showsVerticalScrollIndicator={false}>
                    <SAInput name='Nome' field='nome' placeholder='ex: Troca de resistência' value={service.nome} onChange={(nome) => this.handlerInput(nome, 'nome')} />
                    <SADropDown selected={(idCategoria) => this.setState({ service: { ...service, idCategoria } })} name='Categoria' items={types} />
                    <SADropDown selected={(idValor) => this.setState({ service: { ...service, idValor } })} name='Valor' items={values} />
                    <SADropDown selected={(idTempo) => this.setState({ service: { ...service, idTempo } })} name='Tempo' items={time} />
                    <SATextArea name='Descrição' placeholder='Escreva uma breve descrição de seu serviço' onChange={(descricao) => this.handlerInput(descricao, 'descricao')} />
                </Content>

                <Fab
                    style={{ backgroundColor: '#FFC107' }}
                    position="bottomRight"
                    onPress={() => this.createMyService(service, navigation)}
                >
                    <Icon type="Feather" name="check" style={{ color: '#263238' }} />
                </Fab>
            </Container>
        );
    }
}

const mapStateToProps = ({ services, login }) => ({ services, login })

export default connect(mapStateToProps, { createMyService: actions.createMyService })(InfoService)