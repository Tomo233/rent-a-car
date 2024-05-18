/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FilterListIcon from "@mui/icons-material/FilterList";
import FlexContainer from "./FlexContainer";
import { Divider } from "@mui/material";

const StyledButton = styled(Button)`
  color: black !important;
  text-transform: capitalize !important;
  font-size: 18px !important;
`;

const Category = styled.p`
  text-align: center;
  font-size: 20px;
  text-transform: capitalize;
`;

const StyledFilters = styled.div``;

export default function Filter({ filters }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {filters.map(([category, ...options]) => {
          return (
            <>
              <Category>{category}</Category>

              <StyledFilters>
                {options.map((option) => {
                  const { text, query } = option;
                  return (
                    <ListItem key={text} disablePadding>
                      <input type="checkbox" name="" id="" />
                      <ListItemText primary={text} />
                    </ListItem>
                  );
                })}
              </StyledFilters>
              <Divider />
            </>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <StyledButton onClick={toggleDrawer(true)}>
        <FlexContainer>
          <FilterListIcon /> <span>Filter</span>
        </FlexContainer>
      </StyledButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
