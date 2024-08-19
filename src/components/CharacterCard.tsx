import { FunctionComponent } from "react";
import { ICharacter } from "../types";
import styled from "styled-components";

const StyledCharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 0.5em;
  border: 1px solid black;
`;

const CharacterCard: FunctionComponent<ICharacter> = ({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
}) => {
  return (
    <StyledCharacterContainer>
      <div>{`name: ${name}`}</div>
      <div>{`height: ${height}`}</div>
      <div>{`mass: ${mass}`}</div>
      <div>{`hair_color: ${hair_color}`}</div>
      <div>{`skin_color: ${skin_color}`}</div>
      <div>{`eye_color: ${eye_color}`}</div>
      <div>{`birth_year: ${birth_year}`}</div>
    </StyledCharacterContainer>
  );
};

export default CharacterCard;
