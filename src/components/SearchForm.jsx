import styled from "styled-components";

const StyledForm = styled.form`
  background-color: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin-top: 140px;
  height: 120px;
`;

// const StyledContent = styled.div``;

const FormFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 100%;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const StyledInput = styled.input`
  width: 250px;
  height: 50px;
  color: black;
  font-size: 18px;
  text-align: center;
`;

const StyledLabel = styled.label`
  color: var(--color-primary-blue);
  font-size: 18px;
`;

const Button = styled.button`
  background-color: var(--color-primary-blue);
  border: none;
  padding: 25px 40px;
  z-index: 100;
  letter-spacing: 2px;
  font-size: 20px;
  border-radius: 3px;
`;

// const TimeInput = styled.input`
//   width: 30px;
//   color: black;
// `;

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
          <StyledInput type="date" name="" id="" />
          {/* <TimeInput type="time" name="" id="" /> */}
        </FormGrid>
        <FormGrid>
          <StyledLabel>Povratak</StyledLabel>
          <FormFlex>
            <StyledInput type="date" name="" id="" />
            {/* <TimeInput type="time" name="" id="" /> */}
          </FormFlex>
        </FormGrid>
        <Button>Pretrazi</Button>
      </FormFlex>
    </StyledForm>
  );
}

export default SearchForm;
