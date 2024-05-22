import { useEffect } from "react";
import { toast } from "react-toastify";

export const useToast = (mutation) => {
    useEffect(() => {
        if (mutation && mutation.isSuccess) {
            toast.success(mutation?.data?.message, {
                icon: "🚀",
            });
        } else {
            toast.error(mutation?.error?.message, {
                icon: "❌",
            });
        }
    }, [mutation]);
};
