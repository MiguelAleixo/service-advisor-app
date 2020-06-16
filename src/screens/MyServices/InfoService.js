import React, { Component } from 'react';
import { Container, Content, Fab, Icon, Textarea, Picker, Form } from 'native-base';
import SAInput from '../../general/components/SAInput/SAInput';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SADropDown from '../../general/components/SADropDown/SADropDown';


export default class InfoService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoria: '',
            nome: '',
            tempo: '',
            descricao: '',
            items: [
                {
                    id: 1,
                    name: 'Obras'
                },
                {
                    id: 2,
                    name: 'Tecnologia'
                },
                {
                    id: 3,
                    name: 'Saúde e beleza'
                }
            ]
        }
    }

    render() {
        const { categoria, nome, tempo, descricao, items } = this.state;
        const { navigation } = this.props;

        return (
            <Container style={{ backgroundColor: '#F5F5F5' }}>
                <SAHeader title='Novo serviço' onPress={() => navigation.navigate('MyServices')} />
                <Content style={{ marginHorizontal: 12 }} showsVerticalScrollIndicator={false}>
                    <SADropDown items={items}/>
                    {/* <SAInput name='Categoria' field='categoria' value={categoria} onChange={(categoria) => this.handlerInput(categoria, 'categoria')} />
                    <SAInput name='Nome' field='nome' value={nome} onChange={(nome) => this.handlerInput(nome, 'nome')} />
                    <SAInput name='Tempo' field='tempo' value={tempo} onChange={(tempo) => this.handlerInput(tempo, 'tempo')} />
                    <SAInput name='Descrição' field='descricao' value={descricao} onChange={(descricao) => this.handlerInput(descricao, 'descricao')} />
                    <Textarea style={{ backgroundColor: '#FFFF' }} rowSpan={4} bordered placeholder="Textarea" /> */}
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