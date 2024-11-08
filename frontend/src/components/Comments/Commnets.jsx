import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Commnets.css";

import person from "../../assets/person.svg";

const Comments = ({ lectureId }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const [replyText, setReplyText] = useState({});
  const [replyingTo, setReplyingTo] = useState(null);

  const fetchComments = async () => {
    const response = await axios.get(
      `http://localhost:5000/comments/${lectureId}`
    );

    const commentsWithReplies = response.data.map((comment) => ({
      ...comment,
      replies: [],
    }));
    setComments(commentsWithReplies);
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

  const handleReplySubmit = async (e, commentId) => {
    e.preventDefault();
    if (!replyText[commentId]) return;

    const response = await axios.post(
      `http://localhost:5000/comments/${commentId}/reply`,
      { text: replyText[commentId] }
    );

    setComments((prevComments) => {
      return prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...(comment.replies || []), response.data] }
          : comment
      );
    });

    setReplyText((prev) => ({ ...prev, [commentId]: "" }));
    setReplyingTo(null);
  };

  useEffect(() => {
    fetchComments();
  }, [lectureId]);

  return (
    <div className="comm-container">
      <h1>Комментарии</h1>

      <form onSubmit={handleSubmit} className="comm-form">
        <textarea
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Напишите комментарий"
          required
          rows={10}
        />
        <button type="submit">Отправить</button>
      </form>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <div className="comment">
              <img src={person} alt="" />
              <h4>Гость</h4>
              <p>{comment.text}</p>
              {/* <button
                className="answ-btn"
                onClick={() =>
                  setReplyingTo(replyingTo === comment.id ? null : comment.id)
                }
              >
                Ответить
              </button> */}

              {/* {replyingTo === comment.id && (
                <form
                  onSubmit={(e) => handleReplySubmit(e, comment.id)}
                  className="comm-form"
                >
                  <textarea
                    type="text"
                    value={replyText[comment.id] || ""}
                    onChange={(e) =>
                      setReplyText((prev) => ({
                        ...prev,
                        [comment.id]: e.target.value,
                      }))
                    }
                    placeholder="Напишите ответ"
                    required
                    rows={5}
                  />
                  <button type="submit">Отправить</button>
                </form>
              )} */}
            </div>

            {/* {comment.replies && (
              <ul style={{ paddingLeft: "20px" }}>
                {comment.replies.map((reply) => (
                  <li key={reply.id}>
                    <div className="comment">
                      <img src={person} alt="" className="" />
                      <h4>Гость</h4>
                      <p>{reply.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Comments;
