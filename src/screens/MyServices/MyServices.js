import React, { Component } from 'react';
import { Container, Content, Fab, Icon } from 'native-base';
import SAEditCard from '../../general/components/SAEditCard/SAEditCard';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SAFooter from '../../general/components/SAFooter/SAFooter';
import * as actions from './controller/actions'
import { connect } from 'react-redux'


class MyServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            services: [
                {
                    name: 'Encanação',
                    image: 'data:image/jpeg;base64,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',
                    description: '',
                    category: 'Doméstico',
                    avaliation: '4.5',
                    time: 1,
                    provider: 'Zé Roberto',
                    solicitation:
                    {
                        logradouro: 'Rua Felisbino de Lima',
                        bairro: 'Cidade Nova',
                        numero: '1277',
                        cep: '14401-146',
                        requester: 'Felipe Braga'
                    }
                },
                {
                    name: 'Quebra paredes',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZEFwJrp0VJvmfgObLhI5elxXoTKLPQ-uc15mo-y3p4lrBEbKd&usqp=CAU',
                    description: 'Obras',
                    category: '',
                    avaliation: '3.9',
                    time: 5,
                    provider: 'Miguel Aleixo',
                    solicitation:
                    {
                        logradouro: 'Rua Felisbino de Lima',
                        bairro: 'Cidade Nova',
                        numero: '1277',
                        cep: '14401-146',
                        requester: 'Julio Cesar'
                    }
                },
                {
                    name: 'Pintura de parede',
                    image: 'https://imagens-revista.vivadecora.com.br/uploads/2020/03/Como-pintar-parede-escada-e-materiais-vix.jpg',
                    description: 'Obras',
                    category: '',
                    avaliation: '4.9',
                    time: 8,
                    provider: 'Miguel Aleixo'
                }
            ]
        }
    }

    componentDidMount = () => {
        this.getMyServices()
    }

    getMyServices = () => {
        const { login: { content: { id_user } } } = this.props
        const { getMyServices } = this.props
        console.log('chegou aqui')
        getMyServices(id_user)
    }

    render() {
        const { navigation, myServices } = this.props;
        const { services } = this.state;
        console.log('MYT', myServices)

        return (
            <>
                <Container style={{ backgroundColor: '#F5F5F5' }}>
                    <SAHeader title='Meus Serviços' />
                    <Content style={{ marginHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                        {myServices.content && myServices.content.map(obj => (
                            <SAEditCard
                                image={obj.image}
                                name={obj.name}
                                avaliation={obj.avaliation}
                                time={obj.time}
                                solicitation={obj.solicitation}
                                onEdit={() => navigation.navigate('InfoService', { teste: true })}
                                onService={() => navigation.navigate('CallService', obj.solicitation)} />
                        ))}
                    </Content>
                    <Fab
                        onPress={() => navigation.navigate('InfoService')}
                        style={{ backgroundColor: '#FFC107' }}
                        position="bottomRight">
                        <Icon name="add" style={{ color: '#263238' }} />
                    </Fab>
                </Container>
                <SAFooter {...this.props} />
            </>
        );
    }
}

const mapStateToProps = ({ myServices, login }) => ({ myServices, login })

export default connect(mapStateToProps, { getMyServices: actions.getMyServices })(MyServices)