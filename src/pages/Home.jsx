import { useState } from "react";
import "../assets/scss/Home.scss";
import { AnimeCart } from "../components/AnimeCart";
import { Link } from "react-router-dom";
import { useAPI } from "../context/APIcontext";

export const Home = () => {
  const { fullAnimeList } = useAPI();
  const [search, setSearch] = useState();

  return (
    <div className="Home">
      <h1>Top 50 Anime</h1>
      <input
        type="text"
        placeholder="Search your anime"
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {search
          ? fullAnimeList
              .filter(anime => anime.title.toLowerCase().includes(search))
              .map(anime => (
                <li key={anime.mal_id}>
                  <Link to={`/anime/${anime.mal_id}`} className="DetailsLink">
                    <AnimeCart
                      title={anime.title}
                      image={anime.images.jpg.large_image_url}
                    />
                  </Link>
                </li>
              ))
          : fullAnimeList.map(anime => (
              <li key={anime.mal_id}>
                <Link to={`/anime/${anime.mal_id}`} className="DetailsLink">
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
