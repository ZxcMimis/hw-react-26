import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const Movie = () => {
    const location = useLocation()
    const film = location.state?.film;
    
    const releaseDate = new Date(film.release_date).getFullYear()
    const averageRating = Math.round(film.vote_average * 10)
    // const percentRating = averageRating 

    return(
        <div>
            <h1>{film.title} ({releaseDate})</h1>
            <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" />
            <p>User score: {averageRating}%</p>
            <h2>Overview</h2>
            <p>{film.overview}</p>
            <h2>Genres</h2>
            <p>Comedy Family Fantasy</p>
            <Link to={`/movie/${film.id}/cast`} state={{ film: film }}>Cast</Link>
            <Link to={`/movie/${film.id}/rewiews`} state={{ film: film }}>Rewiews</Link>
        </div>
    )
}