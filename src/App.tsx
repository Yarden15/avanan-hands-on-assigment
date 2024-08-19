import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import HomePage from "./containers/HomePage";
import { IMovie } from "./types";

function App() {
  const getData = async () => {
    const res = await axios.get("https://swapi.dev/api/films/");
    setMovies(res.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  const [movies, setMovies] = useState<IMovie[]>([]);
  return (
    <div>
      <HomePage movies={movies} />
    </div>
  );
}

export default App;
