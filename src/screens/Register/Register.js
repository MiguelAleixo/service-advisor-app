import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Form, Title, DatePicker } from 'native-base';
import SAInput from '../../general/components/SAInput/SAInput';
import SAButton from '../../general/components/SAButton/SAButton';
import SAContent from '../../general/components/SAContent/SAContent';
import SATitle from '../../general/components/SATitle/SATitle';
import SADate from '../../general/components/SADate/SADate';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            nome: '',
            telefone: '',
            dataNascimento: '',
            cpf: '',
            logradouro: '',
            bairro: '',
            numero: '',
            cep: '',
            chosenDate: new Date()
        };
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    handlerInput = (value, field) => {
        this.setState({ [field]: value }, () => console.log(this.state))
    }

    render() {
        const { email, senha, nome, telefone, dataNascimento, cpf, logradouro, bairro, numero, cep } = this.state;

        return (
            <Container style={{ backgroundColor: '#263238' }}>
                <ScrollView
                    behaviour="height"
                    keyboardVerticalOffset={64}
                >
                    <SAContent>
                        <Title style={{ textAlign: 'center', marginVertical: 16, fontSize: 28, color: '#FFC107' }}> CADASTRE-SE </Title>
                        <Form>
                            <SATitle title='Login'/>
                            <SAInput color placeholder='Escolha seu e-mail' name='E-mail' field='nome' value={nome} onChange={(nome) => this.handlerInput(nome, 'nome')} />
                            <SAInput color placeholder='Escolha sua senha' name='Senha' password field='telefone' value={telefone} onChange={(telefone) => this.handlerInput(telefone, 'telefone')} />

                            <SATitle title='Dados pessoais'/>
                            <SAInput color placeholder='ex: John Doe' name='Nome completo' field='nome' value={nome} onChange={(nome) => this.handlerInput(nome, 'nome')} />
                            <SAInput color placeholder='ex: (19) 9 9999-9999' name='Celular' field='telefone' value={telefone} onChange={(telefone) => this.handlerInput(telefone, 'telefone')} />
                            <SAInput color placeholder='ex: 123.456.869-09' name='CPF' field='cpf' value={cpf} onChange={(cpf) => this.handlerInput(cpf, 'cpf')} />
                            <SADate name='Data de nascimento' placeholder='ex: 01/01/1991'/>

                            <SATitle title='Endereço'/>
                            <SAInput color placeholder='ex: Av. Brasil' name='Logradouro' field='logradouro' value={logradouro} onChange={(logradouro) => this.handlerInput(logradouro, 'logradouro')} />
                            <SAInput color placeholder='ex: Pinheiros' name='Bairro' field='bairro' value={telefone} onChange={(bairro) => this.handlerInput(bairro, 'bairro')} />
                            <SAInput color placeholder='ex: 123' name='Número' field='numero' value={numero} onChange={(numero) => this.handlerInput(numero, 'numero')} />
                            <SAInput color placeholder='ex: 14402-508' name='CEP' field='cep' value={cep} onChange={(cep) => this.handlerInput(cep, 'cep')} />

                            <SAButton name='Cadastrar'
                                onPress={() => console.log(this.state)} />

                        </Form>
                    </SAContent>
                </ScrollView>
            </Container>
        );
    }
}