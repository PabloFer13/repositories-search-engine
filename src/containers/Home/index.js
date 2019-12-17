import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
// import selectors from './selectors';
import SearchBar from '../../components/SearchBar';
import RepoList from '../../components/RepoList';

const App = props => {
    return (
        <View>
            <SearchBar {...props} />
            <RepoList />
        </View>
    );
};

export default connect(
    null,
    dispatcher,
)(App);
