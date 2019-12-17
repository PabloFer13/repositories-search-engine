import actions from './actions';

const initialState = { repos: [] };

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case actions.setList.type:
            return { ...state, repos: [...payload] };
        default:
            return state;
    }
}

export default reducer;
