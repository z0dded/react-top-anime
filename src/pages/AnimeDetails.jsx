import React, { useState, useRef, useEffect } from "react";
import "../assets/css/AnimeDetails.css";
import { useLocation, useParams } from "react-router-dom";
import { useAPI } from "../context/APIcontext";
import { useFilteredAnime } from "../context/FilteredAnimeContext";

export const AnimeDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const { fullAnimeList } = useAPI();
  const {
    completedAnime,
    setCompletedAnime,
    watchingAnime,
    setWatchingAnime,
    planToWatchAnime,
    setPlanToWatchAnime,
  } = useFilteredAnime();

  const [readMore, setReadMore] = useState(false);
  const [showAnimeModal, setShowAnimeModal] = useState(false);
  const [disableButton, setDisableButton] = useState();
  const selectRef = useRef(null);

  const shortSynopsis = state.synopsis.split(" ", 125).join(" ");
  const currentAnime = fullAnimeList.find(el => el.mal_id == id);

  const changeReadMore = () => {
    setReadMore(!readMore);
  };

  const handleAdd = () => {
    switch (selectRef.current.value) {
      case "completed":
        setCompletedAnime([...completedAnime, currentAnime]);
        setShowAnimeModal(!showAnimeModal);
        break;
      case "watching":
        setWatchingAnime([...watchingAnime, currentAnime]);
        setShowAnimeModal(!showAnimeModal);
        break;
      case "plan-to-watch":
        setPlanToWatchAnime([...planToWatchAnime, currentAnime]);
        setShowAnimeModal(!showAnimeModal);
        break;
      default:
        return;
    }
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
              className="AddToListButton"
              onClick={() => {
                setShowAnimeModal(true);
              }}
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
          <div
            className="ModalImage"
            style={{ backgroundImage: `url(${state.image})` }}
          ></div>
          <h1>{state.title}</h1>
          <select
            name="list-selection"
            defaultValue={"placeholder"}
            onChange={e => setDisableButton(e.target.value)}
            ref={selectRef}
          >
            <option value="placeholder" disabled hidden>
              -
            </option>
            <option value="completed">Completed</option>
            <option value="watching">Watching</option>
            <option value="plan-to-watch">Plan to Watch</option>
          </select>
          <div className="ModalButtons">
            <button
              className="CancelButton"
              onClick={() => setShowAnimeModal(!showAnimeModal)}
            >
              Cancel
            </button>
            <button
              className="AddButton"
              disabled={!disableButton}
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
