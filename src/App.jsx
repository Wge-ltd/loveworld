import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./scss/index.scss";
import { ToastContainer } from "react-toastify";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

import { createIDBPersister } from "./persister";
import AppRouter from "./routes";
import Loading from "./components/Loading";
import ErrorFallback from "./components/Error/ErrorFallBack";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                gcTime: 1000 * 60 * 60 * 24 * 7, // 7 days
            },
        },
    });

    const persister = createIDBPersister("reactQuery");

    return (
        <ErrorBoundary fallback={<ErrorFallback />}>
            <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
                <RouterProvider router={AppRouter} fallbackElement={<Loading />} />
                <ToastContainer />
            </PersistQueryClientProvider>
        </ErrorBoundary>
    );
}

export default App;
