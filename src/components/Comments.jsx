import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentByReviewId } from "../api";
import "../App.css";

function Comments() {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCommentByReviewId(review_id).then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, [review_id]);

  return loading ? (
    <p>...page is loading</p>
  ) : (
    <ul className="commentBox">
      {comments.map((comment) => {
        return (
          <div>
            <ul>
              <li>
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
