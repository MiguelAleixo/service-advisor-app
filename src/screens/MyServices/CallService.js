import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import SACardSolicitation from '../../general/components/SACardSolicitation/SACardSolicitation';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SAButton from '../../general/components/SAButton/SAButton';
import * as actions from './controller/actions'
import { connect } from 'react-redux'


class CallService extends Component {
    constructor(props) {
        super(props);
    }

    acceptSolicitation = (idSolicitation, data, nav) => {
        const { acceptSolicitation } = this.props;
        acceptSolicitation(idSolicitation, data, nav)
    }

    render() {
        const { navigation, route: { params } } = this.props;
        const solicitation = params;

        return (
            <Container style={{ backgroundColor: '#F5F5F5' }}>
                <SAHeader
                    title='Solicitações'
                    onPress={() => navigation.navigate('MyServices')} />
                <Content style={{ marginHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                    <SACardSolicitation
                        logradouro={solicitation.logradouro}
                        numero={solicitation.numero}
                        bairro={solicitation.bairro}
                        cep={solicitation.cep}
                        requester={solicitation.requester}
                        telefone={solicitation.telefone}
                        message={solicitation.message} />
                </Content>
                <SAButton name='Aceitar serviço'
                    onPress={() =>
                        this.acceptSolicitation(solicitation.idSolicitation, { idStatus: 2 }, navigation)
                    } />
            </Container>
        );
    }
}

export default connect(null, { acceptSolicitation: actions.acceptSolicitation })(CallService)