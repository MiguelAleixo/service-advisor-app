import React, { Component } from 'react';
import { SAMargin, style } from './Styles';
import { Container, Content, Button, Form, Item, Input, Text } from 'native-base';
import { SAInput } from '../../general/components/SAInput/SAInput'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };

    }

    handlerInput = (value, field) => {
        this.setState({ [field]: value })
    }

    render() {
        const { user, password } = this.state;
        return (
            <Container style={{ backgroundColor: '#455A64' }}>
                <Content contentContainerStyle={style.alignCenter}>
                    <Form>
                        <SAMargin>
                            <Item style={{ marginLeft: 0 }}>
                                <Input value={user}
                                    onChangeText={(user) => this.handlerInput(user, 'user')} style={style.input} placeholder="Login" />
                            </Item>
                        </SAMargin>
                        <SAMargin>
                            <Item style={{ marginLeft: 0 }}>
                                <Input value={password} secureTextEntry
                                    onChangeText={(password) => this.handlerInput(password, 'password')}
                                    style={style.input} placeholder="Password" />
                            </Item>
                        </SAMargin>
                        <SAMargin>
                            <Button
                                onPress={() => console.log(this.state)}
                                style={{
                                    justifyContent: 'center',
                                    backgroundColor: '#FFC107'
                                }} primary>
                                <Text style={{ color: '#000' }}> Entrar </Text>
                            </Button>
                        </SAMargin>
                        <SAMargin>
                            <Button small transparent style={{
                                justifyContent: 'center',
                                alignSelf: 'center'
                            }}>
                                <Text style={{ color: '#FFFF' }}>Cadastre-se</Text>
                            </Button>
                        </SAMargin>
                    </Form>
                </Content>
            </Container>
        );
    }
}