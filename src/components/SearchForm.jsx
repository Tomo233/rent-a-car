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
`;

const FormFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
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
`;

const StyledLabel = styled.label`
  color: var(--color-primary-blue);
  font-size: 18px;
`;

const TimeInput = styled.input`
  color: black;
  height: 40px;
`;

const StyledSelect = styled(Select)`
  border: 1px solid var(--color-border-gray) !important;
  width: 190px;
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

  return (
    <StyledForm onSubmit={handleSubmit(handleForm)}>
      <FormFlex>
        <FormGrid>
          <StyledLabel>{errors?.location?.message || "Location"}</StyledLabel>
          <FormControl>
            <InputLabel id="location-label">Location</InputLabel>
            <StyledSelect
              labelId="location-label"
              id="location"
              defaultValue="" // Set the default value
              {...register("location", { required: "Required Field" })}
            >
              <MenuItem value="Belgrade">Belgrade</MenuItem>
              <MenuItem value="Mostar">Mostar</MenuItem>
              <MenuItem value="Sarajevo">Sarajevo</MenuItem>
              <MenuItem value="Zagreb">Zagreb</MenuItem>
            </StyledSelect>
          </FormControl>
        </FormGrid>
        <FormGrid>
          <FlexContainer>
            <StyledLabel>
              {errors?.startDate?.message || "Start Date"}
            </StyledLabel>
            <StyledLabel>
              {errors?.startTime?.message || "Start Time"}
            </StyledLabel>
          </FlexContainer>
          <FlexContainer>
            <StyledInput
              type="date"
              {...register("startDate", { required: "Required Field" })}
            />
            <TimeInput
              type="time"
              {...register("startTime", { required: "Required Field" })}
            />
          </FlexContainer>
        </FormGrid>
        <FormGrid>
          <FlexContainer>
            <StyledLabel>{errors?.endTime?.message || "End Time"}</StyledLabel>
            <StyledLabel>{errors?.endDate?.message || "End Date"}</StyledLabel>
          </FlexContainer>
          <FlexContainer>
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
            <StyledInput
              type="date"
              {...register("endDate", {
                required: "Required Field",
                validate: (value) =>
                  value >= getValues("startDate") ||
                  "End date is before start date",
              })}
            />
          </FlexContainer>
        </FormGrid>
        <Button>Search</Button>
      </FormFlex>
      <Line />
    </StyledForm>
  );
}

export default SearchForm;
