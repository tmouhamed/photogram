import React from 'react';
import Photo from './Photo';
import Comment from './Comment';

class Single extends React.Component {
  render() {
    //get the post id from the URL
    const { postId } = this.props.params;
    // index of the post to display
    const index = this.props.posts.findIndex((post) => post.code === postId);
    //find the actual post
    const post = this.props.posts[index];
    // // find the comments for this specific post and return empty array if the post has no comment
    const postComment = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props}/> 
        <Comment postComment={postComment}/>
      </div>
    )
  }
}
export default Single;