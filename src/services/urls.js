// const BASE_URL = "https://testloveworldinternship.azurewebsites.net/api/v1";
const BASE_URL = "https://loveworldintern.azurewebsites.net/api/v1";

const URLS = {
    BASE_URL,
    // Auth
    LOGIN: `${BASE_URL}/auth/login`,
    REGISTER: `${BASE_URL}/auth/register`,
    VERIFY_EMAIL: `${BASE_URL}/auth/verify-email`,
    FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,
    RESET_PASSWORD: `${BASE_URL}/auth/reset-password`,
    LOGOUT: `${BASE_URL}/auth/logout`,
    //Admin
    ADMIN_DASHBOARD: `${BASE_URL}/admin/dashbord`,
    // Admin Interns
    ALL_INTERNS: `${BASE_URL}/admin/all-interns`,
    SINGLE_INTERN: (id) => `${BASE_URL}/admin/single-intern/${id}`,
    UPDATE_INTERN: (id) => `${BASE_URL}/admin/single-intern/${id}`,
    DELETE_INTERN: (id) => `${BASE_URL}/admin/delete-intern/${id}`,
    MATCH_INTERN: `${BASE_URL}/admin/match`,
    SINGLE_INTERN_LOG: (id) => `${BASE_URL}/admin/single-intern-log/${id}`,
    // Admin Companies
    ALL_COMPANIES: `${BASE_URL}/admin/all-companies`,
    SINGLE_COMPANY: (id) => `${BASE_URL}/admin/single-company/${id}`,
    UPDATE_COMPANY: (id) => `${BASE_URL}/admin/single-company/${id}`,
    DELETE_COMPANY: (id) => `${BASE_URL}/admin/delete-company/${id}`,
    // Admin Applications
    ALL_INTERNS_APPLICATIONS: `${BASE_URL}/admin/all-interns-applications`,
    SINGLE_INTERN_APPLICATION: (id) => `${BASE_URL}/admin/single-intern-application/${id}`,
    ALL_COMPANIES_APPLICATIONS: `${BASE_URL}/admin/all-companies-applications`,
    SINGLE_COMPANY_APPLICATION: (id) => `${BASE_URL}/admin/single-company-application/${id}`,
    // Tasks
    INTERN_TASKS: `${BASE_URL}/task/intern-tasks`,
    COMPANY_CREATE_TASK: (id) => `${BASE_URL}/task/company-creat-task/${id}`,
    // Applications
    COMPANY_CREATE_APPLICATION: `${BASE_URL}/application/company-creat`,
    // Dashboard
    DASHBOARD_COMPANY: `${BASE_URL}/dashboard/company`,
    DASHBOARD_INTERN: `${BASE_URL}/dashboard/intern`,
    DASHBOARD_COMPANY_INTERN: `${BASE_URL}/dashboard/company-interns`,
    INTERN_PROFILE: `${BASE_URL}/dashboard/intern-profile`,
    UPDATE_INTERN_PROFILE: (id) => `${BASE_URL}/dashboard/intern-profile/${id}`,
    // Weekly loh
    INTERN_LOG: `${BASE_URL}/weeklyLog/Intern-log`,
    INTERN_LOG_UPDATE: `${BASE_URL}/weeklyLog/intern-log-update`,
    COMPANY_LOG: (id) => `${BASE_URL}/weeklyLog/company-log/${id}`,
    COMPANY_LOG_UPDATE: (id) => `${BASE_URL}/weeklyLog/company-log-update/${id}`,
    // Payment
    PAYMENT: `${BASE_URL}/subscripton/generate-espees-Payment-UrL`,
};

export default URLS;
