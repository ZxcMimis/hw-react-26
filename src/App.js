import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { Movies } from "./Components/Movies/Movies";
import { Movie } from "./Components/Movie/Movie";
import { Cast } from "./Components/Movie/Cast/Cast";
import { Rewiews } from "./Components/Movie/Rewiews/Rewiews";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/movie/:id/rewiews" element={<Rewiews />} />
        <Route path="/movie/:id/cast" element={<Cast />} />
      </Routes>
    </div>
  );
}

export default App;