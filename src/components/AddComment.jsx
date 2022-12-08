import { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import { postComment } from "../api";

function AddComment({ setComments, review_id }) {
  const [newComment, setNewComment] = useState("");

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(review_id, newComment)
      .then((commentsApi) => {
        setNewComment("");
        setComments((currComments) => {
          const newComments = [...currComments];
          newComments.unshift(commentsApi);
          return newComments;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add a Comment</label>
      <textarea
        id="newComment"
        value={newComment}
        onChange={handleChange}
      ></textarea>
      <button>Add</button>
    </form>
  );
}

export default AddComment;
