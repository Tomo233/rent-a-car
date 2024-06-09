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
import { Divider, Checkbox } from "@mui/material";

import FlexContainer from "./FlexContainer";
import { useSearchParams } from "react-router-dom";
import SortBy from "./SortBy"; // Assuming SortBy is in the same directory

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

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

export default function Filter({ filters, sortOptions }) {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterValue, setFilterValue] = useState([]);
  const [sortValue, setSortValue] = useState(searchParams.get("sort") || "");
  const [value, setValue] = useState(0);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  console.log(value);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("filters");

    filterValue.forEach((value) => {
      newParams.append("filters", value);
    });

    if (sortValue) {
      newParams.set("sort", sortValue);
    } else {
      newParams.delete("sort");
    }

    if (newParams.toString() !== searchParams.toString()) {
      setSearchParams(newParams);
    }
  }, [filterValue, sortValue, searchParams, setSearchParams]);

  const handleFilter = (e, query) => {
    if (e.target.checked) {
      setFilterValue((prev) => [...prev, query]);
    } else {
      setFilterValue((prev) => prev.filter((f) => f !== query));
    }
  };

  return (
    <FlexContainer>
      <StyledButton onClick={toggleDrawer(true)}>
        <FlexContainer>
          <FilterListIcon /> <span>Filter</span>
        </FlexContainer>
      </StyledButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 350 }} role="presentation">
          <List>
            {filters.map(([category, ...options]) => (
              <StyledFilters key={category}>
                <Category>{category}</Category>
                {options.map((option) => {
                  const { text, query } = option;
                  return (
                    <StyledListItem key={query} disablePadding>
                      {category === "fuelType" ||
                      category === "transmission" ? (
                        <Checkbox
                          {...label}
                          sx={{
                            color: "var(--color-primary-blue)",
                            "&.Mui-checked": {
                              color: "var(--color-primary-blue)",
                            },
                          }}
                          onChange={(e) => handleFilter(e, query)}
                          checked={filterValue.includes(query)}
                        />
                      ) : (
                        <RangeSlider />
                      )}
                      <ListItemText primary={text} />
                    </StyledListItem>
                  );
                })}
                <Divider style={{ marginTop: "15px" }} />
              </StyledFilters>
            ))}
          </List>
        </Box>
      </Drawer>
      <SortBy
        sortValue={sortValue}
        setSortValue={setSortValue}
        options={sortOptions}
      />
    </FlexContainer>
  );
}
