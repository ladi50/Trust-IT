import React from "react";

import PRS from "./pages/PRS/PRS";
import { usePR } from "./hooks/usePR";
import { AppContext } from "./context/context";

import "./App.css";

const App = () => {
  const { prs, getPrs, filteredPrs, filterPrs, sortPrs } = usePR();

  const value = { prs, getPrs, filteredPrs, filterPrs, sortPrs };

  return (
    <AppContext.Provider value={value}>
      <PRS />
    </AppContext.Provider>
  );
};

export default App;
