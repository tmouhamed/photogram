export function increment(index){
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        comment,
        author
    }
}

export function deleteComment(postId, index) {
    console.log("removing this comment");
    return {
        type: 'DELETE_COMMENT',
        postId, 
        index
    }
}