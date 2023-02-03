import React, { useState } from "react";
import "../assets/css/AnimeDetails.css";
import { useLocation, useParams } from "react-router-dom";
import { useAPI } from "../context/APIcontext";

export const AnimeDetails = () => {
  const { state } = useLocation();
  const shortSynopsis = state.synopsis.split(" ", 125).join(" ");
  const [readMore, setReadMore] = useState(false);
  const [showAnimeModal, setShowAnimeModal] = useState(false);
  const { id } = useParams();
  const { fullAnimeList } = useAPI();
  const findArr = fullAnimeList.find(el => el.mal_id == id);

  const changeReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="AnimeDetails">
      <div className="AnimeDetailsCard">
        <div className="AnimeDetailsImageContainer">
          <div
            className="AnimeDetailsImage"
            style={{ backgroundImage: `url(${state.image})` }}
          ></div>
        </div>
        <div className="AnimeDetailsCardText">
          <div className="AnimeDetailsInfo">
            <h1>{state.title}</h1>
            <p>
              {readMore ? state.synopsis : shortSynopsis}
              <button className="ReadMoreButton" onClick={changeReadMore}>
                {readMore ? "show less" : "...read more"}
              </button>
            </p>
          </div>
          <div className="AddToListContainer">
            <button
              onClick={() => console.log(findArr)}
              className="AddToListButton"
            >
              Console
            </button>
            <button
              className="AddToListButton"
              onClick={() => setShowAnimeModal(true)}
            >
              Add to List
            </button>
          </div>
        </div>
      </div>
      <div
        className={showAnimeModal ? "AddAnimeModal" : "AddAnimeModalInvisible"}
      >
        <div className="AddAnimeModalCard">
          <h1>Add anime to the list</h1>
          <p>add it lol</p>
        </div>
      </div>
    </div>
  );
};
