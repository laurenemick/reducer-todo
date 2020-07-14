export const initialState = [
    {
        item: 'learn about reducers',
        completed: false,
        id: 3892987589
    }
];

export const reducer = (state, action) => {
    switch (action.type) {
        case "REMOVE_COMPLETED":
            return state.filter(task => !task.completed);
        case "TOGGLE_TASK": 
        // console.log(action.payload)
            return (
                state.map(item => {
                return item.id === action.payload ? {...item, completed: !item.completed }: item
            })
            ) 
        case "ADD_TASK": {
            return [
                ...state, 
                {
                    item: action.payload,
                    completed: false,
                    id:  new Date()
                }
            ]
        }
        default:
            return state, initialState;
    }
};

// export const reducer = (state, action) => {
//     switch (action.type) {

//     case "TOGGLE_TASK":
//         if (state.id === action.payload) {
//                 return {
//                     ...task,
//                     completed: !task.completed
//                 };
//                 } else {
//                     return task;
//                 }         
//         };
//     }
// };