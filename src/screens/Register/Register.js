import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Form, Title } from 'native-base';
import SAInput from '../../general/components/SAInput/SAInput';
import SAButton from '../../general/components/SAButton/SAButton';
import SAContent from '../../general/components/SAContent/SAContent';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
                nome: '',
                telefone: '',
                dataNascimento: '',
                cpf: '',
                logradouro: '',
                bairro: '',
                numero: '',
                cep: ''
        };
    }

    handlerInput = (value, field) => {
        this.setState({ [field]: value }, () => console.log(this.state))
    }

    render() {
        const {  nome, telefone, dataNascimento, cpf, logradouro, bairro, numero, cep } = this.state;

        return (
            <Container style={{ backgroundColor: '#455A64' }}>
                <ScrollView
                    behaviour="height"
                    keyboardVerticalOffset={64}
                >
                    <SAContent>
                        <Title style={{ textAlign: 'center', marginVertical: 16, fontSize: 28, color: '#FFC107' }}> CADASTRE-SE </Title>
                        <Form>

                            <Title style={{ marginTop: 16, fontSize: 20, color: '#FFC107' }}> Dados pessoais </Title>
                            <SAInput name='Nome completo' field='nome' value={nome} onChange={(nome) => this.handlerInput(nome, 'nome')} />
                            <SAInput name='Celular' field='telefone' value={telefone} onChange={(telefone) => this.handlerInput(telefone, 'telefone')} />
                            <SAInput name='Data de nascimento' field='dataNascimento' value={dataNascimento} onChange={(dataNascimento) => this.handlerInput(dataNascimento, 'dataNascimento')} />
                            <SAInput name='CPF' field='cpf' value={cpf} onChange={(cpf) => this.handlerInput(cpf, 'cpf')} />

                            <Title style={{ marginTop: 16, fontSize: 20, color: '#FFC107' }}> Endereço </Title>
                            <SAInput name='Logradouro' field='logradouro' value={logradouro} onChange={(logradouro) => this.handlerInput(logradouro, 'logradouro')} />
                            <SAInput name='Bairro' field='bairro' value={telefone} onChange={(bairro) => this.handlerInput(bairro, 'bairro')} />
                            <SAInput name='Número' field='numero' value={numero} onChange={(numero) => this.handlerInput(numero, 'numero')} />
                            <SAInput name='CEP' field='cep' value={cep} onChange={(cep) => this.handlerInput(cep, 'cep')} />

                            <SAButton name='Próximo'
                                onPress={() => console.log(this.state)} />

                        </Form>
                    </SAContent>
                </ScrollView>
            </Container>
        );
    }
}