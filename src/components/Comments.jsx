import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentByReviewId } from "../api";
import "../App.css";
import AddComment from "./AddComment";

function Comments() {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCommentByReviewId(review_id)
      .then((comments) => {
        setComments(comments);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, [review_id]);

  if (error) return <p>No comments found</p>;
  if (loading) return <p>...page is loading</p>;
  return (
    <ul className="commentsBox">
      <h3>Comments:</h3>
      <AddComment setComments={setComments} review_id={review_id} />
      {comments.map((comment) => {
        return (
          <div>
            <ul>
              <li className="indCommentBox">
                <p>Comment: {comment.body}</p>
                <p>by Author {comment.author}</p>
                <p>Votes: {comment.votes}</p>
              </li>
            </ul>
          </div>
        );
      })}
    </ul>
  );
}

export default Comments;
