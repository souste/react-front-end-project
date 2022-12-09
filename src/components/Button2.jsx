import { Link } from "react-router-dom";
import App from "../App";

function Button2() {
  const handleClick = (click) => {};
  return (
    <Link to={"/"}>
      <button className="button">Back</button>
    </Link>
  );
}

export default Button2;
