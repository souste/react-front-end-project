import { Link } from "react-router-dom";
import SingleReview from "./SingleReview";

function Button({ reviewID }) {
  const handleClick = (click) => {};

  return (
    <Link to={`/reviews/${reviewID}`}>
      <button onClick={handleClick}>Open</button>
    </Link>
  );
}

export default Button;
