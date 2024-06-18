/* eslint-disable react/prop-types */
import MuiButton from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Box from "@mui/material/Box";
import Button from "./Button";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
};

const StyledButton = styled(MuiButton)`
  border: 1px solid white !important;
  background-color: transparent !important;
  color: white !important;
`;

export default function BasicModal({ largeButton = false }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {largeButton ? (
        <Button onClick={handleOpen} type="secondary">
          Login / SignUp
        </Button>
      ) : (
        <StyledButton onClick={handleOpen}>Login / SignUp</StyledButton>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginForm />
        </Box>
      </Modal>
    </div>
  );
}
