import { useQuery } from "@tanstack/react-query";

import { axios } from "../axios";
import URLS from "../urls";

// Admin
export const useGetAdminDashboard = () => {
    const getAdminDashboard = useQuery({
        queryKey: ["admin-dashboard"],
        queryFn: async () => {
            const res = await axios.get(URLS.ADMIN_DASHBOARD);
            return res?.data;
        },
    });

    return getAdminDashboard;
};

// Admin Interns
export const useGetAllInterns = () => {
    const getAllInterns = useQuery({
        queryKey: ["interns"],
        queryFn: async () => {
            const res = await axios.get(URLS.ALL_INTERNS);
            return res?.data;
        },
    });

    return getAllInterns;
};

export const useGetSingleIntern = (id) => {
    const getSingleIntern = useQuery({
        queryKey: ["intern", id],
        queryFn: async () => {
            const res = await axios.get(URLS.SINGLE_INTERN(id));
            return res?.data;
        },
        enabled: !!id,
    });

    return getSingleIntern;
};

export const useGetSingleInternLog = (id) => {
    const getSingleInternLog = useQuery({
        queryKey: ["intern-log", id],
        queryFn: async () => {
            const res = await axios.get(URLS.SINGLE_INTERN_LOG(id));
            return res?.data;
        },
        enabled: !!id,
    });

    return getSingleInternLog;
};

// Admin Companies
export const useGetAllCompanies = () => {
    const getAllCompanies = useQuery({
        queryKey: ["companies"],
        queryFn: async () => {
            const res = await axios.get(URLS.ALL_COMPANIES);
            return res?.data;
        },
    });

    return getAllCompanies;
};

export const useGetSingleCompany = (id) => {
    const getSingleCompany = useQuery({
        queryKey: ["company", id],
        queryFn: async () => {
            const res = await axios.get(URLS.SINGLE_COMPANY(id));
            return res?.data;
        },
        enabled: !!id,
    });

    return getSingleCompany;
};

// Admin Applications
export const useGetAllInternsApplications = (currentTab) => {
    const getAllInternsApplications = useQuery({
        queryKey: ["interns-applications"],
        queryFn: async () => {
            const res = await axios.get(URLS.ALL_INTERNS_APPLICATIONS);
            return res?.data;
        },
        enabled: currentTab === "INTERNS",
    });

    return getAllInternsApplications;
};

export const useGetSingleInternApplication = (id) => {
    const getSingleInternApplication = useQuery({
        queryKey: ["intern-application", id],
        queryFn: async () => {
            const res = await axios.get(URLS.SINGLE_INTERN_APPLICATION(id));
            return res?.data;
        },
        enabled: !!id,
    });

    return getSingleInternApplication;
};

export const useGetAllCompaniesApplications = (currentTab) => {
    const getAllCompaniesApplications = useQuery({
        queryKey: ["companies-applications"],
        queryFn: async () => {
            const res = await axios.get(URLS.ALL_COMPANIES_APPLICATIONS);
            return res?.data;
        },
        enabled: currentTab === "COMPANIES",
    });

    return getAllCompaniesApplications;
};

export const useGetSingleCompanyApplication = (id) => {
    const getSingleCompanyApplication = useQuery({
        queryKey: ["company-application", id],
        queryFn: async () => {
            const res = await axios.get(URLS.SINGLE_COMPANY_APPLICATION(id));
            return res?.data;
        },
        enabled: !!id,
    });

    return getSingleCompanyApplication;
};

export const useVerifyEmail = (token, email) => {
    const verifyEmail = useQuery({
        queryKey: ["verify-email"],
        queryFn: async () => {
            const res = await axios.post(URLS.VERIFY_EMAIL, { verificationToken: token, email });
            return res?.data;
        },
        enabled: !!token && !!email,
    });

    return verifyEmail;
};
