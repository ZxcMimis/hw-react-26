import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrending } from "../../Api/GetTrending";

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getTrending();
        setFilms(res.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => console.log(films), [films]);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {films.map((film) => {
          return (
            <li key={film.id}>
              <Link to={`/movie/${film.id}`} state={{ film: film }}>{film.title}</Link>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};