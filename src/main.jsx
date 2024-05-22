import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    // </React.StrictMode>
);
