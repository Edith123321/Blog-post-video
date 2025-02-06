import React, { useState } from 'react';

const CommentSection = ({ blogId, comments }) => {
  const [newComment, setNewComment] = useState({ author: '', text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedComments = [...comments, { id: comments.length + 1, ...newComment }];

    fetch(`http://localhost:3001/blogs/${blogId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comments: updatedComments }),
    })
      .then((res) => res.json())
      .then(() => {
        setNewComment({ author: '', text: '' });
        window.location.reload();
      });
  };

  return (
    <div className='comment-section'>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p><strong>{comment.author}</strong>: {comment.text}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={newComment.author}
          onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
          required
        />
        <input
          placeholder="Your Comment"
          value={newComment.text}
          onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
          required
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentSection;