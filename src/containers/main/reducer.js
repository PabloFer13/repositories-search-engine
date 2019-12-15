const initialState = {};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'ACTION':
            return { ...state, attr: payload };
        default:
            return state;
    }
}

export default reducer;
