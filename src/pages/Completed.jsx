import React from "react";
import "../assets/scss/FilteredList.scss";
import { AnimeCart } from "../components/AnimeCart";
import { useFilteredAnime } from "../context/FilteredAnimeContext";
import { Link } from "react-router-dom";

export const Completed = () => {
  const { completedAnime } = useFilteredAnime();
  const uniqueAnimeList = [...new Set(completedAnime)];

  return (
    <div className="FilteredList">
      <h1>Completed</h1>
      <ul>
        {uniqueAnimeList.map(anime => (
          <li key={anime.mal_id}>
            <Link
              to={`/anime/${anime.mal_id}`}
              state={{
                title: anime.title,
                image: anime.images.jpg.large_image_url,
                synopsis: anime.synopsis,
              }}
              className="DetailsLink"
            >
              <AnimeCart
                title={anime.title}
                image={anime.images.jpg.large_image_url}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
