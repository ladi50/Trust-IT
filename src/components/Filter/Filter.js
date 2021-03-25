import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../../context/context";

import "./Filter.css";

const Filter = () => {
  const [value, setValue] = useState({
    status: "",
    labels: ""
  });

  const { filterPrs } = useContext(AppContext);

  const valueHandler = (e) => {
    const { value, name } = e.target;

    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    filterPrs(value);
  }, [filterPrs, value]);
  
  return (
    <div className="filter">
      <div className="filter__div">
        <label htmlFor="status">PR Status: </label>

        <select
          name="status"
          id="status"
          value={value.status}
          onChange={valueHandler}
        >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      <div className="filter__div">
        <label htmlFor="labels">Labels: </label>

        <input
          type="text"
          name="labels"
          id="labels"
          value={value.labels}
          onChange={valueHandler}
          placeholder="Filter by label name..."
        />
      </div>
    </div>
  );
};

export default Filter;
