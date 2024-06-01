import { Suspense, lazy } from "react";
import { Outlet, Route } from "react-router-dom";

import DashboardLayout from "../components/DashboardLayout";
import Loading from "../components/Loading";
import { adminNavigation } from "../utils/links";
import "../pages/AdminDashboard/AdminDashboard.scss";

const AdminDashboard = lazy(() => import("../pages/AdminDashboard/AdminDashboard"));
const AdminInterns = lazy(() => import("../pages/AdminDashboard/AdminUsers/AdminInterns"));
const SingleAdminIntern = lazy(
    () => import("../pages/AdminDashboard/AdminUsers/SingleAdminIntern"),
);
const AdminCompanies = lazy(() => import("../pages/AdminDashboard/AdminUsers/AdminCompanies"));
const SingleAdminCompany = lazy(
    () => import("../pages/AdminDashboard/AdminUsers/SingleAdminCompany"),
);
const AdminWeeklyLog = lazy(() => import("../pages/AdminDashboard/AdminUsers/WeeklyLog"));
const AdminApplications = lazy(
    () => import("../pages/AdminDashboard/AdminApplications/AdminApplications"),
);
const InternApplication = lazy(
    () => import("../pages/AdminDashboard/AdminApplications/InternApplication"),
);
const MatchApplication = lazy(
    () => import("../pages/AdminDashboard/AdminApplications/MatchApplication"),
);
const CompanyApplication = lazy(
    () => import("../pages/AdminDashboard/AdminApplications/CompanyApplication"),
);
const AssignApplication = lazy(
    () => import("../pages/AdminDashboard/AdminApplications/AssignApplication"),
);
const Error = lazy(() => import("../components/Error/Error"));

const AdminRoutes = (
    <Route
        element={
            <div className="admin">
                <DashboardLayout navigation={adminNavigation}>
                    <Outlet />
                </DashboardLayout>
            </div>
        }
        errorElement={<Error />}
    >
        <Route
            path="/admin-dashboard"
            element={
                <Suspense fallback={<Loading />}>
                    <AdminDashboard />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/admin-interns"
            element={
                <Suspense fallback={<Loading />}>
                    <AdminInterns />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/admin-interns/:id"
            element={
                <Suspense fallback={<Loading />}>
                    <SingleAdminIntern />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/admin-companies"
            element={
                <Suspense fallback={<Loading />}>
                    <AdminCompanies />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/admin-companies/:id"
            element={
                <Suspense fallback={<Loading />}>
                    <SingleAdminCompany />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/admin-weeklyLog/:id"
            element={
                <Suspense fallback={<Loading />}>
                    <AdminWeeklyLog />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/admin-applications"
            element={
                <Suspense fallback={<Loading />}>
                    <AdminApplications />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/admin-applications/intern/:id"
            element={
                <Suspense fallback={<Loading />}>
                    <InternApplication />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/admin-intern-match/:id"
            element={
                <Suspense fallback={<Loading />}>
                    <MatchApplication />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/admin-applications/company/:id"
            element={
                <Suspense fallback={<Loading />}>
                    <CompanyApplication />
                </Suspense>
            }
            errorElement={<Error />}
        />
        <Route
            path="/admin-company-assign/:id"
            element={
                <Suspense fallback={<Loading />}>
                    <AssignApplication />
                </Suspense>
            }
            errorElement={<Error />}
        />
    </Route>
);

export default AdminRoutes;
