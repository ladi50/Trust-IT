import { useCallback } from "react";

export const useFetch = () => {
  const fetchHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/nodejs/node/pulls?state=all"
      );

      if (!response.ok) {
        throw new Error("Fetch failed!");
      }

      const res = await response.json();

      return res;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { fetchHandler };
};
