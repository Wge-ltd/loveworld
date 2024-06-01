import { useQuery } from "@tanstack/react-query";

import { axios } from "../axios";
import URLS from "../urls";

// Dashboard
export const useGetInternDashboard = () => {
    const getInternDashboard = useQuery({
        queryKey: ["intern-dashboard"],
        queryFn: async () => {
            const res = await axios.get(URLS.DASHBOARD_INTERN);
            return res?.data;
        },
    });

    return getInternDashboard;
};

export const useGetCompanyDashboard = () => {
    const getCompanyDashboard = useQuery({
        queryKey: ["company-dashboard"],
        queryFn: async () => {
            const res = await axios.get(URLS.DASHBOARD_COMPANY);
            return res?.data;
        },
    });

    return getCompanyDashboard;
};

export const useGetCompanyInternDashboard = () => {
    const getDashboard = useQuery({
        queryKey: ["company-intern-dashboard"],
        queryFn: async () => {
            const res = await axios.get(URLS.DASHBOARD_COMPANY_INTERN);
            return res?.data;
        },
    });

    return getDashboard;
};

export const useGetInternProfile = () => {
    const getInternProfile = useQuery({
        queryKey: ["intern"],
        queryFn: async () => {
            const res = await axios.get(URLS.INTERN_PROFILE);
            return res?.data;
        },
    });

    return getInternProfile;
};
