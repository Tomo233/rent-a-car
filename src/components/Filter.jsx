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
import { useSearchParams } from "react-router-dom";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import SortBy from "./SortBy";
import Flex from "./Flex";
import CustomButton from "./Button";
import { useCarContext } from "../context/CarContext";

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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Filter({ filters, sortOptions }) {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterValue, setFilterValue] = useState([]);
  const { rangeFilterValues, dispatch } = useCarContext();
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
      newParams.append("filters", value);
    });

    rangeFilterValues.forEach(({ category, from, to }) => {
      newParams.set(category, `${from}-${to}`);
    });

    // Update sort parameter
    if (sortValue) {
      newParams.set("sort", sortValue);
    } else {
      newParams.delete("sort");
    }

    // Update search parameters
    setSearchParams(newParams);
  }, [filterValue, rangeFilterValues, sortValue]);

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
    <Flex>
      <StyledButton onClick={toggleDrawer(true)}>
        <Flex>
          <FilterListIcon /> <span>Filter</span>
        </Flex>
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
            {rangeFilterValues.map(({ category, min, max, from, to }) => {
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
            <Flex $justify="center" onClick={() => setOpen(false)}>
              <CustomButton>Close</CustomButton>
            </Flex>
          </List>
        </Box>
      </Drawer>
      <SortBy
        sortValue={sortValue}
        setSortValue={setSortValue}
        options={sortOptions}
      />
    </Flex>
  );
}
