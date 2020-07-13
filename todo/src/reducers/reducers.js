export const initialState = [
    {
        item: 'learn about reducers',
        completed: false,
        id: 32312321321
    }
];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK": {
            return {
                ...state,
                item: action.payload,
                completed: false,
                id: new Date()
            }
        }
        default:
            return state;
    }
};