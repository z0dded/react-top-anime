import React from "react";
import "../assets/css/AnimeDetails.css";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useAPI } from "../context/APIcontext";

export const AnimeDetails = () => {
  const { id } = useParams();
  const { animeList } = useAPI();

  return (
    <div className="AnimeDetails">
      <div className="AnimeDetailsCard">
        <div
          className="AnimeDetailsImage"
          style={{
            backgroundImage: `url(${animeList[id].images.jpg.large_image_url})`,
          }}
        ></div>
        <h1>{animeList[id].title}</h1>
        <p>{animeList[id].synopsis}</p>
        <button
          onClick={() => console.log(animeList[id].images.jpg.large_image_url)}
        >
          console
        </button>
      </div>
    </div>
  );
};
