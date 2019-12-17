import React, { Component } from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import { NameText } from './index.style';
import RepoDetail from '../RepoDetail';

class RepoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            repos: [
                {
                    id: '1',
                    name: 'repo.name.1',
                },
                {
                    id: '2',
                    name: 'repo.name.2',
                },
                {
                    id: '3',
                    name: 'repo.name.3',
                },
                {
                    id: '4',
                    name: 'repo.name.4',
                },
            ],
        };
    }

    handleIsOpen(isOpen) {
        this.setState({ isOpen });
    }
    render() {
        const { isOpen, repos } = this.state;

        return (
            <>
                <RepoDetail handleIsOpen={this.handleIsOpen} isOpen={isOpen} />
                <FlatList
                    data={repos}
                    renderItem={({ item }) => (
                        <TouchableHighlight>
                            <NameText>{item.name}</NameText>
                        </TouchableHighlight>
                    )}
                    keyExtractor={item => item.id}
                />
            </>
        );
    }
}

export default RepoList;
