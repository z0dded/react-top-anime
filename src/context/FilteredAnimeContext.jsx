import React, { useContext, useState, createContext } from "react";

const FilteredAnime = createContext();

export function FilteredAnimeProvider({ children }) {
  const [completedAnime, setCompletedAnime] = useState([]);
  const [watchingAnime, setWatchingAnime] = useState([]);
  const [planToWatchAnime, setPlanToWatchAnime] = useState([]);

  return (
    <FilteredAnime.Provider
      value={{
        completedAnime,
        setCompletedAnime,
        watchingAnime,
        setWatchingAnime,
        planToWatchAnime,
        setPlanToWatchAnime,
      }}
    >
      {children}
    </FilteredAnime.Provider>
  );
}

export function useFilteredAnime() {
  const context = useContext(FilteredAnime);
  return context;
}
