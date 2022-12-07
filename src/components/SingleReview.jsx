import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../api";
import Comments from "./Comments";
import "../App.css";

function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviewById(review_id).then((singleReview) => {
      setSingleReview(singleReview);
      setLoading(false);
    });
  }, [review_id]);

  return loading ? (
    <p>...page is loading</p>
  ) : (
    <div>
      <ul>
        <li>
          <h3>{singleReview.title}</h3>
          <p>Category: {singleReview.category}</p>
          <img src={singleReview.review_img_url} alt={singleReview.title} />
          <p>Description:</p>
          <p>{singleReview.review_body}</p>
          <p>Owner: {singleReview.owner}</p>
          <p>Designer: {singleReview.designer}</p>
          <p>Created At: {singleReview.created_at}</p>
          <p>Votes: {singleReview.votes}</p>
        </li>
        <h3>Comments</h3>
        <Comments />
      </ul>
    </div>
  );
}

export default SingleReview;
