"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, Mail, Lock, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export default function Registration() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      const registrationPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (values.email === "test@kinefelo.com") {
            reject("This email is already registered.");
          } else {
            resolve(
              `Welcome, ${values.fullName}! Check your email to verify your account.`
            );
          }
        }, 1500);
      });

      toast.promise(registrationPromise, {
        loading: "Creating account...",
        success: (message) => {
          setSubmitting(false);
          formik.resetForm();
          return message;
        },
        error: (err) => {
          setSubmitting(false);
          return err;
        },
      });
    },
  });

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-180px)] px-4 py-7">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#21103A]/70 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
          <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent py-2">
            Create an Account
          </h1>
          <p className="text-center text-white/60 mt-2">Join KineFelo today!</p>

          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-4">
            <div>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                  size={20}
                />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  {...formik.getFieldProps("fullName")}
                  className={`w-full bg-white/5 border rounded-lg py-3 pl-11 pr-4 focus:ring-2 focus:outline-none transition-all ${
                    formik.submitCount > 0 && formik.errors.fullName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:ring-pink-400"
                  }`}
                />
              </div>
              {formik.submitCount > 0 && formik.errors.fullName ? (
                <div className="flex items-center gap-1.5 text-red-500 text-sm font-medium mt-2">
                  <AlertCircle size={16} /> {formik.errors.fullName}
                </div>
              ) : null}
            </div>

            <div>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  {...formik.getFieldProps("email")}
                  className={`w-full bg-white/5 border rounded-lg py-3 pl-11 pr-4 focus:ring-2 focus:outline-none transition-all ${
                    formik.submitCount > 0 && formik.errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:ring-pink-400"
                  }`}
                />
              </div>
              {formik.submitCount > 0 && formik.errors.email ? (
                <div className="flex items-center gap-1.5 text-red-500 text-sm font-medium mt-2">
                  <AlertCircle size={16} /> {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                  size={20}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                  className={`w-full bg-white/5 border rounded-lg py-3 pl-11 pr-4 focus:ring-2 focus:outline-none transition-all ${
                    formik.submitCount > 0 && formik.errors.password
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:ring-pink-400"
                  }`}
                />
              </div>
              {formik.submitCount > 0 && formik.errors.password ? (
                <div className="flex items-center gap-1.5 text-red-500 text-sm font-medium mt-2">
                  <AlertCircle size={16} /> {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                  size={20}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  {...formik.getFieldProps("confirmPassword")}
                  className={`w-full bg-white/5 border rounded-lg py-3 pl-11 pr-4 focus:ring-2 focus:outline-none transition-all ${
                    formik.submitCount > 0 && formik.errors.confirmPassword
                      ? "border-red-500 focus:ring-red-500"
                      : "border-white/10 focus:ring-pink-400"
                  }`}
                />
              </div>
              {formik.submitCount > 0 && formik.errors.confirmPassword ? (
                <div className="flex items-center gap-1.5 text-red-500 text-sm font-medium mt-2">
                  <AlertCircle size={16} /> {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>

            <motion.button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full py-3 bg-pink-600 font-semibold rounded-lg hover:bg-pink-700 disabled:bg-pink-800 disabled:cursor-not-allowed transition-all mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {formik.isSubmitting ? "Creating..." : "Create Account"}
            </motion.button>
          </form>

          <p className="text-center text-sm text-white/50 mt-8">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-pink-400 hover:text-pink-300 transition"
            >
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
