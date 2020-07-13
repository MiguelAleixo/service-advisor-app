import React, { Component } from 'react';
import { Container, Content, Form } from 'native-base';
import SAInput from '../../general/components/SAInput/SAInput';
import SAButton from '../../general/components/SAButton/SAButton';
import SAContent from '../../general/components/SAContent/SAContent';
import * as actions from './controller/actions'
import { connect } from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    handlerInput = (value, field) => {
        this.setState({ [field]: value })
    }

    authUser = () => {
        const {
            authUser
        } = this.props
        const {
            login,
            password
        } = this.state
        authUser(login, password)
    }

    render() {
        const { login, password } = this.state;
        const { navigation } = this.props;

        return (
            <Container style={{ backgroundColor: '#263238' }}>
                <SAContent>
                    <Form>

                        <SAInput color placeholder='ex: john@hotmail.com' name='Login' field='user' value={login} onChange={(login) => this.handlerInput(login, 'login')} />
                        <SAInput color name='Senha' placeholder='Digite sua senha' password field='password' value={password} onChange={(password) => this.handlerInput(password, 'password')} />

                        <SAButton name='Entrar'
                            onPress={() => this.authUser()} />

                        <SAButton name='Cadastre-se'
                            small accent transparent
                            onPress={() => navigation.navigate('Register')} />

                    </Form>
                </SAContent>
            </Container>
        );
    }
}

const mapStateToProps = ({ login }) => ({ login })

export default connect(mapStateToProps, { authUser: actions.authUser })(Login)