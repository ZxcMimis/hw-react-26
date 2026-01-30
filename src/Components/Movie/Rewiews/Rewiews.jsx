import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Movie } from "../Movie";
import { Link } from "react-router-dom";
import { getRewiews } from "../../../Api/GetRewiews";

export const Rewiews = () => {
  const location = useLocation();
  const [rewiews, setRewiews] = useState([]);
  const film = location.state?.film;

  useEffect(() => {
    (async () => {
      try {
        const res = await getRewiews(film.id);
        setRewiews(res.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => console.log(rewiews), [rewiews]);

  // const percentRating = averageRating

  return (
    <div>
      <Movie />
      {rewiews.length > 0 ? (<ul>
        {rewiews.map((rewiew) => {
            return <li key={rewiew.id}>
            
            <p>Name: {rewiew.author}</p>
            <p>Character: {rewiew.content}</p>
          </li>
          
        })}
      </ul>) : (<p>We have any rewiews on this film</p>)}
      
    </div>
  );
};