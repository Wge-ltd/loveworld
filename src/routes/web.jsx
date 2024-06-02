import { Suspense, lazy } from "react";
import { Outlet, Route } from "react-router-dom";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const About = lazy(() => import("../pages/About/About.jsx"));
const Career = lazy(() => import("../pages/Career/Career.jsx"));
const Checkout = lazy(() => import("../pages/Checkout/Checkout.jsx"));
const Pricing = lazy(() => import("../pages/Pricing/Pricing.jsx"));
const Help = lazy(() => import("../pages/Help/Help.jsx"));
const Team = lazy(() => import("../pages/Team/Team.jsx"));
const Partnership = lazy(() => import("../pages/Partnership/Partnership.jsx"));
const CareerDetails = lazy(() => import("../pages/CareerDetails/CareerDetails.jsx"));
const Error = lazy(() => import("../components/Error/Error"));

const WebRoutes = (
    <Route
        element={
            <>
                <Outlet />
            </>
        }
        errorElement={<Error />}
    >
        <Route
            index
            path="/"
            element={
                <Suspense fallback={<Loading />}>
                    <Home />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/about"
            element={
                <Suspense fallback={<Loading />}>
                    <About />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/checkout"
            element={
                <Suspense fallback={<Loading />}>
                    <Checkout />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/careers"
            element={
                <Suspense fallback={<Loading />}>
                    <Career />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/career-details/:id"
            element={
                <Suspense fallback={<Loading />}>
                    <CareerDetails />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/pricing"
            element={
                <Suspense fallback={<Loading />}>
                    <Pricing />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/partnership"
            element={
                <Suspense fallback={<Loading />}>
                    <Partnership />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/help"
            element={
                <Suspense fallback={<Loading />}>
                    <Help />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/team"
            element={
                <Suspense fallback={<Loading />}>
                    <Team />
                </Suspense>
            }
            errorElement={<Error />}
        />
    </Route>
);

export default WebRoutes;
