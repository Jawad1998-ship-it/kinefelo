"use client";

import axios from "axios";
import { useState, useCallback } from "react";

const useAxios = () => {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseURL) {
    console.error("BASE URL is not defined. Please check your host.");
  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Create an Axios instance
  const axiosInstance = axios.create({
    baseURL,
    withCredentials: true, // Ensures cookies are sent with requests
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Add request interceptor to log cookies
  axiosInstance.interceptors.request.use(
    (config) => {
      // Log all cookies available in the browser
      console.log("🍪 All browser cookies:", document.cookie);

      // Log the specific cookie header that will be sent (if any)
      console.log("📤 Request headers:", config.headers);

      // Check if u_token specifically exists
      const cookies = document.cookie.split(";");
      const uToken = cookies.find((cookie) => cookie.trim().startsWith("u_token="));
      console.log("🎯 u_token cookie:", uToken || "NOT FOUND");

      console.log("🌐 Request URL:", `${config.baseURL}${config.url}`);
      console.log("🔧 WithCredentials:", config.withCredentials);

      return config;
    },
    (error) => {
      console.error("❌ Request interceptor error:", error);
      return Promise.reject(error);
    }
  );

  // Add response interceptor to log what's received
  axiosInstance.interceptors.response.use(
    (response) => {
      console.log("✅ Response received:", response.status);
      // Log any Set-Cookie headers from the response
      if (response.headers["set-cookie"]) {
        console.log("🍪 Set-Cookie headers received:", response.headers["set-cookie"]);
      }
      return response;
    },
    (error) => {
      console.error("❌ Response error:", error.response?.status, error.response?.data);
      if (error.response?.headers["set-cookie"]) {
        console.log("🍪 Set-Cookie headers in error response:", error.response.headers["set-cookie"]);
      }
      return Promise.reject(error);
    }
  );

  // Generic fetch function
  const fetchData = useCallback(
    async (method, url, data = null, config = {}) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance({
          method,
          url,
          data,
          ...config,
        });
        return response;
      } catch (err) {
        const errorMessage = err.response?.data?.message || "An unknown error occurred";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [axiosInstance]
  );

  // HTTP methods
  const get = useCallback((url, config) => fetchData("GET", url, null, config), [fetchData]);
  const post = useCallback((url, data, config) => fetchData("POST", url, data, config), [fetchData]);
  const put = useCallback((url, data, config) => fetchData("PUT", url, data, config), [fetchData]);
  const del = useCallback((url, config) => fetchData("DELETE", url, null, config), [fetchData]);

  return { get, post, put, del, loading, error };
};

export default useAxios;
