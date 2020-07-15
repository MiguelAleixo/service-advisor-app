import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import SACardImage from '../../general/components/SACardImage/SACardImage';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SAButton from '../../general/components/SAButton/SAButton';
import SATextArea from '../../general/components/SATextArea/SATextArea';

export default class ServicesDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        // this.props.carai()
    }

    render() {
        const { navigation, route } = this.props;
        const obj = route.params;

        return (
            <Container style={{ backgroundColor: '#F5F5F5' }}>
                <SAHeader title={obj.name} 
                onPress={() => navigation.navigate('Services')} 
                />
                <Content style={{ marginHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                    <SACardImage
                        name={obj.name}
                        image={obj.img}
                        avaliation={obj.avaliation}
                        provider={obj.provider}
                        time={obj.time}
                        description={obj.description}
                        value={obj.value} />
                        <SATextArea name='Mensagem (opcional)' placeholder='ex: O modelo do chuveiro é...'/>
                        <SAButton name='Quero esse serviço!'
                    onPress={() => console.log(this.state)} />
                </Content>
            </Container>
        );
    }
}