import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../api";
import Comments from "./Comments";
import "../App.css";
import Button2 from "./Button2";

import { patchVote } from "../api";

function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getReviewById(review_id).then((singleReview) => {
      setSingleReview(singleReview);
      setLoading(false);
    });
  }, [review_id]);

  const handleLikeVote = (review_id) => {
    if (votes === 0) {
      setVotes(1);
      patchVote(review_id).then((review) => {
        if (singleReview.review_id === review_id) {
          return { ...review, votes: singleReview.votes + 1 };
        }
        return review;
      });
    }
  };

  const handleDislikeVote = (review_id) => {
    if (votes === 0) {
      setVotes(1);
      patchVote(review_id).then((review) => {
        if (singleReview.review_id === review_id) {
          return { ...review, votes: singleReview.votes - 1 };
        }
        return review;
      });
    }
  };

  return loading ? (
    <p>...page is loading</p>
  ) : (
    <div>
      <Button2 />
      <ul className="singleReviewBox">
        <li className="singleReviewInfoBox">
          <h1>{singleReview.title}</h1>

          <p>Category: {singleReview.category}</p>
          <img src={singleReview.review_img_url} alt={singleReview.title} />
          <h3>Description:</h3>
          <p>{singleReview.review_body}</p>
          <p>Owner: {singleReview.owner}</p>
          <p>Designer: {singleReview.designer}</p>
          <p>Created At: {singleReview.created_at}</p>
          <div>
            <button
              onClick={() => {
                handleLikeVote(singleReview.review_id);
              }}
            >
              Like
            </button>
            <button
              onCLick={() => {
                handleDislikeVote(singleReview.review_id);
              }}
            >
              Dislike
            </button>

            <p>Votes: {singleReview.votes + votes}</p>
          </div>
        </li>

        <Comments />
      </ul>
    </div>
  );
}

export default SingleReview;
