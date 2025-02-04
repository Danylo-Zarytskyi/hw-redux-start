const initialState = {
    lastAction: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLUS':
            return { lastAction: 'PLUS'};
        case 'MINUS':
            return { lastAction: 'MINUS'};
        default:
            return state;
    }
}

export default reducer;