import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import Button from "./Button";
import Line from "./Line";

const StyledForm = styled.form`
  background-color: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin-top: 140px;
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
  return (
    <StyledForm>
      <FormFlex>
        <FormGrid>
          <StyledLabel>Lokacija</StyledLabel>
          <StyledInput type="search" placeholder="Unesi Lokaciju" />
        </FormGrid>
        <FormGrid>
          <StyledLabel>Preuzimanje</StyledLabel>
          <FlexContainer>
            <StyledInput type="date" name="" id="" />
            <TimeInput type="time" name="" id="" />
          </FlexContainer>
        </FormGrid>
        <FormGrid>
          <StyledLabel>Povratak</StyledLabel>
          <FlexContainer>
            <StyledInput type="date" name="" id="" />
            <TimeInput type="time" name="" id="" />
          </FlexContainer>
        </FormGrid>
        <Button type="secondary">Pretrazi</Button>
      </FormFlex>
      <Line />
    </StyledForm>
  );
}

export default SearchForm;
