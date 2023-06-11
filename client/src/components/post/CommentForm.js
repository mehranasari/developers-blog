import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../action/post';

const CommentForm = ({ addComment, postId }) => {

  const [text, setText] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    addComment(postId, { text });
    setText('');
  }

  return (
    <div class="post-form">
      <div class="bg-primary p">
        <h3>Leave A Comment</h3>
      </div>
      <form onSubmit={e => onSubmit(e)} class="form my-1">
        <textarea value={text} onChange={e => setText(e.target.value)} name="text" cols="30" rows="5" placeholder="Comment on this post" required></textarea>
        <input type="submit" class="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  )
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  postId: PropTypes.number,

}

export default connect(null, { addComment })(CommentForm);
