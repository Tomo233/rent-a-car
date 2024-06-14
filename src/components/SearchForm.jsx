import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import Button from "./Button";
import Line from "./Line";
import { useForm } from "react-hook-form";

const StyledForm = styled.form`
  background-color: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  /* margin-top: 140px; */
  height: 120px;
  width: 100%;
`;

const FormFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
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

function SearchForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleForm)}>
      <FormFlex>
        <FormGrid>
          <StyledLabel>{errors?.location?.message || "Location"}</StyledLabel>
          <StyledInput
            type="search"
            name="location"
            placeholder="Unesi Lokaciju"
            {...register("location", { required: "Required Field" })}
          />
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
              name="startDate"
              {...register("startDate", {
                required: "Required Field",
              })}
            />
            <TimeInput
              type="time"
              name="startTime"
              {...register("startTime", {
                required: "Required Field",
              })}
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
              name="endTime"
              {...register("endTime", { required: "Required Field" })}
            />
            <StyledInput
              type="date"
              name="endDate"
              {...register("endDate", {
                required: "Required Field",
                validate: (value) =>
                  value >= getValues("startDate") ||
                  "end date is before start date",
              })}
            />
          </FlexContainer>
        </FormGrid>
        <Button type="secondary">Pretrazi</Button>
      </FormFlex>
      <Line />
    </StyledForm>
  );
}

export default SearchForm;
