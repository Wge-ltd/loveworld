import { object, string, number, array, boolean } from "yup";

export const ContactTeamSchema = object().shape({
    orgName: string().trim().required("Organization Name is required"),
    email: string().trim().email().required("Email is required"),
    firstName: string().trim().required("First Name is required"),
    lastName: string().trim().required("Last Name is required"),
    department: string().trim().required("Department is required"),
    location: string().trim().required("Location is required"),
});

export const RequestNewInternsSchema = object().shape({
    internField: string().trim().required("Required"),
    typeOfIntern: string().trim().required("Required"),
    duration: string().trim().required("Required"),
    descriptionOfWork: string().trim().required("Required"),
});

export const ScheduleMeetingSchema = object().shape({
    time: string().trim().required("Time is required"),
    date: string().trim().required("Date is required"),
    location: string().trim().required("Location is required"),
});

export const WeeklyLogSchema = object().shape({
    hoursWorked: string().trim().required("Hours worked is required"),
    goalsHighlight: string().trim().required("Goals highlight is required"),
    mainCompletedProject: string().trim().required("Main completed project is required"),
    skeellsLearnt: string().trim().required("Skills learnt is required"),
    nextWeekGoals: string().trim().required("Next week goals is required"),
    chalengesFaced: string().trim().required("Challenges faced is required"),
});

export const companyApplicationSchema = object().shape({
    companyName: string().trim().required("Company name is required"),
    companyAddress: string().trim().required("Company address is required"),
    companyPhoneNumber: string().trim().required("Phone number is required"),
    companyWebsite: string().trim().required("Company website is required"),
    internField: string().trim().required("Interest field is required"),
    typeOfIntern: string().trim().required("Type of intern is required"),
    duration: string().trim().required("Duration is required"),
    descriptionOfWork: string().trim().required("Description of work is required"),
});

export const InternApplicationSchema = object().shape({
    firstName: string().trim().required("First Name is required"),
    lastName: string().trim().required("Last Name is required"),
    email: string().trim().email("Invalid email").required("Email is required"),
    country: string().trim(),
    field: string().trim(),
    institution: string().trim(),
    level: string().trim(),
    timeZone: string().trim(),
    applicationDate: string().trim(),
    duration: string().trim(),
    studentType: string().trim(),
});

export const AdminCompanySchema = object().shape({
    companyName: string().trim().required("Company Name is required"),
    companyPhoneNumber: string().trim().required("Company Phone Number is required"),
    companyAddress: string().trim().required("Company Address is required"),
    companyWebsite: string()
        .trim()
        .url("Invalid URL format")
        .required("Company Website is required"),
    intrest: string().trim().required("Interest is required"),
    internDuration: string().trim().required("Intern Duration is required"),
    firstName: string().trim().required("First Name is required"),
    lastName: string().trim().required("Last Name is required"),
    email: string().trim().email("Invalid email format").required("Email is required"),
    supervisorPhoneNumber: string().trim().required("Supervisor Phone Number is required"),
    __t: string().trim().required("__t is required"),
});

export const InternSchema = object().shape({
    firstName: string().trim().required("First name is required"),
    lastName: string().trim().required("Last name is required"),
    email: string().trim().email().required("Email is required"),
    level: string().trim(),
    country: string().trim(),
    institution: string().trim(),
    field: string().trim(),
    graduationDate: string().trim(),
    timeZone: string().trim(),
    dateOfBirth: string().trim(),
    isStudent: boolean(),
});

export const CheckoutSchema = object().shape({
    firstName: string().trim().required("First Name is required"),
    lastName: string().trim().required("Last Name is required"),
    email: string().trim().email().required("Email is required"),
    number: string().min(8, "Must be at least 8 characters").required("Phone number is required"),
    addressOne: string().trim().required("Address is required"),
    addressTwo: string().trim(),
    country: string().trim().required("Country is required"),
    city: string().trim().required("City is required"),
    state: string().trim().required("State is required"),
    zip: string().trim().required("Zip is required"),
});

export const AssignTaskSchema = object().shape({
    intrestField: string().trim().required(),
    duration: string().trim().required(),
    weeklyMinHours: number().required(),
    selectedInterns: string().required(),
    deadLine: string().trim().required(),
    tasks: array().of(
        object().shape({
            title: string().trim().required(),
            description: string().trim().required(),
            type: string().trim(),
        }),
    ),
    // .min(1),
    // .max(4),
});

export const CompanyWeeklyLogSchema = object().shape({
    nextWeekProject: string().trim().required("Required"),
    nextWeekImprovment: string().trim().required("Required"),
    supervisorSignature: string().trim().required("Required"),
    supervisorDate: string().trim().required("Required"),
});

export const LoginSchema = object().shape({
    email: string().trim().email().required("Email is required"),
    password: string().trim().required("Password is required"),
});

export const EnrollCompaniesSchema = object().shape({
    companyName: string().trim().required("Company Name is required"),
    companyAddress: string().trim().required("Address is required"),
    companyPhoneNumber: string()
        .trim()
        .min(8, "Must be at least 8 characters")
        .required("Phone number is required"),
    companyWebsite: string()
        .trim()
        .url("Must begin with http://")
        .required("Website URL is required"),
});

export const SignUpCompanySchema = object().shape({
    firstName: string().trim().required("First Name is required"),
    lastName: string().trim().required("Last Name is required"),
    email: string().trim().email().required("Email is required"),
    password: string()
        .trim()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
});

export const EnrollInternSchema = object().shape({
    firstName: string().trim().required("First Name is required"),
    lastName: string().trim().required("Last Name is required"),
    email: string().trim().email().required("Email is required"),
    password: string()
        .trim()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
});

export const SignUpInternSchema = object().shape({
    country: string().trim().required("Country is required"),
    institution: string().trim().required("Institution is required"),
    level: number().required("Level is required"),
    internPhoneNumber: string()
        .trim()
        .min(8, "Must be at least 8 characters")
        .required("Phone number is required"),
});
