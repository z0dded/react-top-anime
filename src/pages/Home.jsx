import React from "react";
import "../assets/css/Home.css";
import { useState, useEffect } from "react";
import { AnimeCart } from "../components/AnimeCart";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useAPI } from "../context/APIcontext";

export const Home = ({ data }) => {
  const { animeList } = useAPI();

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
