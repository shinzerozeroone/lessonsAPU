import React, { useState, useEffect } from "react";
import axios from "axios";

const Comments = ({ lectureId }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const fetchComments = async () => {
    const response = await axios.get(
      `http://localhost:5000/comments/${lectureId}`
    );
    setComments(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;

    const response = await axios.post(`http://localhost:5000/comments`, {
      text,
      lectureId,
    });
    setComments([response.data, ...comments]);
    setText("");
  };

  useEffect(() => {
    fetchComments();
  }, [lectureId]);

  return (
    <div>
      <h1>Комментарии</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Напишите комментарий"
        />
        <button type="submit">Отправить</button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
