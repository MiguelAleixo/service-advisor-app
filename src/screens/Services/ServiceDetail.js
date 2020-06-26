import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import SACardImage from '../../general/components/SACardImage/SACardImage';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SAButton from '../../general/components/SAButton/SAButton';

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
        const { services, search } = this.state;

        console.log('props', obj);

        return (
            <Container style={{ backgroundColor: '#F5F5F5' }}>
                <SAHeader title={obj.name} 
                onPress={() => navigation.navigate('Services')} 
                />
                <Content style={{ marginHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                    <SACardImage
                        name={obj.name}
                        image={obj.image}
                        avaliation={obj.avaliation}
                        provider={obj.provider}
                        time={obj.time}
                        value={obj.value} />
                </Content>
                <SAButton name='Quero esse serviço!'
                    onPress={() => console.log(this.state)} />
            </Container>
        );
    }
}