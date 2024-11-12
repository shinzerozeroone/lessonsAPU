import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Commnets.css";

import person from "../../assets/person.svg";

const Comments = ({ lectureId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyToCommentId, setReplyToCommentId] = useState(null);

  const fetchComment = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/comments/${lectureId}`);
      setComments(response.data);
    } catch (error) {
      console.error('Хьюстон, у нас проблемы, и большие...:');
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!newComment) {
      alert('Введите комментарий!');
      return;
    }

    try {
      await axios.post(`http://localhost:5000/comment/${lectureId}`, { text: newComment });
      setNewComment('');
      fetchComment();
    } catch (error) {
      console.error('Снова проблемы : ');
    }
  };

  const handleReply = async (e) => {
    e.preventDefault();
    if (!replyText) {
      alert('Введите ответ!');
      return;
    }

    try {
      await axios.post(`http://localhost:5000/comment/${lectureId}`, { text: replyText, parent_id: replyToCommentId });
      setReplyText('');
      setReplyToCommentId(null);
      fetchComment();
    } catch (error) {
      console.error('Ошибка при добавлении ответа:', error);
    }
  };

  useEffect(() => {
    fetchComment();
  }, [lectureId]);

  const renderComments = (comments) => {
    return comments.map((comment) => (
      <li key={comment.id}>
        <div className="comment">
          <img src={person} alt="Гость" />
          <h4>Гость</h4>
          <p>{comment.text}</p>
          <button className="answ-btn" onClick={() => { setReplyToCommentId(comment.id); }}>Ответить</button>
          {replyToCommentId === comment.id && (
            <form onSubmit={handleReply}>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Напишите ответ"
                required
                rows={3}
              />
              <button type="submit">Отправить</button>
            </form>
          )}
          {comment.replies && comment.replies.length > 0 && (
            <ul>
              {renderComments(comment.replies)}
            </ul>
          )}
        </div>
      </li>
    ));
  };

  return (
    <div className="comm-container">
      <h1>Комментарии</h1>

      <form className="comm-form" onSubmit={handleAddComment}>
        <textarea
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Напишите комментарий"
          required
          rows={10}
        />
        <button type="submit">Отправить</button>
      </form>

      <ul>
        {renderComments(comments)}
      </ul>
    </div>
  );
};

export default Comments;