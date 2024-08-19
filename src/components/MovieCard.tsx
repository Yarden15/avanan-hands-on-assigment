import React, { FunctionComponent, useCallback, useState } from "react";
import Card from "@mui/material/Card";
import { ICharacter, IMovie } from "../types";
import styled from "styled-components";
import CharacterModal from "./CharacterModal";
import { Button } from "@mui/material";
import axios from "axios";

type IProps = { movie: IMovie };

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  align-items: flex-start;
  text-align: left;

  div {
    margin-top: 0.5em;
  }

  .title {
    margin: auto;
  }
`;

const MovieCard: FunctionComponent<IProps> = ({ movie }) => {
  //   const [showMore, setShowMore] = useState<bool>(false);
  const [showCharaters, setShowCharaters] = useState<boolean>(false);
  const [characters, setCharacters] = useState<ICharacter[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCharacters = useCallback(async () => {
    setIsLoading(true);
    const characterDetails = await Promise.all(
      movie.characters.map(async (char) => {
        const response = await axios.get(char);
        return response.data;
      })
    );
    setCharacters(characterDetails);
    setIsLoading(false);
  }, []);


  return (
    <Card sx={{ width: "40" }}>
      <StyledCardContent>
        <div className="title">{movie.title}</div>
        <div>{`Release date: ${movie.release_date}`}</div>
        <div>{`Opening crawl: ${movie.opening_crawl}`}</div>
        <div>{`Director: ${movie.director}`}</div>
        <div>{`Producer: ${movie.producer}`}</div>
        <Button variant="text" onClick={() => setShowCharaters(true)}>
          Characters
        </Button>
        <CharacterModal
          isOpen={showCharaters}
          handleClose={() => setShowCharaters(false)}
          characters={characters}
          getCharacters={() => fetchCharacters()}
          isLoading={isLoading}
        />
      </StyledCardContent>
    </Card>
  );
};

export default MovieCard;
