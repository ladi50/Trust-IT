import { useCallback, useState } from "react";
import { useFetch } from "./useFetch";

export const usePR = () => {
  const [prs, setPrs] = useState([]);
  const [filteredPrs, setFilteredPrs] = useState([]);
  const { fetchHandler } = useFetch();

  const getPrs = useCallback(() => {
    fetchHandler()
      .then((res) => {
        setPrs(res);
        setFilteredPrs(res);
      })
      .catch((err) => console.log(err));
  }, [fetchHandler]);

  const filterPrs = useCallback(
    (data) => {
      let newPrs = [...prs];

      if (data.status.length > 0 && data.status !== "all") {
        newPrs = newPrs.filter((item) => item.state === data.status);
      }

      if (data.status.length > 0 && data.status === "all") {
        newPrs = [...prs];
      }

      if (data.labels.length > 0) {
        newPrs = newPrs.filter((item) => {
          let contains = null;

          for (const i of item.labels) {
            if (
              i.description.toLowerCase().includes(data.labels.toLowerCase())
            ) {
              contains = true;

              break;
            }
          }

          return contains;
        });
      }

      setFilteredPrs(newPrs);
    },
    [prs]
  );

  const compare = (a, b, e, dir) => {
    if (!dir[e.target.id]) {
      if (a[e.target.id] < b[e.target.id]) {
        return -1;
      }
      if (a[e.target.id] > b[e.target.id]) {
        return 1;
      }
      return 0;
    } else {
      if (a[e.target.id] < b[e.target.id]) {
        return 1;
      }
      if (a[e.target.id] > b[e.target.id]) {
        return -1;
      }
      return 0;
    }
  };

  const sortPrs = useCallback(
    (e, dir) => {
      let newPrs = [...filteredPrs];

      newPrs = newPrs.sort((a, b) => compare(a, b, e, dir));

      setFilteredPrs(newPrs);
    },
    [filteredPrs]
  );

  return { prs, getPrs, filteredPrs, filterPrs, sortPrs };
};
