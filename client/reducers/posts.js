function posts(state = [], action) {
    console.log("this post will change");
    console.log(state, action);
    return state;
}
export default posts;