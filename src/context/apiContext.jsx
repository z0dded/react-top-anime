import React, { useContext, useState, useEffect, createContext } from "react";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(
        "https://api.jikan.moe/v4/top/anime?page=1&filter=bypopularity"
      );
      const res = await req.json();
      setAnimeList(res.data);
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        animeList,
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
