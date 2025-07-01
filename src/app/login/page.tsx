"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, LogIn as LogInIcon, AlertCircle, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { jotia } from "../fonts";
import { useState } from "react";
import useAxios from "../../hooks/axiosContext";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../state";
import { useAppDispatch } from "../redux";
import Cookies from "js-cookie";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { post } = useAxios();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogin = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);

      const response = await post("/login", {
        email: values.email,
        password: values.password,
      });
      console.log(response?.data?.data);
      // const token = response?.data?.data?.token;
      // if (token) {
      //   Cookies.set("u_token", token, {
      //     expires: 1, // 1 day
      //     path: "/",
      //     sameSite: "None", // For cross-origin requests
      //     secure: process.env.NODE_ENV === "production", // Secure in production
      //   });
      //   console.log("u_token set in cookies");
      // }
      // router.push("/careers");
      dispatch(setCurrentUser(response?.data?.data));
      if (response?.data?.status === "success") {
        toast.dismiss();
        toast.success("Welcome back!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error(`${response?.data?.message}`);
      }
      resetForm();
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage = error?.response?.data?.message || error?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="w-full max-w-md px-4 xl:max-w-lg xl:px-0">
        <button
          onClick={() => window.history.back()}
          className="w-[79px] sm:h-[39px] h-[34px] rounded-[100px] sm:px-[10px] px-[10px] py-[6px] text-white bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-transparent 
          flex items-center justify-center gap-[5px]
          xl:absolute xl:top-[120px] xl:left-[300px]
          max-[375px]:relative max-[375px]:mb-6
          hover:bg-gradient-to-b hover:from-[rgba(255,255,255,0.2)] hover:to-[rgba(255,255,255,0.05)] hover:scale-105 transition-transform duration-200"
        >
          <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.69202 0.265105C6.00062 0.594058 5.97457 1.10254 5.63277 1.40011L2.99792 3.69646H14.1667C14.6269 3.69646 15 4.05618 15 4.50001C15 4.94383 14.6269 5.30355 14.1667 5.30355H2.99792L5.63277 7.5999C5.97458 7.89747 6.00061 8.40595 5.69202 8.73491C5.38342 9.06449 4.85673 9.09022 4.51493 8.79266L0.274735 5.09637C0.0996006 4.94383 0 4.72724 0 4.5C0 4.27276 0.0996106 4.05617 0.274735 3.90363L4.51493 0.207343C4.85673 -0.0902242 5.38342 -0.0644722 5.69202 0.265105Z"
              fill="white"
            />
          </svg>
          Back
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full border border-[rgba(255, 255, 255, 0.1)] sm:w-[619px] sm:h-[641px] 
          rounded-[20px] sm:rounded-[26px] sm:py-[2rem] py-[2.313rem] sm:px-[4.625] px-[0.563rem] mt-[1.75rem] xl:mt-0 mx-auto"
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.06) 100%)",
          }}
        >
          <h1
            className={`${jotia.className} capitalize text-center text-white
          sm:text-[32px] text-2xl font-medium sm:leading-[80px] leading-[100%] tracking-[0%]`}
          >
            Log In to Kinefelo
          </h1>
          <form onSubmit={formik.handleSubmit} className="mt-[28px] sm:space-y-[20px] space-y-[16px]">
            <div>
              <div className="flex flex-col items-center mx-auto">
                <label
                  htmlFor="email"
                  className="text-white sm:text-[16px] text-[14px] font-normal text-start sm:w-[472px] w-[306px]
        sm:leading-[26px] leading-[22px] tracking-[0%] mb-[8px]"
                >
                  Email
                </label>
                <div className="relative sm:w-[472px] w-[306px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    {...formik.getFieldProps("email")}
                    className={`
                    border border-white/20 
                    hover:border-white
                    sm:w-[472px] w-[306px] 
                    sm:h-[50px] h-[50px] 
                    border border-white 
                    sm:rounded-[100px] rounded-[100px]
                    px-4
                    font-inter
                    font-normal
                    sm:text-base
                    text-sm
                    sm:leading-[26px]
                    leading-[22px]
                    tracking-[0%]
                    text-white
                    placeholder:text-white/40
                    placeholder:text-[16px]
                    placeholder:font-normal
                    placeholder:leading-[26px]
                    placeholder:tracking-[0%]
                    bg-transparent
                    outline-none
                    focus:ring-2
                    focus:ring-white/20
                    transition-all
                    duration-200
                  `}
                  />
                  <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60" size={20} />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="flex items-center gap-1.5 text-red-500 text-sm font-medium mt-2 sm:w-[472px] w-[306px]">
                    <AlertCircle size={16} /> {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center mx-auto">
                <label
                  htmlFor="password"
                  className="text-white sm:text-[16px] text-[14px] font-normal text-start sm:w-[472px] w-[306px]
        sm:leading-[26px] leading-[22px] tracking-[0%] mb-[8px]"
                >
                  Password
                </label>
                <div className="relative sm:w-[472px] w-[306px]">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Your Password"
                    {...formik.getFieldProps("password")}
                    className={`
      border border-white/20 
      hover:border-white
      sm:w-[472px] w-[306px] 
      sm:h-[50px] h-[50px] 
      border border-white 
      sm:rounded-[100px] rounded-[100px]
      px-4
      font-inter
      font-normal
      sm:text-base
      text-sm
      sm:leading-[26px]
      leading-[22px]
      tracking-[0%]
      text-white
      placeholder:text-white/40
      placeholder:text-[16px]
      placeholder:font-normal
      placeholder:leading-[26px]
      placeholder:tracking-[0%]
      bg-transparent
      outline-none
      focus:ring-2
      focus:ring-white/20
      transition-all
      duration-200
    `}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="flex items-center gap-1.5 text-red-500 text-sm font-medium mt-2 sm:w-[472px] w-[306px]">
                    <AlertCircle size={16} /> {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={formik.isSubmitting}
              className="cursor-pointer mt-[24px] mx-auto flex items-center justify-center w-[306px] h-[50px] sm:w-[472px] sm:h-[55px] sm:py-[10px] 
  px-[16px] py-[18px] sm:leading-[100%] sm:tracking-[0%]
  leading-[22px] tracking-[0%] font-normal lg:font-medium
  bg-gradient-to-r from-[rgba(102,22,66,1)] to-[rgba(110,31,75,1)] 
  text-white sm:text-base text-sm text-center rounded-[100px] 
  border border-[rgba(255,255,255,0.1)]
  transition duration-300 ease-in-out
  shadow-[inset_1px_1px_5px_2px_rgba(187,40,102,1)]
  hover:bg-gradient-to-b hover:from-[#B82173] hover:to-[#6E1F4B]
  hover:shadow-[inset_0px_4px_4px_0px_rgba(255,36,157,1),inset_0px_-4px_4px_0px_rgba(162,40,108,1)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {formik.isSubmitting ? "Signing In..." : "Log In"}
            </motion.button>
          </form>

          <p className="sm:mt-[28px] mt-[16px] capitalize text-center sm:text-base text-xs font-normal sm:leading-[26px] leading-[22px] tracking-[0%] text-white/40">
            Don't have an account?{" "}
            <Link href="/registration" className="text-white transition border-b-2 border-white">
              SignUp
            </Link>
          </p>
          <div className="mt-[24px] mb-[6px] sm:mb-[16px] sm:mt-[32px] flex items-center justify-between">
            <hr className="sm:w-[215px] w-[141px] border border-white/10" />
            <span className="text-white/50 font-normal sm:text-base text-sm sm:leading-[26px] leading-[22px] tracking-[0%]">
              Or
            </span>
            <hr className="sm:w-[215px] w-[141px] border border-white/10" />
          </div>
          <div className="flex items-start justify-center gap-x-[16px]">
            <button
              className="cursor-pointer hover:bg-black hover:text-white flex items-center justify-center gap-1 sm:w-[228px] sm:h-[50px] w-[150px] h-[40px] sm:text-base text-xs text-white sm:leading-[26px]
            leading-[22px] tracking-[0%] font-normal border border-white/10 rounded-[100px]"
            >
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.9076 9.19129C16.9076 8.48204 16.85 7.96447 16.7255 7.42773H8.62646V10.629H13.3804C13.2846 11.4245 12.767 12.6226 11.6168 13.4277L11.6007 13.5348L14.1615 15.5186L14.3389 15.5363C15.9683 14.0315 16.9076 11.8175 16.9076 9.19129Z"
                  fill="white"
                />
                <path
                  d="M8.62648 17.6262C10.9555 17.6262 12.9108 16.8593 14.3389 15.5367L11.6169 13.428C10.8884 13.936 9.91079 14.2907 8.62648 14.2907C6.34535 14.2907 4.40927 12.7859 3.71911 10.7061L3.61795 10.7146L0.955232 12.7753L0.92041 12.8721C2.33892 15.69 5.25266 17.6262 8.62648 17.6262Z"
                  fill="white"
                />
                <path
                  d="M3.7188 10.7057C3.5367 10.169 3.43131 9.59386 3.43131 8.99964C3.43131 8.40535 3.5367 7.8303 3.70922 7.29356L3.7044 7.17925L1.00831 5.08545L0.920103 5.12741C0.335466 6.29675 0 7.60987 0 8.99964C0 10.3894 0.335466 11.7025 0.920103 12.8718L3.7188 10.7057Z"
                  fill="white"
                />
                <path
                  d="M8.62648 3.70897C10.2463 3.70897 11.3389 4.40864 11.9619 4.99334L14.3964 2.61634C12.9012 1.22657 10.9555 0.373535 8.62648 0.373535C5.25266 0.373535 2.33892 2.30962 0.92041 5.12748L3.70953 7.29364C4.40927 5.21377 6.34535 3.70897 8.62648 3.70897Z"
                  fill="white"
                />
              </svg>
              Log in with Google
            </button>
            <button
              className="cursor-pointer hover:bg-black hover:text-white flex items-center justify-center gap-1 sm:w-[228px] sm:h-[50px] w-[150px] h-[40px] sm:text-base text-xs text-white sm:leading-[26px]
            leading-[22px] tracking-[0%] font-normal border border-white/10 rounded-[100px]"
            >
              <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.1924 9.56283C12.2165 12.2868 14.475 13.1933 14.5 13.2048C14.4809 13.2687 14.1391 14.4966 13.3101 15.7649C12.5935 16.8615 11.8497 17.9539 10.6781 17.9766C9.52683 17.9988 9.15664 17.2619 7.84041 17.2619C6.52459 17.2619 6.11328 17.954 5.02348 17.9988C3.89254 18.0436 3.03131 16.8131 2.30876 15.7206C0.832243 13.4858 -0.29612 9.4057 1.21899 6.65155C1.97166 5.28383 3.31674 4.41773 4.77671 4.39552C5.88726 4.37334 6.93546 5.1777 7.61439 5.1777C8.29289 5.1777 9.56668 4.21039 10.9058 4.35245C11.4664 4.37688 13.0401 4.58952 14.0505 6.13794C13.9691 6.19078 12.1728 7.28549 12.1924 9.56283ZM10.0287 2.87397C10.6291 2.1131 11.0332 1.0539 10.923 0C10.0575 0.0364156 9.01099 0.603766 8.39021 1.36422C7.83387 2.03763 7.34664 3.11548 7.47811 4.14852C8.44277 4.22665 9.42825 3.63532 10.0287 2.87397Z"
                  fill="white"
                />
              </svg>
              Log In With Apple
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
