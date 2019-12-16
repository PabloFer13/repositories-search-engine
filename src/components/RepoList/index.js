import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { NameText } from './index.style';

class RepoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        const { repos } = this.state;
        return (
            <FlatList
                data={repos}
                renderItem={({ item }) => <NameText>{item.name}</NameText>}
                keyExtractor={item => item.id}
            />
        );
    }
}

export default RepoList;
