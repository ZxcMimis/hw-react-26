import { useState, useEffect } from "react";
import { getMovies } from "../../Api/GetMovies";
import { Link } from "react-router-dom";

export const Movies = () => {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const changeKeyword = (e) => {
    e.preventDefault();
    setKeyword(e.currentTarget.elements.search.value);
    e.currentTarget.reset()
    
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await getMovies(keyword);
        setData(res.results);
      } catch (error) {
        console.log(error);
      }
    })();
    console.log(data)

  }, [keyword])
//   const changeData = () => {
//     (async () => {
//       try {
//         const res = await getMovies(keyword);
//         setData(res.results);
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   };
  return (
    <div>
      <h2>Search movies</h2>
      <form onSubmit={changeKeyword}>
        <input type="text" name="search" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {data.map((element) => {
            return <li key={element.id}><Link to={`/movie/${element.id}`} state={{ film: element }}>{element.title}</Link></li>
        })}
      </ul>
    </div>
  );
};