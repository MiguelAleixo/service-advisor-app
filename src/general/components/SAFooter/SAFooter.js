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
                    icon: 'hammer',
                    title: 'Meus Serviços',
                    route: 'MyServices',
                    type: 'Ionicons'
                },
                {
                    icon: 'user',
                    title: 'Perfil',
                    type: 'AntDesign'
                }
            ]
        }
    }

    render() {
        const { route, navigation } = this.props;
        const { buttons } = this.state;
        console.log('rota', route)

        return (
            <Footer>
                <FooterTab style={{ backgroundColor: '#263238' }}>
                    {
                        buttons.map(obj => (
                            <Button
                                style={(route.name !== obj.route) ? style.button : style.buttonActive}
                                onPress={() => navigation.navigate(obj.route)} vertical>
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