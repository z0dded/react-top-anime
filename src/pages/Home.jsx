import React from "react";
import "../assets/css/Home.css";
import { AnimeCart } from "../components/AnimeCart";
import { Link } from "react-router-dom";
import { useAPI } from "../context/APIcontext";

export const Home = () => {
  const { fullAnimeList } = useAPI();

  return (
    <div className="Home">
      <h1>Top 50 Anime</h1>
      <ul>
        {fullAnimeList.map(anime => (
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
