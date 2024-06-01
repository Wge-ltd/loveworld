// const SignUpInternDetail = ({onPageChange, internData,setInternData}) => {

//   const LoginSchema = object().shape({
//       institution: string(),
//       level: number(),
//   });

//   const initialValues = {
//       institution:  "",
//       level: "",
//   };

//   const handleSubmit = async (formik) => {
//       const isValid = await formik.validateForm(formik.values);
//       onSubmit(formik.values, isValid);
//   };

//   const onSubmit = async (newData, errors) => {
//       const isFormValid = Object.values(errors).every(value => value === undefined);
//       if (isFormValid) {
//       setInternData(prev => ({
//           ...prev,
//           institution: newData?.institution,
//           level: newData?.level,
//           internPhoneNumber: '+92343436',
//       }));
//       const data = {
//           ...internData,
//           institution: newData?.institution,
//           level: newData?.level,
//           internPhoneNumber: '+92343436',
//       }
//       console.log("calling...")
//       await register(data)
//           .then(res => {
//               console.log("res",res)
//               toast.success(res?.data?.msg)
//           })
//           .catch(e => {
//               console.log("error", e);
//               toast.error(e?.response?.data?.msg)
//           })
//       return;
//       // onPageChange("intern-signupSetup")
//       } else {
//       toast.error("Fills form correctly!");
//       }
//   };

//   return (
//       <>
//           <div className="login_main">
//           <h1>Almost there</h1>
//           <p>Just a few more details</p>

//           <Formik
//           initialValues={initialValues}
//           validationSchema={LoginSchema}
//           onSubmit={(values) => {
//               console.log(values);
//           }}
//           >
//           {(formik) => {
//               const { errors, touched, isValid, dirty } = formik;
//               return (
//               <Form>
//                   <TextInput
//                   label="Institution"
//                   id="institution"
//                   name="institution"
//                   placeholder = "Enter your Institution"
//                   touched={touched}
//                   error={errors.institution}
//                   />
//                   <TextInput
//                   label="Level"
//                   id="level"
//                   name="level"
//                   touched={touched}
//                   // error={errors.country}
//                   />
//                   <TextInput
//                   label="Field"
//                   id="field"
//                   name="field"
//                   touched={touched}
//                   // error={errors.password}
//                   />
//                   <TextInput
//                   label="Graduation Date"
//                   id="gradDate"
//                   name="gradDate"
//                   touched={touched}
//                   // error={errors.password}
//                   />

//                   <button
//                   type="submit"
//                   disabled={!(dirty && isValid)}
//                   className="login_button"
//                   onClick={() => handleSubmit(formik)}
//                   >
//                   Next
//                   </button>
//               </Form>
//               );
//           }}
//           </Formik>
//           <button className="signup_prevButton" onClick={() => onPageChange("intern-signupSetup")}>
//           Previous
//           </button>
//           </div>
//           <div className="login_image">
//           <img src={LoginImage}  alt="login" />
//           </div>
//       </>
// )
// }

// const EnhanceEmployData = [
//   {
//     title: "64%*",
//     description:
//       "of university students say work experience requirements are the largest barrier to finding work",
//     subTitle: "Prospects/Jisc, “Early Careers Survey” 2021",
//   },
//   {
//     title: "78%*",
//     description:
//       "of surveyed CEOs agree that remote collaboration is here to stay for the long term",
//     subTitle: "PwC, “CEO Panel Survey”, 2020",
//   },
//   {
//     title: "1 in 4",
//     description:
//       "VI interns are offered further opportunities with their host company immediately upon completion",
//     subTitle: "End of program feedback data, 2023",
//   },
// ];

// const EnhanceEmployability = () => {
//   return (
//     <div className="enhanceEmploy">
//       <div className="enhanceEmployContent">
//         <h1>Enhancing Employability</h1>
//         <p>
//           The world is evolving and it’s clear that remote work is here to stay.
//           By investing in gaining remote work experience, you will be investing
//           in your future employability.
//         </p>
//         <div className="enhanceEmploy_main">
//           {EnhanceEmployData.map((d, i) => (
//             <div key={i} className="enhanceEmploy_box">
//               <h3>{d.title}</h3>
//               <p>{d.description}</p>
//               <span>{d.subTitle}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <GroupImage />
//     </div>
//   );
// };

// const SignUpCompanyDetail = ({onPageChange}) => {

// const LoginSchema = object().shape({
//     // dob: date().max(new Date()),
//     // country: string(),
// });

// const initialValues = {
//     // dob: "",
//     // country: "",
// };

// return (
//     <>
//         <div className="login_main">
//         <h1>Almost there</h1>
//         <p>Just a few more details</p>
//         <Formik
//         initialValues={initialValues}
//         validationSchema={LoginSchema}
//         onSubmit={(values) => {
//             console.log(values);
//         }}
//         >
//         {(formik) => {
//             const { errors, touched, isValid, dirty } = formik;
//             return (
//             <Form>
//                 <Select
//                     label="Interest field"
//                     name="interest"
//                     id="interest"
//                     options ={["Accounting","Finance", "Engineering", "Development"]}
//                     touched = {touched}
//                 />
//                 <Select
//                     label="Type of intern"
//                     name="type"
//                     id="type"
//                     options ={["Remote only","Onsite", "Hybrid","USA based"]}
//                     touched = {touched}
//                 />
//                 <Select
//                     label="Duration"
//                     name="duration"
//                     id="duration"
//                     options ={["6 months","3 month", "1 year"]}
//                     touched = {touched}
//                 />
//                 <TextInput
//                 label="Description of work the intern will do"
//                 id="description"
//                 name="description"
//                 as="textarea"
//                 touched={touched}
//                 />
//                 <button
//                 type="submit"
//                 // disabled={!(dirty && isValid)}
//                 className="login_button"
//                 onClick={() => onPageChange("main")}
//                 >
//                 Next
//                 </button>
//             </Form>
//             );
//         }}
//         </Formik>

//         <button className="signup_prevButton" onClick={() => onPageChange("company-signupSetup")}>
//         Previous
//         </button>
//         </div>
//         <div className="login_image">
//         <img src={LoginImage}  alt="login" />
//         </div>

//     </>
// )
// }

// {
//     <div className="sidebar_info">
//           {bottomNav?.map((n, i) => (
//             <div
//               key={i}
//               id={i}
//               className={`sidebar_navItem ${
//                 n.path === currentTab && `sidebar_navActive`
//               }`}
//             >
//               <n.icon />
//               <span>{n.title}</span>
//             </div>
//           ))}
//         </div>
// }

// export const  = async (data) => {
//   const res = await api.post(
//     "https://testloveworldinternship.azurewebsites.net/api/v1/auth/login",
//     data
//     // {
//     //   xsrfHeaderName: "X-XSRF-TOKEN",
//     //   xsrfCookieName: "XSRF-TOKEN",
//     //   withCredentials: true,
//     // }
//   );
//   return res;
// };

// import GroupImage from "../../components/GroupImage";
// import Person1 from "../../assets/Person1.jpeg";
// import Person2 from "../../assets/Person2.jpeg";
// import Person3 from "../../assets/Person3.jpeg";
// import Person4 from "../../assets/Person4.jpeg";
// import Person5 from "../../assets/Person5.jpeg";
// import { useNavigate } from "react-router-dom";

// const BackedBy = () => {
//   const width = useWindowWidth();
//   const isLargeScreen = width < 992;

//   return (
//     <div className="about_backedBy">
//       <GroupImage left={!isLargeScreen} />
//       <div className="about_backedByContent">
//         <h1>Backed by the Best!</h1>
//         <p>
//           We are backed by some of the world’s top investors who were early
//           investors in companies such as LinkedIn, AirBnB, Zoom, WhatsApp,
//           Udemy, ApplyBoard, and we’re scaling fast….
//         </p>
//         <div className="about_backedByBoxes">
//           <div className="about_backedByBox">
//             <h3>120+</h3>
//             <p>VI-ers</p>
//           </div>
//           <div className="about_backedByBox">
//             <h3>25+</h3>
//             <p>Countries with Remote Employees</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const AboutTeam = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="about_team">
//       <div className="about_teamMain">
//         <div className="about_teamContent">
//           <h1>Our Incredible Team</h1>
//           <p>
//             When you’re backed by big names you need a highly skilled and
//             professional team to maintain those high standards! We’re incredibly
//             lucky to have such an amazing team behind us!
//           </p>
//           <button onClick={() => navigate("/team")}>Meet the Team</button>
//         </div>
//         <div className="about_teamImages">
//           <div className="about_teamImages1">
//             <img src={Person1} alt="person" />
//             <img src={Person2} alt="person" />
//           </div>
//           <div className="about_teamImages2">
//             <img src={Person3} alt="person" />
//             <img src={Person4} alt="person" />
//             <img src={Person5} alt="person" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ContentTop = () => {
//   return (
//     <div className="career_top">
//       <h1>Computer Science Internships</h1>
//     </div>
//   );
// };

// const LaunchCareer = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="career_launch">
//       <h3>
//         Launch Your Career in Tech With a Remote Computer Science Internship
//       </h3>
//       <p>
//         As the world becomes increasingly reliant on technology, computer
//         science is one of the fastest-growing career fields. But, to launch a
//         career in tech, your academic qualifications are no longer enough and
//         you need to do more to stand out. One of the ways you can stand out to
//         potential employers is by demonstrating real-world global experience
//         through a remote internship in computer science. From building an app to
//         coding a platform update, you’ll take on key projects within a team and
//         build on your technical skills, all whilst increasing your understanding
//         of the importance of technology in today’s markets and cross-cultural
//         communications.
//       </p>
//       <button className="career_button" onClick={() => navigate("/sign-up")}>
//         Enroll Now
//       </button>
//     </div>
//   );
// };

// const KeyTakeaways = () => {
//   return (
//     <div className="career_keyTake">
//       <div className="container">
//         <h1>Key Takeaways</h1>
//         <p>
//           Key skills you will learn during A tech Startup and entrepreneurial
//           internship
//         </p>
//         <div className="career_keyTakeBoxes">
//           <div className="career_keyTakeBox">
//             <div>Software Development and Data Analysis </div>
//           </div>
//           <div className="career_keyTakeBox">
//             <div>Project Management</div>
//           </div>
//           <div className="career_keyTakeBox">
//             <div>Problem Solving</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
