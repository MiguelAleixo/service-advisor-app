import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import SACardImage from '../../general/components/SACardImage/SACardImage';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SAButton from '../../general/components/SAButton/SAButton';
import SATextArea from '../../general/components/SATextArea/SATextArea';
import * as actions from './controller/actions'
import { connect } from 'react-redux'

class ServicesDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    handlerInput = (value, field) => {
        this.setState({
                ...this.state,
                [field]: value
        })
    }

    registerSolicitation = (idService, message) => {
        const { login: { idUser } } = this.props
        const { registerSolicitation } = this.props
        const data = {
            idService,
            message
        }
        console.log(data)
        registerSolicitation(idUser, data)
    }

    render() {
        const { navigation, route } = this.props;
        const { message } = this.state;
        const obj = route.params;

        return (
            <Container style={{ backgroundColor: '#F5F5F5' }}>
                <SAHeader title={obj.name}
                    onPress={() => navigation.navigate('Services')}
                />
                <Content style={{ marginHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                    <SACardImage
                        name={obj.name}
                        image={obj.img}
                        avaliation={obj.avaliation}
                        provider={obj.provider}
                        time={obj.time}
                        description={obj.description}
                        value={obj.value} />
                    <SATextArea name='Mensagem (opcional)' placeholder='ex: O modelo do chuveiro é...' 
                    onChange={(message) => this.handlerInput(message, 'message')}/>
                    <SAButton name='Quero esse serviço!'
                        onPress={() => this.registerSolicitation(obj.id, message)} />
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = ({ services, login }) => ({ services, login })

export default connect(mapStateToProps, { registerSolicitation: actions.registerSolicitation })(ServicesDetail)