import React, { useContext, useState, createContext } from "react";

const FilteredAnime = createContext();

export function FilteredAnimeProvider({ children }) {
  const [completedAnime, setCompletedAnime] = useState([]);
  const [planToWatchAnime, setPlanToWatchAnime] = useState([]);

  return (
    <FilteredAnime.Provider
      value={{
        completedAnime,
        setCompletedAnime,
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
