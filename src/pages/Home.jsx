import React from "react";
import "../assets/css/Home.css";
import { useState, useEffect } from "react";
import { AnimeCart } from "../components/AnimeCart";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

export const Home = () => {
  // const [animeList, setAnimeList] = useState([]);
  const [apiUrl, setApiUrl] = useState(
    "https://api.jikan.moe/v4/top/anime?page=1&filter=bypopularity"
  );

  const { data: animeList } = useFetch(apiUrl);

  return (
    <div className="Home">
      <ul>
        {animeList.map((anime, index) => (
          <li key={anime.mal_id}>
            <Link to={`/anime/${index}`} className="DetailsLink">
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
