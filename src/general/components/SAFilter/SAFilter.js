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

    render() {
        const { items, name, selected } = this.props;

        return (
            <FilterMargin>
                <Label style={style.label}>{name}: </Label>
                <Picker
                    mode="dropdown"
                    style={style.filter}
                    selectedValue={this.state.selected}
                    onValueChange={(value) =>
                        this.setState({
                            selected: value
                        }, () => {
                            selected(this.state.selected)
                        })
                    }
                >
                    {
                        items.map((obj, i) => (
                            <Picker.Item key={i} label={obj.name} value={obj.id} />
                        ))
                    }
                </Picker>
            </ FilterMargin>
        );
    }
}