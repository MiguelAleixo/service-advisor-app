import React, { Component } from 'react';
import { Container, Content, Text, Header, Item, Icon, Input, Button, Spinner } from 'native-base';
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
            ]
        }
    }

    componentDidMount = () => {
        this.getServices()
    }

    getServices = (idCategory = 0) => {
        const { login: { idUser } } = this.props
        const { getServices } = this.props
        getServices(idUser, idCategory)
    }

    render() {
        const { navigation, services } = this.props;
        const { types } = this.state;

        return (
            <>
                <Container style={{ backgroundColor: '#F5F5F5' }}>
                    <Header searchBar rounded style={{ backgroundColor: '#263238' }}>
                        <Item>
                            <Icon name="search" />
                            <Input placeholder="Pesquisar serviço" />
                        </Item>
                        <Button transparent>
                            <Text>Pesquisar serviço</Text>
                        </Button>
                    </Header>
                    <Flex>
                        <SAFilter selected={(idCategory) => this.getServices(idCategory)} name='Categoria' items={types} />
                    </Flex>
                    <Content style={{ marginHorizontal: 10 }} showsVerticalScrollIndicator={false}>

                        {services.isRequesting ?
                            <Spinner color='#FFC107' /> :
                            (services.content && services.content.map((obj, i) => (
                                <SACard
                                    key={i}
                                    name={obj.name}
                                    image={obj.img}
                                    avaliation={obj.avaliation}
                                    provider={obj.provider}
                                    time={obj.time}
                                    value={obj.value}
                                    onPress={() => navigation.navigate('ServiceDetail', obj)} />
                            )))}
                    </Content>
                </Container>
                <SAFooter onChange={() => this.getServices()} {...this.props} />
            </>
        );
    }
}

const mapStateToProps = ({ services, login }) => ({ services, login })

export default connect(mapStateToProps, { getServices: actions.getServices })(Services)