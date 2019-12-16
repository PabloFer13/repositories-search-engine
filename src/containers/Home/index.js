import React from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../../components/SearchBar';
import RepoList from '../../components/RepoList';

const Home = () => {
    return (
        <View>
            <SearchBar />
            <RepoList />
        </View>
    );
};

export default Home;
