import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

class RepoDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: 'repo.description.name',
            author: 'repo.author',
            license: 'repo.author.licence',
            language: 'repo.author.language',
            createdAt: 'repo.createdAt',
            status: 'Public',
            openIssues: 'repo.openIssues',
        };
    }

    render() {
        const {
            state: {
                description,
                author,
                license,
                language,
                createdAt,
                status,
                openIssues,
            },
            props: { isOpen, handleIsOpen },
        } = this;
        return (
            <>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={isOpen}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <TouchableHighlight
                                onPress={() => handleIsOpen(!isOpen)}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                            <View>
                                <Text>{description}</Text>
                            </View>
                            <View>
                                <Text>Author: {author}</Text>
                                <Text>License: {license}</Text>
                                <Text>Language: {language}</Text>
                                <Text>{status} repository</Text>
                                <Text>Open Issues: {openIssues}</Text>
                                <Text>Created at: {createdAt}</Text>
                            </View>
                            <View>
                                <Text>Repository Commit List:</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </>
        );
    }
}

export default RepoDetail;
