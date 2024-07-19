/* eslint-disable react/prop-types */
import Flex from "../../components/Flex";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import CarDetails from "./CarDetails";

function CarItem({ car }) {
  const { price, id } = car;
  const navigate = useNavigate();

  return (
    <div>
      <Flex>
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
      </Flex>
    </div>
  );
}

export default CarItem;
