import React, { Component } from 'react';
import { TextInput, Button } from 'react-native';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChange = text => {
        this.setState({ text });
    };

    render() {
        const { text } = this.state;
        return (
            <>
                <TextInput
                    placeholder="Enter some repo keywords"
                    value={text}
                    onChangeText={this.handleChange}
                />
                <Button title="Press me" />
            </>
        );
    }
}

export default SearchBar;
