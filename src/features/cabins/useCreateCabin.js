import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabins } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabins,
    onSuccess: () => {
      toast.success("A new cabin was successfully created"),
        queryClient.invalidateQueries({
          queryKey: ["cabins"],
        });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createCabin, isCreating };
}
