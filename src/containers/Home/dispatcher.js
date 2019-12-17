import actions from './actions';

const dispatcher = dispatch => ({
    onGetList: name => dispatch(actions.getList(name)),
});

export default dispatcher;
