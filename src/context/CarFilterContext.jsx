/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

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
const CarFilterProvider = function ({ children }) {
  const [rangeValue, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ rangeValue, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

function useCarFilter() {
  const context = useContext(FilterContext);
  if (context === undefined)
    throw new Error("FilterContext was used outside of DarkModeProvidor");
  return context;
}

export { CarFilterProvider, useCarFilter };
