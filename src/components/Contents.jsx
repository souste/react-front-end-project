import NavBar from "./NavBar";
import Reviews from "./Reviews";
import { getReviews } from "../api";
import { useEffect, useState } from "react";
import "../App.css";

function Contents() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Reviews />
      <ul className="reviewBox">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="reviewBox">
              <h3>{review.title}</h3>
              <p>Category: {review.category}</p>
              <img src={review.review_img_url} alt={review.title} />
              <p>Designer: {review.designer}</p>
              <p>Votes: {review.votes}</p>
              <button>Open</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Contents;

// pass this info down to Reviews when it works!!  (do it all in one place for now)
