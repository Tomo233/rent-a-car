import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
};

const StyledButton = styled(Button)`
  border: 1px solid white !important;
  background-color: transparent !important;
  color: white !important;
`;

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <StyledButton onClick={handleOpen}>Login / Sign Up</StyledButton>
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
