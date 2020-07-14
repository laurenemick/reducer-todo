export const initialState = [
    {
        item: 'learn about reducers',
        completed: false,
        id: 3892987589
    }
];

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK": {
            return [
                ...initialState, 
                {
                    item: action.payload,
                    completed: false,
                    id:  new Date()
                }
            ]
        }
        default:
            return state;
    }
};