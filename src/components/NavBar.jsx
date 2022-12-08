import { getCategories } from "../api";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <nav className="navBar">
      <ul>
        {categories.map((category) => {
          return <Link>{category.slug}</Link>;
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
