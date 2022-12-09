import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import { Routes, Route, Link } from "react-router-dom";
import SingleReview from "./components/SingleReview";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("jessjelly");
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header user={user} />
              <Reviews />
            </>
          }
        />
        <Route path={`/reviews/:review_id`} element={<SingleReview />} />
      </Routes>
    </div>
  );
}

export default App;
