import { useMutation } from "@tanstack/react-query";
export const useMutations = (functionCallback) => {
    const mutation = useMutation({
        mutationFn: functionCallback,
    });

    return mutation;
};
