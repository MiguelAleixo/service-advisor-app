import React, { Component } from 'react';
import { Container, Content, Fab, Icon } from 'native-base';
import SACardSolicitation from '../../general/components/SACardSolicitation/SACardSolicitation';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SATextArea from '../../general/components/SATextArea/SATextArea';


export default class CallService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            solicitation: {
                logradouro: 'Rua Felisbino de Lima',
                bairro: 'Cidade Nova',
                numero: '1277',
                cep: '14401-146',
                requester: 'Felipe Braga'
            }
        }
    }

    render() {
        const { navigation } = this.props;
        const { solicitation } = this.state;

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
                        <SATextArea name='Responder' placeholder='ex: Estou ai em 5 minutos...'/>
                </Content>
            </Container>
        );
    }
}