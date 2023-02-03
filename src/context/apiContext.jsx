import React, { useContext, useState, useEffect, createContext } from "react";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [animeList, setAnimeList] = useState([]);
  const [animeListSecond, setAnimeListSecond] = useState([]);
  const [fullAnimeList, setFullAnimeList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(
        "https://api.jikan.moe/v4/top/anime?page=1&filter=bypopularity"
      );
      const res = await req.json();
      setAnimeList(res.data);

      const reqSecond = await fetch(
        "https://api.jikan.moe/v4/top/anime?page=2&filter=bypopularity"
      );
      const resSecond = await reqSecond.json();
      setAnimeListSecond(resSecond.data);

      setFullAnimeList([...res.data, ...resSecond.data]);
    }
    fetchData();
  }, []);

  return (
    <APIContext.Provider
      value={{
        animeList,
        animeListSecond,
        fullAnimeList,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  return context;
}
