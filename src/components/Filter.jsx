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

const StyledFilters = styled.div`
  padding: 13px 0;
`;
const StyledCheckbox = styled.input`
  width: 50px;
  height: 20px;
`;

const StyledListItem = styled(ListItem)`
  padding-bottom: 10px;
  margin-top: 5px;
`;

export default function Filter({ filters }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation">
      <List>
        {filters.map(([category, ...options]) => {
          return (
            <>
              <StyledFilters>
                <Category key={category}>{category}</Category>
                {options.map((option) => {
                  const { text, query } = option;
                  return (
                    <StyledListItem key={text} disablePadding>
                      <StyledCheckbox type="checkbox" name="" id="" />
                      <ListItemText primary={text} />
                    </StyledListItem>
                  );
                })}
                <Divider />
              </StyledFilters>
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
