import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/apiCars";
import { useCarContext } from "../../context/CarContext";
import { useSearchParams } from "react-router-dom";

export function useCars() {
  const [searchParams] = useSearchParams();
  const { formData, rangeFilterValues } = useCarContext();
  const rangeFilters = rangeFilterValues.map((value) => {
    const filters = searchParams.get(value.category);
    return `${value.category}-${filters}`;
  });
  const sort = searchParams.get("sort")?.split("-");
  const filters = searchParams.getAll("filters");

  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    queryKey: ["cars", sort, filters, rangeFilters, formData],
    queryFn: () => getCars(formData, sort, filters, rangeFilters),
  });
  return { cars, error, isLoading };
}
