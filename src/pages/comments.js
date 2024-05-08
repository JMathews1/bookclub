import React, { useEffect, useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/getComments')
      .then(response => response.json())
      .then(data => {
        setComments(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch comments:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Comments on the Book</h1>
      {isLoading ? <p>Loading comments...</p> : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.title}</strong>
              <p>{comment.comment}</p>
              <small>{new Date(comment.timestamp).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsPage;
