import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost } from '../../action/post';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = ({ getPost, post: { post, loading }, match }) => {

  useEffect(() => {
    getPost(match.params.id);
  }, [getPost])

  return loading || post === null ? (<Spinner />) : (<Fragment>
    <Link to={'/posts'} class="btn">Back To Posts</Link>
    <PostItem post={post} showActions={false} />
    <CommentForm postId={post._id}></CommentForm>
    <div class="comments">
      {post.comments.map(comment =>
        <CommentItem postId={post._id} comment={comment}></CommentItem>
      )}
    </div>
  </Fragment>)
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getPost })(Post);
