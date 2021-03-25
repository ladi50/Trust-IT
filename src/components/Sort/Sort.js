import React, { useContext, useState } from "react";
import { AppContext } from "../../context/context";

import "./Sort.css";

const Sort = () => {
  const [dir, setDir] = useState({
    number: false,
    title: false
  });

  const { sortPrs } = useContext(AppContext);

  const sortHandler = (e) => {
    sortPrs(e, dir);
    setDir((prevState) => ({
      ...prevState,
      [e.target.id]: !prevState[e.target.id]
    }));
  };

  return (
    <div className="sort">
      <button type="button" id="number" onClick={sortHandler}>
        Sort by PR number
      </button>
      <button type="button" id="title" onClick={sortHandler}>
        Sort by title
      </button>
    </div>
  );
};

export default Sort;
