/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCallback, useEffect, useReducer, useState } from "react";
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
import CustomButton from "./Button";

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

const initialState = {
  year: { from: 0, to: 1 },
  horsepower: { from: 0, to: 1 },
  price: { from: 0, to: 1 },
};
function reducer(state, action) {
  switch (action.type) {
    case "caryear":
      return {
        ...state,
        year: {
          ...state.year,
          from: action.payload.firstValue,
          to: action.payload.secondValue,
        },
      };
    case "horsepower":
      return {
        ...state,
        horsepower: {
          ...state.year,
          from: action.payload.firstValue,
          to: action.payload.secondValue,
        },
      };
    case "price":
      return {
        ...state,
        price: {
          ...state.year,
          from: action.payload.firstValue,
          to: action.payload.secondValue,
        },
      };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

export default function Filter({ filters, sortOptions }) {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterValue, setFilterValue] = useState([]);
  const [sortValue, setSortValue] = useState(searchParams.get("sort") || "");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isClicked, setIsClicked] = useState(false);

  console.log(state);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const updateParams = useCallback(() => {
    const newParams = new URLSearchParams(searchParams.toString());

    // Clear existing filters
    newParams.delete("filters");

    // Add new filter values
    if (isClicked)
      filterValue.forEach((value) => {
        newParams.append("filters", value.trim());
      });

    // Update sort parameter
    if (sortValue) {
      newParams.set("sort", sortValue);
    } else {
      newParams.delete("sort");
    }

    // Update search parameters
    setSearchParams(newParams);
  }, [filterValue, isClicked, searchParams, setSearchParams, sortValue]);

  useEffect(() => {
    updateParams();
  }, [updateParams]);

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
    console.log(carCategory);
    dispatch({ type: carCategory, payload: { firstValue, secondValue } });
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
                  const { text, query, min, max } = option;
                  console.log(query);
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
                        <>
                          {/* {category.toLowerCase().split(" ")} */}
                          <p>
                            {min} | ${max}
                          </p>
                          {query}
                          <RangeSlider
                            min={min}
                            max={max}
                            onInput={(e) => handleRangeFilter(e, category)}
                          />
                        </>
                      )}
                      <ListItemText primary={text} />
                    </StyledListItem>
                  );
                })}
                <Divider style={{ marginTop: "15px" }} />
              </StyledFilters>
            ))}
          </List>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              type="secondary"
              onClick={() => setIsClicked((isClicked) => !isClicked)}
            >
              Filter
            </CustomButton>
          </div>
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
