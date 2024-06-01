// import React, {useEffect} from 'react'
// import { emailVerfication } from '../../APIs/auth';
// import { toast } from 'react-toastify';
// import { useNavigate, useParams } from 'react-router-dom';

// const EmailVerification = () => {
//     const navigate = useNavigate();
//     const {token,email} = useParams();

//     function extractTokenAndEmailFromURL(urlString) {
//         const url = new URL(urlString);
//         const token = url.searchParams.get("token");
//         const email = url.searchParams.get("email");

//         return { token, email };
//     }

//     useEffect(() => {
//         const currentURL = "localhost:3000?token=34c7aa79ee2a39d6a3440961d08f621e7f3fe595166c141dbdb482c83fca59a70bef26ccc8738585&email=bsef20m038@pucit.edu.pk"
//         // const currentURL = window.location.href

//         const { token, email } = extractTokenAndEmailFromURL(currentURL);

//         const data = {
//             "email": email,
//             "verificationToken": token,
//         }

//         async function verifyEmail() {
//             try {
//                 const res = await emailVerfication(data)
//                 if(res?.status === 200) {
//                     toast.success(res?.data?.msg)
//                     navigate(`/intern-dashboard`)
//                 }
//             } catch (error) {
//                 if(error?.response?.status === 401) {
//                     toast.error(`${error?.response?.data?.msg}!, Email already verified`)
//                 }
//             }
//         }

//         // verifyEmail();
//     }, []);

//   return (
//     <h1>
//         Thank you to verify your email
//     </h1>
//   )
// }

// export default EmailVerification
