import React, { Component } from 'react';
import { FilterMargin, style } from './Styles';
import { Picker, Label } from 'native-base';

export default class SAFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        }
    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        const { items, name } = this.props;

        return (
            <FilterMargin>
                <Label style={style.label}>{name}: </Label>
                <Picker
                    mode="dropdown"
                    style={style.filter}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                >
                    {
                        items.map(obj => (
                            <Picker.Item label={obj.name} value={obj.id} />
                        ))
                    }
                </Picker>
            </ FilterMargin>
        );
    }
}