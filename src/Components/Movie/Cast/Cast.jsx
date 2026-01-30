import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Movie } from "../Movie";

import { getCast } from "../../../Api/GetCast";

export const Cast = () => {
  const location = useLocation();
  const [cast, setCast] = useState([]);
  const film = location.state?.film;

  useEffect(() => {
    (async () => {
      try {
        const res = await getCast(film.id);
        setCast(res.cast);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => console.log(cast), [cast]);

  // const percentRating = averageRating

  return (
    <div>
      <Movie />
      <ul>
        {cast.map((actor) => {
            return <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}.jpg`}
              alt=""
            />
            <p>Name: {actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
          
        })}
      </ul>
    </div>
  );
};