import React, { FunctionComponent, useState } from "react";
import { StyledHomePageContainer } from "./styled";
import MovieCard from "../components/MovieCard";
import { IMovie } from "../types";
import { TextField } from "@mui/material";

type IProps = { movies: IMovie[] };

const HomePage: FunctionComponent<IProps> = ({ movies }) => {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <TextField
        label="Search Movies"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{marginBottom: '1em'}}
      />
      <StyledHomePageContainer>
        {filteredMovies.map((m) => (
          <MovieCard movie={m} />
        ))}
      </StyledHomePageContainer>
    </div>
  );
};
export default HomePage;
