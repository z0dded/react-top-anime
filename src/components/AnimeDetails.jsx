import React from "react";
import "../assets/css/AnimeDetails.css";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

export const AnimeDetails = () => {
  const { data, error } = useFetch(
    "https://api.jikan.moe/v4/top/anime?page=1&filter=bypopularity"
  );

  const { id } = useParams();

  return (
    <div className="AnimeDetails">
      <div className="AnimeDetailsCard">
        {error && <h1>error = {error}</h1>}
        {/* {data && (
          <div className="AnimeInfo">
            <h1>{data[id].title}</h1>
            <p>{data[id].synopsis}</p>
          </div>
        )} */}
        <h1>Anime ID: {id}</h1>
        <button onClick={() => console.log(data[id].title)}>console</button>
      </div>
    </div>
  );
};
