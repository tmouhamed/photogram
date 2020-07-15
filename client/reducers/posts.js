function posts(state = [], action) {
    switch (action.type) {
        
        case 'INCREMENT_LIKES':
            const index = action.index;
            return [
                ...state.slice(0, index),  //before the one we are updating
                { ...state[index], likes: state[index].likes + 1 },   //this uodate the one we are already on
                ...state.slice(index + 1)   //after the one we are updating
            ]

        // return the default state
        default:
            return state;
    }
}
export default posts;