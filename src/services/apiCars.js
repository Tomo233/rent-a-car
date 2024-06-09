import supabase from "./supabase";

export async function getCars(sort, filters) {
  try {
    let query = supabase.from("cars").select("*");

    if (sort) {
      query = query.order(sort.at(0), {
        ascending: sort.at(1) === "ascending",
      });
    }

    if (filters.length > 0) {
      filters.map((f) => {
        const [column, value, secondValue] = f.split("-");

        if (column === "price" || column === "horsepower" || column === "year")
          return (query = query
            .gt(column, Number(value))
            .lt(column, Number(secondValue)));

        return (query = query.eq(
          column,
          value.charAt(0).toUpperCase() + value.slice(1)
        ));
      });
    }

    const { data, error } = await query;

    if (error) throw new Error("Cars cannot be loaded");

    return data;
  } catch (error) {
    console.error("Error fetching cars:", error.message);
    throw error;
  }
}

export async function getSomeCars({ from, to }) {
  let { data, error } = await supabase.from("cars").select("*").range(from, to);

  if (error) throw new Error("Cars cannot be loaded");

  return data;
}
