import toast from "react-hot-toast";
import { deleteCabins } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteCabin() {
  const queryClient = useQueryClient(); // special hook to call queryClient
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabins, //this is the function that ReactQuery will call, mutate function will be call back function that we can connect to the button
    onSuccess: () => {
      toast.success("The cabin was successfully deleted");
      // refetching data by invalidating the cache as soon as the mutation is done
      queryClient.invalidateQueries({
        //get queryClient and call invalidate
        queryKey: ["cabins"], // define which query
      });
    },
    onError: (err) => toast.error(err.message), //get exactly error from deleteCabin function
  });
  return { isDeleting, deleteCabin };
}
