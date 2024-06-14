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
  width: 220px;
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
  const { register, handleSubmit } = useForm();

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleForm)}>
      <FormFlex>
        <FormGrid>
          <StyledLabel>Lokacija</StyledLabel>
          <StyledInput
            type="search"
            placeholder="Unesi Lokaciju"
            {...register("location", { required: "This field is required" })}
          />
        </FormGrid>
        <FormGrid>
          <StyledLabel>Preuzimanje</StyledLabel>
          <FlexContainer>
            <StyledInput
              type="date"
              {...register("startDate", { required: "This field is required" })}
            />
            <TimeInput
              type="time"
              {...register("startTime", { required: "This field is required" })}
            />
          </FlexContainer>
        </FormGrid>
        <FormGrid>
          <StyledLabel>Povratak</StyledLabel>
          <FlexContainer>
            <StyledInput
              type="date"
              {...register("endDate", { required: "This field is required" })}
            />
            <TimeInput
              type="time"
              {...register("endTime", { required: "This field is required" })}
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
