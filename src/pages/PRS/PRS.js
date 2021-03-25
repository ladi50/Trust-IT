import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";

import Loader from "../../components/Loader/Loader";
import PR from "../../components/PR/PR";
import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import Sort from "../../components/Sort/Sort";

import "./PRS.css";

const PRS = () => {
  const { getPrs, filteredPrs, prs } = useContext(AppContext);

  useEffect(() => {
    getPrs();
  }, [getPrs]);

  return (
    <>
      <Filter />
      <Sort />

      <table className="prs">
        <Header />

        <tbody>
          {prs?.length === 0 ? (
            <Loader />
          ) : (
            filteredPrs.map((item) => <PR key={item.id} item={item} />)
          )}
        </tbody>
      </table>
    </>
  );
};

export default PRS;
