/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Divider } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import FlexContainer from "./FlexContainer";
import { useSearchParams } from "react-router-dom";

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
  padding: 10px 0;
`;

const StyledListItem = styled(ListItem)`
  padding-bottom: 2px;
  margin-top: 5px;
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Filter({ filters }) {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterValue, setFilterValue] = useState([]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("filters");

    filterValue.forEach((value) => {
      newParams.append("filters", value);
    });

    console.log(newParams.toString());

    // Only set the searchParams if there is an actual change
    if (newParams.toString() !== searchParams.toString()) {
      setSearchParams(newParams);
    }
  }, [filterValue, searchParams, setSearchParams]);

  const handleFilter = (e, query) => {
    if (e.target.checked) {
      setFilterValue((prev) => [...prev, query]);
    } else {
      setFilterValue((prev) => prev.filter((f) => f !== query));
    }
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation">
      <List>
        {filters.map(([category, ...options]) => {
          return (
            <StyledFilters key={category}>
              <Category>{category}</Category>
              {options.map((option) => {
                const { text, query } = option;
                return (
                  <StyledListItem key={query} disablePadding>
                    <Checkbox
                      {...label}
                      sx={{
                        color: "var(--color-primary-blue)",
                        "&.Mui-checked": {
                          color: "var(--color-primary-blue)",
                        },
                      }}
                      onChange={(e) => handleFilter(e, query)}
                    />
                    <ListItemText primary={text} />
                  </StyledListItem>
                );
              })}
              <Divider />
            </StyledFilters>
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
