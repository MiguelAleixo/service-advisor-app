import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { style } from './Styles';

export default class SAFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {
                    icon: 'home',
                    title: 'Início',
                    route: 'Services',
                    type: 'AntDesign'
                },
                {
                    icon: 'handshake',
                    title: 'Meus Serviços',
                    route: 'MyServices',
                    type:'FontAwesome5'
                },
                {
                    icon: 'user',
                    title: 'Perfil',
                    route: 'Profile',
                    type: 'AntDesign'
                }
            ]
        }
    }

    render() {
        const { route, navigation, onChange } = this.props;
        const { buttons } = this.state;

        return (
            <Footer>
                <FooterTab style={{ backgroundColor: '#263238' }}>
                    {
                        buttons.map(obj => (
                            <Button
                                style={(route.name !== obj.route) ? style.button : style.buttonActive}
                                onPress={() => { navigation.navigate(obj.route); onChange() }} vertical>
                                <Icon
                                    type={obj.type}
                                    style={(route.name !== obj.route) ? style.icon : style.iconActive} name={obj.icon} />
                                <Text style={(route.name !== obj.route) ? style.title : style.titleActive}>{obj.title}</Text>
                            </Button>
                        ))
                    }
                </FooterTab>
            </Footer>
        );
    }
}