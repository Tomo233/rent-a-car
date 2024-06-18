/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const CarContext = createContext();

const initialState = {
  filters: [
    {
      category: "year",
      from: 2011,
      to: 2022,
      min: 2011,
      max: 2022,
    },
    {
      category: "horsepower",
      from: 158,
      to: 450,
      min: 158,
      max: 450,
    },
    {
      category: "price",
      from: 20,
      to: 250,
      min: 20,
      max: 250,
    },
  ],
  formData: JSON.parse(localStorage.getItem("formData")) || {}, // Load formData from localStorage
};

function reducer(state, action) {
  switch (action.type) {
    case "setValue":
      return {
        ...state,
        filters: state.filters.map((item) =>
          item.category === action.payload.category
            ? { ...item, from: action.payload.from, to: action.payload.to }
            : item
        ),
      };
    case "setFormData":
      // set formData to local storage
      localStorage.setItem("formData", JSON.stringify(action.payload));
      return {
        ...state,
        formData: action.payload,
      };

    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}
const CarProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CarContext.Provider
      value={{
        rangeFilterValues: state.filters,
        formData: state.formData,
        dispatch,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

function useCarContext() {
  const context = useContext(CarContext);
  if (context === undefined)
    throw new Error("FilterContext was used outside of DarkModeProvidor");
  return context;
}

export { CarProvider, useCarContext };
