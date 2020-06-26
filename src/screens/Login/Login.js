import React, { Component } from 'react';
import { Container, Content, Form } from 'native-base';
import SAInput from '../../general/components/SAInput/SAInput';
import SAButton from '../../general/components/SAButton/SAButton';
import SAContent from '../../general/components/SAContent/SAContent';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
    }

    handlerInput = (value, field) => {
        this.setState({ [field]: value }, () => console.log(this.state))
    }

    render() {
        const { user, password } = this.state;
        const { navigation } = this.props;

        return (
            <Container style={{ backgroundColor: '#263238' }}>
                <SAContent>
                    <Form>

                        <SAInput color placeholder='ex: john@hotmail.com' name='Login' field='user' value={user} onChange={(user) => this.handlerInput(user, 'user')} />
                        <SAInput color name='Senha' placeholder='Digite sua senha' password field='password' value={password} onChange={(password) => this.handlerInput(password, 'password')} />

                        <SAButton name='Entrar' 
                        onPress={() => console.log(this.state)}/>

                        <SAButton name='Cadastre-se' 
                        small accent transparent
                        onPress={() => navigation.navigate('Register')}/>
                        
                    </Form>
                </SAContent>
            </Container>
        );
    }
}