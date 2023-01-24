import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(url);
        const res = await request.json();
        setData(res.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  return { data, error };
};
