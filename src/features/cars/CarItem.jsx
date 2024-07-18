/* eslint-disable react/prop-types */
import FlexContainer from "../../components/FlexContainer";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import CarDetails from "./CarDetails";

function CarItem({ car }) {
  const { price, id } = car;
  const navigate = useNavigate();

  return (
    <div>
      <FlexContainer gap="0">
        <CarDetails car={car}>
          <Button
            type="short"
            onClick={() => {
              navigate(`/cars/${id}`);
            }}
          >
            {price}$/Dan
          </Button>
        </CarDetails>
      </FlexContainer>
    </div>
  );
}

export default CarItem;
