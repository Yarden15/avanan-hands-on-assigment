import { Box, Modal } from "@mui/material";
import { FunctionComponent, useEffect } from "react";
import { ICharacter } from "../types";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";


type IProps = {
  characters: ICharacter[] | null;
  isOpen: boolean;
  handleClose: () => void;
  getCharacters: () => Promise<void>;
  isLoading: boolean;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '60%',
  height: '60%',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: 'auto'
};

const ModalBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  overflow-y: auto;
`;

const CharacterModal: FunctionComponent<IProps> = ({
  characters,
  isOpen,
  handleClose,
  getCharacters,
  isLoading,
}) => {
  useEffect(() => {
    if (characters === null) getCharacters();
  }, []);
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box sx={style}>
        <ModalBody>
          {isLoading
            ? "loading"
            : characters !== null
            ? characters.map((c) => <CharacterCard {...c} />)
            : null}
        </ModalBody>
      </Box>
    </Modal>
  );
};

export default CharacterModal;
