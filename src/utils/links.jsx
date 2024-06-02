import DashboardIcon from "../assets/SVGs/Dashboard";
import InternsIcon from "../assets/SVGs/Interns";
import LogIcon from "../assets/SVGs/Weeklog";
import TaskIcon from "../assets/SVGs/Tasks";
import HatIcon from "../assets/SVGs/Hat";

export const adminNavigation = [
    {
        icon: DashboardIcon,
        title: "Dashboard",
        path: "/admin-dashboard",
    },
    {
        icon: InternsIcon,
        title: "Interns",
        path: "/admin-interns",
    },
    {
        icon: LogIcon,
        title: "Weekly Log",
        path: "#",
    },
    {
        icon: HatIcon,
        title: "Companies",
        path: "/admin-companies",
    },
    {
        icon: TaskIcon,
        title: "Applications",
        path: "/admin-applications",
    },
];

export const companyNavigation = [
    {
        icon: DashboardIcon,
        title: "Dashboard",
        path: "/company-dashboard",
    },
    {
        icon: InternsIcon,
        title: "Interns",
        path: "/company-interns",
    },
    {
        icon: LogIcon,
        title: "Weekly Log",
        path: "#",
    },
    {
        icon: TaskIcon,
        title: "Assign Tasks",
        path: "#",
    },
];

export const internNavigation = [
    {
        icon: DashboardIcon,
        title: "Dashboard",
        path: "/intern-dashboard",
    },
    {
        icon: LogIcon,
        title: "Weekly Log",
        path: "/intern-weeklyLog",
    },
    {
        icon: TaskIcon,
        title: "Tasks",
        path: "/intern-tasks",
    },
];

export const allowedRoutes = {
    admin: [
        "admin-dashboard",
        "admin-interns",
        "admin-companies",
        "admin-weeklyLog",
        "admin-intern-match",
        "admin-company-assign",
        "admin-applications",
        "admin-applications/intern",
        "admin-applications/company",
    ],
    company: ["company-dashboard", "company-interns", "company-weeklyLog", "company-assignTasks"],
    Intern: [
        "intern-dashboard",
        "intern-weeklyLog",
        "intern-tasks",
        "intern-profile",
        "intern-tasks/detail",
    ],
};
