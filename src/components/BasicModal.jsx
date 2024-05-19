/* eslint-disable react/prop-types */
import * as React from "react";
import MuiButton from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Box from "@mui/material/Box";
import Button from "./Button";

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

export default function BasicModal({ needButton }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {needButton ? (
        <Button onClick={handleOpen}>Sign Up</Button>
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
