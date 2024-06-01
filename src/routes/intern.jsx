import { Suspense, lazy } from "react";
import { Outlet, Route } from "react-router-dom";

import DashboardLayout from "../components/DashboardLayout";
import Loading from "../components/Loading";
import { internNavigation } from "../utils/links";
import "../pages/InternDashboard/InternDashboard.scss";

const InternDashboard = lazy(() => import("../pages/InternDashboard/InternDashboard"));
const InternProfile = lazy(() => import("../pages/InternDashboard/InternProfile"));
const InternWeeklyLog = lazy(() => import("../pages/InternDashboard/InternWeeklyLog"));
const InternTasks = lazy(() => import("../pages/InternDashboard/InternTasks/InternTasks"));
const SingleTaskDetail = lazy(
    () => import("../pages/InternDashboard/SingleTaskDetail/SingleTaskDetail"),
);
const Error = lazy(() => import("../components/Error/Error"));

const InternRoutes = (
    <Route
        element={
            <DashboardLayout navigation={internNavigation}>
                <Outlet />
            </DashboardLayout>
        }
        errorElement={<Error />}
    >
        <Route
            path="/intern-dashboard"
            element={
                <Suspense fallback={<Loading />}>
                    <InternDashboard />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/intern-profile"
            element={
                <Suspense fallback={<Loading />}>
                    <InternProfile />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/intern-weeklyLog"
            element={
                <Suspense fallback={<Loading />}>
                    <InternWeeklyLog />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/intern-tasks"
            element={
                <Suspense fallback={<Loading />}>
                    <InternTasks />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/intern-tasks/detail"
            element={
                <Suspense fallback={<Loading />}>
                    <SingleTaskDetail />
                </Suspense>
            }
            errorElement={<Error />}
        />
    </Route>
);

export default InternRoutes;
