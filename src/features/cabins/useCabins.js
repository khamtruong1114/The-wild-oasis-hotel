import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    error,
    data: cabins,
  } = useQuery({
    queryKey: ["cabins"], // the data would be read from the cache
    queryFn: getCabins, //need to return a promise -> this data will be the one stored in the cache
  });
  return { cabins, isLoading, error };
}
