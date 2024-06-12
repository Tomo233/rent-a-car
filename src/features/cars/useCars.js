import { useQuery } from "@tanstack/react-query";
import { getCars } from "../../services/apiCars";
import { useSearchParams } from "react-router-dom";
import { useCarFilter } from "../../context/CarFilterContext";

export function useCars() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort")?.split("-");
  const filters = searchParams.getAll("filters");
  const { rangeValue } = useCarFilter();

  const rangeFilters = rangeValue.map((value) => {
    const filters = searchParams.get(value.category);
    return `${value.category}-${filters}`;
  });

  const {
    isLoading,
    data: cars,
    error,
  } = useQuery({
    // Similar as useEffect dependency array if param or ascending changes it will cause re-render
    queryKey: ["cars", sort, filters, rangeFilters],
    queryFn: () => getCars(sort, filters, rangeFilters),
  });
  return { cars, error, isLoading };
}
