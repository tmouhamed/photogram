import React from 'react';

class Comment extends React.Component {
    renderComment(comment, index) {
        return (
            <div className="comment" key={index}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    }

    render() {
        return (
            <div className="comment">
                {this.props.postComment.map(this.renderComment)}
            </div>
        )
    }
}
export default Comment;