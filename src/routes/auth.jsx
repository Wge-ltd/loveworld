import { Suspense, lazy } from "react";
import { Outlet, Route } from "react-router-dom";
import Loading from "../components/Loading";

const Login = lazy(() => import("../pages/Login/Login.jsx"));
const SignUp = lazy(() => import("../pages/SignUp//SignUp.jsx"));
const NotFound = lazy(() => import("../pages/404/404.jsx"));
const Error = lazy(() => import("../components/Error/Error"));

const AuthRoutes = (
    <Route
        element={
            <>
                <Outlet />
            </>
        }
        errorElement={<Error />}
    >
        <Route
            path="/login"
            element={
                <Suspense fallback={<Loading />}>
                    <Login />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/sign-up"
            element={
                <Suspense fallback={<Loading />}>
                    <SignUp />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route path="*" element={<NotFound />} />
    </Route>
);

export default AuthRoutes;
