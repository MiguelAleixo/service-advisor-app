import React, { Component } from 'react';
import { DatePicker, Label } from 'native-base';
import { style, DateContainer, Container } from './Styles';

export default class SADate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date()
        };
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    render() {
        const { name, placeHolder } = this.props;
        return (
            <Container>
            <Label style={style.label}>{name}</Label>
            <DateContainer>
                <DatePicker
                    datePickerBg={'green'}
                    defaultDate={new Date()}
                    locale={"pt"}
                    style={{ backgroundColor: 'red' }}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText={placeHolder}
                    textStyle={{ color: "black" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                />
            </DateContainer>
            </Container>
        );
    }
}