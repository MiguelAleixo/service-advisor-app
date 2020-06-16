import React, { Component } from 'react';
import { InputMargin, style } from './Styles';
import { Picker } from 'native-base';

export default class SADropDown extends Component {
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
        console.log('props edit', this.props)
        const { items } = this.props;

        return (
            <Picker
                mode="dropdown"
                style={{ backgroundColor: '#FFFF' }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
            >
                <Picker.Item label='Categoria' value={null}/>
                {
                    items.map( obj => (
                        <Picker.Item label={obj.name} value={obj.id} />
                    ))
                }
            </Picker>
        );
    }
}