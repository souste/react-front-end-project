import NavBar from "./NavBar";
import SingleReview from "./SingleReview";
import { getReviews } from "../api";
import { useEffect, useState } from "react";
import Button from "./Button";
import "../App.css";

function Contents() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p>...page is loading</p>
  ) : (
    <div>
      <NavBar />

      <ul className="reviewBox">
        {reviews.map((review) => {
          return (
            <li className="smallReviewBox" key={review.review_id}>
              <h3>Game: {review.title}</h3>
              <p>Category: {review.category}</p>
              <img src={review.review_img_url} alt={review.title} />
              <p>Designer: {review.designer}</p>
              <p>Votes: {review.votes}</p>
              <Button reviewID={review.review_id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Contents;

// pass this info down to Reviews when it works!!  (do it all in one place for now)
