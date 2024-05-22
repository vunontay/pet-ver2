import "./styles/global.scss";
import { RouterProvider } from "react-router";
import router from "./routes";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "./components/ui";
export function App() {
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();
    return (
        <>
            <RouterProvider router={router} />
            {isFetching + isMutating !== 0 && <Spinner />}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
        </>
    );
}
