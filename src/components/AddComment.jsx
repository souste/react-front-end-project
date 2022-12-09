import { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import { postComment } from "../api";

function AddComment({ setComments, review_id }) {
  const [newComment, setNewComment] = useState("");
  const [disable, setDisable] = useState(0);
  const isTextAreaDisabled = newComment.length === 0;

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(review_id, newComment)
      .then((commentsApi) => {
        setNewComment("Your comment has been successfully submitted!");
        setDisable(true);
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
    <div className="comment-flexBox">
      <p>Add comment here:</p>
      <form commentForm="comment-form" onSubmit={handleSubmit}>
        <textarea
          className="comment-box"
          id="newComment"
          value={newComment}
          onChange={handleChange}
        ></textarea>

        <button
          className="comment-button"
          disabled={isTextAreaDisabled || disable}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddComment;
