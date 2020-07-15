import React from 'react';

class Comment extends React.Component {
    renderComment(comment, index) {
        return (
            <div className="comment" key={index}>
                <p>
        <strong>{`${comment.user}: `}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.deleteComment.bind(null, this.props.params.postId, index)}>&times;</button>
                </p>
            </div>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment);

        //to delete the form after submiiting
        this.refs.commentForm.reset();
    }

    render() {
        return (
            <div className="comment">
                {this.props.postComment.map(this.renderComment.bind(this))}

                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}
export default Comment;