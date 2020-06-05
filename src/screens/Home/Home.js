import React, { Component } from 'react';
import { Container, Content, Title, Icon, Button, Footer, FooterTab, Text } from 'native-base';
import { Button as BT } from 'react-native';
import SAFooter from '../../general/components/SAFooter/SAFooter';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation, route } = this.props;
        console.log(this.props)
        
        return (
            <Container>
                {/* <SAHeader onPress={() => navigation.openDrawer()} title="Service Advisor" icon="menu"/> */}
                <Content>
                    <Title> Service Advisor </Title>
                </Content>
                <SAFooter {...this.props}/>
                {/* <Footer>
                    <FooterTab style={{ backgroundColor: '#263238' }}>
                        <Button transparent onPress={() => navigation.navigate('Home')} vertical>
                            <Icon active style={{ color: '#FFC107' }} name="search" />
                            <Text style={{ color: '#FFFF' }}>Pesquisar</Text>
                        </Button>
                        <Button transparent onPress={() => navigation.navigate('Serviços')} vertical>
                            <Icon style={{ color: '#FFC107' }} name="hammer" />
                            <Text style={{ color: '#FFFF' }}> Serviços</Text>
                        </Button>
                        <Button transparent vertical>
                            <Icon style={{ color: '#FFC107' }} name="add" />
                            <Text style={{ color: '#FFFF' }}>Novo</Text>
                        </Button>
                        <Button transparent vertical>
                            <Icon style={{ color: '#FFC107' }} name="person" />
                            <Text style={{ color: '#FFFF' }}>Perfil</Text>
                        </Button>
                    </FooterTab>
                </Footer> */}
            </Container>
        );
    }
}