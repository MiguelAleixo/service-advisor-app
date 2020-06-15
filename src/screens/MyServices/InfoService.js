import React, { Component } from 'react';
import { Container, Content, Fab, Icon } from 'native-base';
import SAInput from '../../general/components/SAInput/SAInput';
import SAHeader from '../../general/components/SAHeader/SAHeader';


export default class MyServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoria: '',
            nome: '',
            tempo: '',
            descricao: '',
        }
    }

    render() {
        const { categoria, nome, tempo, descricao } = this.state;

        return (
            <Container style={{ backgroundColor: '#F5F5F5' }}>
                <SAHeader title='Novo serviço' />
                <Content style={{ marginHorizontal: 12 }} showsVerticalScrollIndicator={false}>
                    <SAInput name='Categoria' field='categoria' value={categoria} onChange={(categoria) => this.handlerInput(categoria, 'categoria')} />
                    <SAInput name='Nome' field='nome' value={nome} onChange={(nome) => this.handlerInput(nome, 'nome')} />
                    <SAInput name='Tempo' field='tempo' value={tempo} onChange={(tempo) => this.handlerInput(tempo, 'tempo')} />
                    <SAInput name='Descrição' field='descricao' value={descricao} onChange={(descricao) => this.handlerInput(descricao, 'descricao')} />
                </Content>

                <Fab
                    style={{ backgroundColor: '#FFC107' }}
                    position="bottomRight">
                    <Icon type="Octicons" name="check" style={{ color: '#263238' }} />
                </Fab>
            </Container>
        );
    }
}