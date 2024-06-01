import { Suspense, lazy } from "react";
import { Outlet, Route } from "react-router-dom";

import DashboardLayout from "../components/DashboardLayout";
import Loading from "../components/Loading";
import { companyNavigation } from "../utils/links";

const CompanyDashboard = lazy(() => import("../pages/CompanyDashboard/CompanyDashboard"));
const CompanyInterns = lazy(() => import("../pages/CompanyDashboard/CompanyInterns"));
const CompanyAssignTask = lazy(() => import("../pages/CompanyDashboard/AssignTask/AssignTask"));
const CompanyWeeklyLog = lazy(() => import("../pages/CompanyDashboard/WeeklyLog/CompanyWeeklyLog"));
const Error = lazy(() => import("../components/Error/Error"));

const CompanyRoutes = (
    <Route
        element={
            <DashboardLayout navigation={companyNavigation}>
                <Outlet />
            </DashboardLayout>
        }
        errorElement={<Error />}
    >
        <Route
            path="/company-dashboard"
            element={
                <Suspense fallback={<Loading />}>
                    <CompanyDashboard />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/company-interns"
            element={
                <Suspense fallback={<Loading />}>
                    <CompanyInterns />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/company-weeklyLog/:id"
            element={
                <Suspense fallback={<Loading />}>
                    <CompanyWeeklyLog />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/company-assignTasks/:id"
            element={
                <Suspense fallback={<Loading />}>
                    <CompanyAssignTask />
                </Suspense>
            }
            errorElement={<Error />}
        />
    </Route>
);

export default CompanyRoutes;
