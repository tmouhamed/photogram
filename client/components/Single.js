import React from 'react';
import Photo from './Photo';
import Comment from './Comment';

class Single extends React.Component {
  render() {
    // index of the post to display
    const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    //find the actual post
    const post = this.props.posts[index];

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props}/>
        <Comment />
      </div>
    )
  }
}
export default Single;