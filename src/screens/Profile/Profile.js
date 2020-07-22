import React, { Component } from 'react';
import { style, Text as SAText } from './Styles';
import { Container, Content, Spinner, Title, Card, Text, CardItem } from 'native-base';
import SAHeader from '../../general/components/SAHeader/SAHeader';
import SAFooter from '../../general/components/SAFooter/SAFooter';
import SAButton from '../../general/components/SAButton/SAButton';
import SACardService from '../../general/components/SACardService/SACardService';
import SADropDown from '../../general/components/SADropDown/SADropDown';
import * as actions from './controller/actions'
import { connect } from 'react-redux'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avaliations: [
                {
                    id: 5,
                    name: 'Muito bom'
                },
                {
                    id: 4,
                    name: 'Bom'
                },
                {
                    id: 3,
                    name: 'Razoavel'
                },
                {
                    id: 2,
                    name: 'Ruim'
                },
                {
                    id: 1,
                    name: 'Muito ruim'
                }
            ]
        }
    }

    componentDidMount() {
        this.getMySolicitation()
    }

    getMySolicitation = () => {
        const { login: { idUser } } = this.props
        const { getMySolicitation } = this.props
        getMySolicitation(idUser)
    }

    render() {
        const { mySolicitation, login } = this.props
        const { avaliations } = this.state;

        return (
            <>
                <Container style={{ backgroundColor: '#F5F5F5' }}>
                    <SAHeader title='Meu Perfil' />
                    <Content style={{ marginHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                        <Card style={style.card}>
                            <CardItem bordered>
                                <SAText>Meus Dados:</SAText>
                            </CardItem>
                            <CardItem>
                                <SAText>Nome completo: </SAText>
                                <Text note style={{ fontSize: 16 }}>{login.name}</Text>
                            </CardItem>
                            <CardItem>
                                <SAText>E-mail / Login: </SAText>
                                <Text note style={{ fontSize: 16 }}>{login.login}</Text>
                            </CardItem>
                        </Card>
                        {
                            mySolicitation.isRequesting ?
                                <Spinner color='#FFC107' /> :
                                (mySolicitation.content.idStatus < 3) ? (
                                    <>
                                        <SACardService item={mySolicitation.content} />
                                        {mySolicitation.content.idStatus > 1 && (
                                            <>
                                                <Card>
                                                    <SADropDown selected={(avaliation) => console.log('teste', avaliation)} name='Como foi o serviço prestado?' items={avaliations} />
                                                </Card>
                                                <SAButton name='Finalizar'
                                                    onPress={() => this.registerSolicitation(obj.id, message)} />
                                            </>
                                        )}
                                    </>
                                ) : (
                                        <Text style={style.text} > Você não possui nenhuma solicitação no momento... </Text>
                                    )
                        }
                    </Content>
                </Container>
                <SAFooter onChange={() => this.getMySolicitation()} {...this.props} />
            </>
        );
    }
}

const mapStateToProps = ({ mySolicitation, login }) => ({ mySolicitation, login })

export default connect(mapStateToProps, { getMySolicitation: actions.getMySolicitation, finishSolicitation: actions.finishSolicitation })(Profile)