import { createBrowserRouter, Outlet, Route, createRoutesFromElements } from "react-router-dom";
import { lazy } from "react";

import WebRoutes from "./web";
import AuthRoutes from "./auth";
import AdminRoutes from "./admin";
import CompanyRoutes from "./company";
import InternRoutes from "./intern";

const Error = lazy(() => import("../components/Error/Error"));

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={
                <>
                    <Outlet />
                </>
            }
            errorElement={<Error />}
        >
            {WebRoutes}
            {AuthRoutes}
            {AdminRoutes}
            {CompanyRoutes}
            {InternRoutes}
        </Route>,
    ),
);

export default AppRouter;
