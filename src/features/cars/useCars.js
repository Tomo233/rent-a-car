import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/apiCars";
import { useSearchParams } from "react-router-dom";
import { useCarContext } from "../../context/CarContext";

export function useCars() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort")?.split("-");
  const filters = searchParams.getAll("filters");
  const { rangeFilterValues, formData } = useCarContext();
  const rangeFilters = rangeFilterValues.map((value) => {
    const rangeValue = searchParams.get(value.category);
    return `${value.category}-${rangeValue}`;
  });

  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    // Similar as useEffect dependency array if param or ascending changes it will cause re-render
    queryKey: ["cars", sort, filters, rangeFilters, formData],
    queryFn: () => getCars(sort, filters, rangeFilters, formData),
  });
  return { cars, error, isLoading };
}
