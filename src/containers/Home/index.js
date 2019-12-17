import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import selectors from './selectors';
import SearchBar from '../../components/SearchBar';
import RepoList from '../../components/RepoList';
import { Wrap } from './index.style';

const App = props => {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    return (
        <View>
            <Wrap>
                <SearchBar {...props} />
            </Wrap>
            <RepoList />
        </View>
    );
};

export default connect(
    selectors.propsSelector,
    dispatcher,
)(App);
