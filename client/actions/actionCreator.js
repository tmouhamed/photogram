export function increment(){
    return {
        type: 'INCREAMENT_LIKES',
        index
    }
}

export function addCOmment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        comment,
        author
    }
}

export function deleteComment(postId, index) {
    return {
        type: 'DELETE_COMMENT',
        postId, 
        index
    }
}