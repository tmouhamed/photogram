function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            ...state,
            // overwrtie this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            // return the new state with the new comment
            return [
                ...state, {
                    user: action.author,
                    text: action.comment
                }]

        case 'DELETE_COMMENT':
            return [
                // from the start to the one we want to delete 
                ...state.slice(0, action.index),
                // after the deleted one to the end
                ...state.slice(action.index + 1),
            ];

        default:
            return state;
    }
    return state;
}
export default comments;