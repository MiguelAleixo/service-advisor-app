import React, { Component } from 'react';
import { Container, Content, Text, Header, Item, Icon, Input, Button } from 'native-base';
import { Flex } from './Styles';
import SAFooter from '../../general/components/SAFooter/SAFooter';
import SACard from '../../general/components/SACard/SACard';
import SAFilter from '../../general/components/SAFilter/SAFilter';
import * as actions from './controller/actions'
import { connect } from 'react-redux'

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            types: [
                {
                    id: 0,
                    name: 'Todas'
                },
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
            avaliations: [
                {
                    id: 1,
                    name: 'Bem avaliados'
                },
                {
                    id: 2,
                    name: 'Mal avaliados'
                }
            ]
        }
    }

    componentDidMount = () => {
        this.getServices()
    }

    getServices = (idCategory = 0) => {
        const { login: { content: { id_user } } } = this.props
        const { getServices } = this.props
        getServices(id_user, idCategory)
    }

    render() {
        const { navigation, services } = this.props;
        const { search, types, avaliations } = this.state;

        return (
            <>
                <Container style={{ backgroundColor: '#F5F5F5' }}>
                    <Header searchBar rounded style={{ backgroundColor: '#263238' }}>
                        <Item>
                            <Icon name="search" />
                            <Input placeholder="Pesquisar serviço" />
                            <Icon name="hammer" />
                        </Item>
                        <Button transparent>
                            <Text>Pesquisar serviço</Text>
                        </Button>
                    </Header>
                    <Flex>
                        <SAFilter selected={ (idCategory) => this.getServices(idCategory)} name='Categoria' items={types} />
                        <SAFilter name='Avaliação' items={avaliations} />
                    </Flex>
                    <Content style={{ marginHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                            {services.content && services.content.map(obj => (
                                <SACard
                                    name={obj.name}
                                    image={obj.img}
                                    avaliation={obj.avaliation}
                                    provider={obj.provider}
                                    time={obj.time}
                                    value={obj.value}
                                    onPress={() => navigation.navigate('ServiceDetail', obj)} />
                            ))}
                    </Content>
                </Container>
                <SAFooter onChange={ () => this.getServices()} {...this.props} />
            </>
        );
    }
}

const mapStateToProps = ({ services, login }) => ({ services, login })

export default connect(mapStateToProps, { getServices: actions.getServices })(Services)