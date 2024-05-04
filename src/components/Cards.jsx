import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "styled-components";

const P = styled.p`
  color: var(--color-primary-blue);
  font-weight: 700;
  font-size: 20px;
`;

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const handleRowClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        onClick={handleRowClick}
        style={{ cursor: "pointer" }}
      >
        <TableCell>
          <IconButton size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <P>{row.question}</P>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0, margin: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table
                size="small"
                aria-label="answers"
                style={{ borderCollapse: "collapse" }}
              >
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {row.answer}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
};

const questionsAndAnswers = [
  {
    question: "What types of vehicles do you offer?",
    answer:
      "We offer a variety of vehicles including sedans, SUVs, trucks, and vans.",
  },
  {
    question: "Do you have options for long-term rentals?",
    answer:
      "Yes, we offer long-term rental options with flexible terms and competitive rates.",
  },
  {
    question:
      "What are your rental rates and are there any discounts available?",
    answer:
      "Our rental rates vary depending on the type of vehicle and rental duration. We also offer discounts for loyal customers and advance bookings.",
  },
  {
    question: "What is your policy on insurance and damages?",
    answer:
      "We provide insurance coverage for our vehicles, and customers can opt for additional coverage for peace of mind. Any damages incurred during the rental period are subject to assessment and repair charges.",
  },
  {
    question: "Are there any additional fees or charges I should be aware of?",
    answer:
      "In addition to the rental fee, there may be charges for optional extras such as GPS navigation, child seats, or additional drivers. We also have fees for late returns or cleaning if the vehicle is returned excessively dirty.",
  },
];

export default function Cards() {
  return (
    <TableContainer
      component={Paper}
      style={{ width: "700px", marginTop: "150px" }}
    >
      <Table aria-label="FAQ table">
        {questionsAndAnswers.map((qa, index) => (
          <Row key={index} row={qa} />
        ))}
      </Table>
    </TableContainer>
  );
}
