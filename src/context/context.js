import { createContext } from "react";

export const AppContext = createContext({
  prs: [],
  filteredPrs: [],
  getPrs: () => {},
  filterPrs: () => {},
  sortPrs: () => {}
});
