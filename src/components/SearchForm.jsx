import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import Button from "./Button";
import Line from "./Line";
import { useForm } from "react-hook-form";
import { useCarContext } from "../context/CarContext";
import { useNavigate } from "react-router-dom";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

const StyledForm = styled.form`
  background-color: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  height: 120px;
  width: 100%;

  @media (max-width: 992px) {
    margin-bottom: 300px;
    height: 400px;
  }
`;

const FormFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (max-width: 992px) {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const StyledInput = styled.input`
  width: 190px;
  height: 50px;
  color: black;
  font-size: 18px;
  text-align: center;

  @media (max-width: 1200px) {
    width: 100px;
  }
  @media (max-width: 992px) {
    width: 300px;
    height: 55px;
  }
`;

const StyledLabel = styled.label`
  color: var(--color-primary-blue);
  font-size: 18px;
`;

const TimeInput = styled.input`
  color: black;
  height: 40px;
  @media (max-width: 992px) {
    width: 300px;
    height: 55px;
  }
`;

const StyledSelect = styled(Select)`
  border: 1px solid var(--color-border-gray) !important;
  width: 190px;

  @media (max-width: 992px) {
    width: 300px;
    height: 55px;
  }
`;

const SearchButton = styled(Button)`
  @media (max-width: 992px) {
    width: 85%;
    margin-bottom: 25px;
  }
`;

function SearchForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      location: "", // Set the default value to an empty string
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
    },
  });

  const { dispatch } = useCarContext();
  const navigate = useNavigate();

  const startDate = watch("startDate");
  const endDate = watch("endDate");
  const startTime = watch("startTime");

  const handleForm = (data) => {
    dispatch({ type: "setFormData", payload: data });

    navigate("cars");
  };

  const today = new Date();
  const startDateTime = new Date(`${startDate} ${startTime}`);

  return (
    <StyledForm onSubmit={handleSubmit(handleForm)}>
      <FormFlex className="e">
        <FormGrid>
          <StyledLabel>{errors?.location?.message || "Location"}</StyledLabel>
          <FormControl>
            <InputLabel id="location-label">Location</InputLabel>
            <StyledSelect
              labelId="location-label"
              id="location"
              defaultValue=""
              {...register("location", { required: "Required Field" })}
            >
              <MenuItem value="Belgrade">Belgrade</MenuItem>
              <MenuItem value="Mostar">Mostar</MenuItem>
              <MenuItem value="Sarajevo">Sarajevo</MenuItem>
              <MenuItem value="Zagreb">Zagreb</MenuItem>
            </StyledSelect>
          </FormControl>
        </FormGrid>

        <FlexContainer>
          <FormGrid>
            <StyledLabel>
              {errors?.startDate?.message || "Start Date"}
            </StyledLabel>
            <StyledInput
              type="date"
              {...register("startDate", {
                required: "Required Field",
                validate: () => {
                  return (
                    startDateTime >= today ||
                    "start date cannot be before today"
                  );
                },
              })}
            />
          </FormGrid>
          <FormGrid>
            <StyledLabel>
              {errors?.startTime?.message || "Start Time"}
            </StyledLabel>
            <TimeInput
              type="time"
              {...register("startTime", { required: "Required Field" })}
            />
          </FormGrid>
        </FlexContainer>

        <FlexContainer>
          <FormGrid>
            <StyledLabel>{errors?.endTime?.message || "End Time"}</StyledLabel>
            <TimeInput
              type="time"
              {...register("endTime", {
                required: "Required Field",
                validate: (value) => {
                  if (startDate === endDate) {
                    return (
                      value >= startTime ||
                      "End Time must be later than or equal to Start Time"
                    );
                  }
                  return true;
                },
              })}
            />
          </FormGrid>
          <FormGrid>
            <StyledLabel>{errors?.endDate?.message || "End Date"}</StyledLabel>
            <StyledInput
              type="date"
              {...register("endDate", {
                required: "Required Field",
                validate: (value) =>
                  value >= getValues("startDate") ||
                  "End date is before start date",
              })}
            />
          </FormGrid>
        </FlexContainer>
        <SearchButton>Search</SearchButton>
      </FormFlex>
      <Line />
    </StyledForm>
  );
}

export default SearchForm;
