import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeComment } from '../../action/post';
import Moment from 'react-moment';

const CommentItem = ({ removeComment, auth, postId, comment: { user, name, date, avatar, text, _id } }) => {
  return (
    <div class="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img
            class="round-img"
            src={avatar}
            alt=""
          />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p class="my-1">{text}</p>
        <p class="post-date">
          Posted on <Moment format="YYYY-MM-DD">{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <button onClick={() => removeComment(postId, _id)} type="button" class="btn btn-danger">
            <i class="fas fa-times"></i>
          </button>)}
      </div>
    </div>
  )
}

CommentItem.propTypes = {
  removeComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.number,
  comment: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { removeComment })(CommentItem);
