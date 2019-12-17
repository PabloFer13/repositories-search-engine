import axios from 'axios';

const API_URL = 'https://api.github.com';

axios.interceptors.response.use(
    res => {
        console.log('http log res', res);
        return res;
    },
    err => {
        console.log('http err', err);
        return Promise.reject(err);
    },
);

const get = (url, params = {}) => axios.get(url, { params });

export default {
    repository: {
        list: name => get(`/search/repositories?q=${name}`),
    },
};
