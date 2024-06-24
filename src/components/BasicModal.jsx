/* eslint-disable react/prop-types */
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { cloneElement, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
};

export default function BasicModal({ button, children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonWithHandler = button
    ? cloneElement(button, { onClick: handleOpen })
    : null;

  return (
    <div>
      {buttonWithHandler}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{cloneElement(children, { handleClose })}</Box>
      </Modal>
    </div>
  );
}
