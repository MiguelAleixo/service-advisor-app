import React, { Component } from 'react';
import { Container, Content, Fab, Icon } from 'native-base';
import SACardSolicitation from '../../general/components/SACardSolicitation/SACardSolicitation';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SATextArea from '../../general/components/SATextArea/SATextArea';
import SAButton from '../../general/components/SAButton/SAButton';


export default class CallService extends Component {
    constructor(props) {
        super(props);
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
                        requester={solicitation.requester} />
                        <SATextArea name='Responder mensagem (opcional)' placeholder='ex: Estou ai em 5 minutos...'/>
                </Content>
                <SAButton name='Iniciar serviço'
                    onPress={() => console.log(this.state)} />
            </Container>
        );
    }
}