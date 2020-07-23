import React, { Component } from 'react';
import { Container, Content, Fab, Icon, Spinner, Text } from 'native-base';
import { style } from './Styles';
import SAEditCard from '../../general/components/SAEditCard/SAEditCard';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SAFooter from '../../general/components/SAFooter/SAFooter';
import * as actions from './controller/actions'
import { connect } from 'react-redux'


class MyServices extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.getMyServices()
    }

    getMyServices = () => {
        const { login: { idUser } } = this.props
        const { getMyServices } = this.props
        getMyServices(idUser)
    }

    render() {
        const { navigation, myServices } = this.props;
        return (
            <>
                <Container style={{ backgroundColor: '#F5F5F5' }}>
                    <SAHeader title='Meus Serviços' />
                    <Content style={{ marginHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                        {myServices.isRequesting ?
                            <Spinner color='#FFC107' /> :
                            myServices.content.length ?
                                (myServices.content.map(obj => (
                                    <SAEditCard
                                        key={obj.id}
                                        image={obj.img}
                                        name={obj.name}
                                        idSolicitation={obj.idSolicitation}
                                        idStatus={obj.idStatus}
                                        onEdit={() => navigation.navigate('InfoService', obj)}
                                        onService={() => navigation.navigate('CallService', obj)} />
                                ))) :
                                <Text style={style.text} > Você ainda não possui um serviço cadastrado... </Text>

                        }
                    </Content>
                    <Fab
                        onPress={() => navigation.navigate('InfoService')}
                        style={{ backgroundColor: '#FFC107' }}
                        position="bottomRight">
                        <Icon name="add" style={{ color: '#263238' }} />
                    </Fab>
                </Container>
                <SAFooter onChange={() => this.getMyServices()} {...this.props} />
            </>
        );
    }
}

const mapStateToProps = ({ myServices, login }) => ({ myServices, login })

export default connect(mapStateToProps, { getMyServices: actions.getMyServices })(MyServices)