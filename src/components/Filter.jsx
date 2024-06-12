/* eslint-disable react/prop-types */
import { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Divider, Checkbox } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import SortBy from "./SortBy";
import FlexContainer from "./FlexContainer";

const StyledFilters = styled.div`
  padding: 10px 0;
`;

const Category = styled.p`
  text-align: center;
  font-size: 20px;
  text-transform: capitalize;
  margin-bottom: 12px;
`;

const StyledListItem = styled(ListItem)`
  padding-bottom: 2px;
  margin-top: 5px;
`;

const StyledRangeItem = styled.div`
  height: 90px;
`;

const RangeListItem = styled(ListItem)`
  padding-bottom: 2px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  color: black !important;
  text-transform: capitalize !important;
  font-size: 18px !important;
`;

const initialState = [
  {
    category: "year",
    from: 2015,
    to: 2022,
    min: 2015,
    max: 2022,
  },
  {
    category: "horsepower",
    from: 150,
    to: 450,
    min: 150,
    max: 450,
  },
  {
    category: "price",
    from: 1,
    to: 200,
    min: 1,
    max: 200,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "setValue":
      return state.map((item) =>
        item.category === action.payload.category
          ? { ...item, from: action.payload.from, to: action.payload.to }
          : item
      );
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Filter({ filters, sortOptions }) {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterValue, setFilterValue] = useState([]);
  const [rangeValue, dispatch] = useReducer(reducer, initialState);
  const [sortValue, setSortValue] = useState(searchParams.get("sort") || "");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());

    // Clear existing filters
    newParams.delete("filters");
    newParams.delete("rangeValues");

    // Add new filter values
    filterValue.forEach((value) => {
      newParams.append("filters", value.trim());
    });

    rangeValue.forEach(({ category, from, to }) => {
      // console.log(from);
      newParams.append("rangeValues", `${category}-${from}-${to}`);
    });

    // Update sort parameter
    if (sortValue) {
      newParams.set("sort", sortValue);
    } else {
      newParams.delete("sort");
    }

    // Update search parameters
    setSearchParams(newParams);
  }, [filterValue, rangeValue, searchParams, sortValue, setSearchParams]);

  const handleFilter = (e, query) => {
    if (e.target.checked) {
      setFilterValue((prev) => [...prev, query]);
    } else {
      setFilterValue((prev) => prev.filter((f) => f !== query));
    }
  };

  const handleRangeFilter = (event, category) => {
    const carCategory = category.toLowerCase().replace(/\s+/g, "");
    const [firstValue, secondValue] = event;
    dispatch({
      type: "setValue",
      payload: { category: carCategory, from: firstValue, to: secondValue },
    });
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
            {filters.map(([category, ...options], categoryIndex) => (
              <StyledFilters key={category + categoryIndex}>
                <Category>{category}</Category>
                {options.map(({ text, query }, optionIndex) => (
                  <StyledListItem key={query + optionIndex} disablePadding>
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
                    <ListItemText primary={text} />
                  </StyledListItem>
                ))}
                <Divider style={{ marginTop: "15px" }} />
              </StyledFilters>
            ))}
            {rangeValue.map(({ category, min, max, from, to }) => {
              return (
                <StyledRangeItem key={category}>
                  <RangeListItem>
                    <Category>
                      {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                      {from}-{to}
                    </Category>
                    <p></p>
                    <RangeSlider
                      key={category}
                      min={min}
                      max={max}
                      onInput={(e) => handleRangeFilter(e, category)}
                    />
                  </RangeListItem>
                  <Divider style={{ marginTop: "15px" }} />
                </StyledRangeItem>
              );
            })}
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
