import { useCars } from "./useCars";

function Cars() {
  const { isLoading, data } = useCars();

  if (isLoading) return <p>loading</p>;

  console.log(data);
  return <div>e</div>;
}

export default Cars;
