import React from 'react';
import { Link } from 'react-router';
import { CSSTransitionGroup } from 'react-transition-group';
import comments from '../data/comments';
import posts from '../reducers/posts';

class Photo extends React.Component {
    render() {
        const { post, index, comment } = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img className="grid-photo" src={post.display_src} alt="post.caption" />
                    </Link>
                    <CSSTransitionGroup
                        transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <span key={post.likes}
                            className="likes-heart">
                            {post.likes}
                        </span>
                    </CSSTransitionGroup>
                </div>

                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button className="likes" onClick={this.props.increment.bind(null, index)}>&hearts; {post.likes}</button>
                        <Link className="button" to={`/view/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"></span><span> </span>
                                {comments[posts.code] ? comments[posts.code] : 0}
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        )
    }
}

export default Photo;