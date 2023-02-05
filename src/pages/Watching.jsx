import React from "react";
import "../assets/css/Watching.css";
import { AnimeCart } from "../components/AnimeCart";
import { useFilteredAnime } from "../context/FilteredAnimeContext";
import { Link } from "react-router-dom";

export const Watching = () => {
  const { watchingAnime } = useFilteredAnime();
  const uniqueAnimeList = [...new Set(watchingAnime)];

  return (
    <div className="Watching">
      <h1>Watching</h1>
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
