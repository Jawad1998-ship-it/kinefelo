"use client";
import React, { useState, useEffect, useRef } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { jotia } from "../fonts";
import Image from "next/image";
import Banner from "../(components)/Banner/Banner";
import JobSocialIcons from "../(components)/SocialIcons/JobSocialIcons";
import Loading from "../loading";
import toast from "react-hot-toast";
import useAxios from "@/hooks/axiosContext";
import Link from "next/link";
import { useAppSelector } from "../redux";
import { useRouter } from "next/navigation";

// SVG Icons (unchanged)
const CalendarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);
const LocationIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const DollarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"
    />
  </svg>
);
const ChevronLeftIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRightIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);
const ChevronDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);
const SearchIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const Careers = () => {
  const { get, post } = useAxios();
  const currentUser = useAppSelector((state) => state.global.currentUser);
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedJobType, setSelectedJobType] = useState("All Jobs");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobTypes, setJobTypes] = useState(["All Jobs"]);
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const dropdownRef = useRef(null);
  // Handle click outside to close dropdown
  useOnClickOutside(dropdownRef, () => setIsDropdownOpen(false));
  const handleApply = async (id) => {
    if (!currentUser) {
      toast.error("You need to login first to apply!");
      router.push("/login");
      return;
    }
    try {
      const response = await post("/apply", {
        job_id: id,
        cover_letter: currentUser?.cover_letter,
      });
      // console.log(id, currentUser?.cover_letter);
      // console.log(response);
      return;
      // router.push("/careers");
      if (response?.data?.status === "success") {
        toast.dismiss();
        toast.success("Applied!", {
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
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error);
    }
  };
  // Fetch jobs and derive job types
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const response = await get("/jobs");
        if (response?.status === 200) {
          const jobData = response?.data?.data || [];
          setJobs(jobData);
          // Extract unique job types
          const uniqueJobTypes = ["All Jobs", ...new Set(jobData?.map((job) => job?.job_type))];
          setJobTypes(uniqueJobTypes);
        } else {
          throw new Error("Failed to fetch jobs");
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        toast.error("Failed to load jobs");
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Filter jobs based on selected job type
  useEffect(() => {
    if (selectedJobType === "All Jobs") {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs?.filter((job) => job?.job_type === selectedJobType));
    }
  }, [selectedJobType, jobs]);

  const handleJobTypeSelect = (jobType) => {
    setSelectedJobType(jobType);
    setIsDropdownOpen(false);
  };

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  // console.log(jobs);
  return (
    <div className="min-h-screen">
      <div className="container h-full mx-auto">
        {/* Hero Section (unchanged) */}
        <section className="text-center">
          <h1
            className={`${jotia.className} text-white sm:mt-[120px] mt-[32px] font-medium sm:text-[4.688rem] text-[2rem] bg-gradient-to-r from-white to-custom-pink bg-clip-text 
            sm:leading-[90px] leading-[100%] tracking-[0%]`}
          >
            Build Your Future <br /> With Kinefelo
          </h1>
          <p
            className={`${inter.className} sm:text-xl text-base font-normal sm:font-medium sm:mt-[12px] mt-[16px]
            sm:mb-[60px] mb-[32px] max-w-2xl mx-auto 
            text-[rgba(255,255,255,0.8)] sm:leading-[30px] leading-[26px] tracking-[0%] capitalize`}
          >
            At Kinefelo, we’re building tools that <br /> empower businesses and we’re just <br /> getting started.
          </p>
          <div className="flex justify-center sm:mb-[100px] mb-[40px]">
            <div className="relative sm:h-[59px] sm:w-[640px] h-[50px] w-[326px]">
              {/* Left-side decorative icon */}
              <div className="absolute z-10 -translate-y-1/2 pointer-events-none left-6 top-1/2">
                <SearchIcon className="w-5 h-5 text-gray-400" />
              </div>

              <input
                type="text"
                className="w-full h-full 
            rounded-[100px] text-white placeholder-gray-400 text-base font-normal 
            py-4 pl-14 pr-16 sm:pr-[120px] 
            bg-white/[.17] 
            border border-white 
            backdrop-blur-[11.2px] 
            focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Search Your Job"
              />

              {/* Desktop Button (visible sm and up) */}
              <button className="hidden sm:flex h-[39px] w-[102px] absolute bg-white text-[rgba(22,12,12,1)] right-2 top-1/2 -translate-y-1/2 items-center justify-center font-normal text-base px-[16px] py-[10px] rounded-[100px] hover:bg-gray-200 transition-colors">
                Search
              </button>

              {/* Mobile Icon Button (hidden sm and up) */}
              <button className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 h-[39px] w-[39px] flex items-center justify-center bg-white rounded-full hover:bg-gray-200 transition-colors">
                <SearchIcon className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </section>

        <main
          className="mx-auto flex flex-col justify-center rounded-[32px] max-w-full sm:w-[1320px] w-[326px] 
        bg-gradient-to-b from-white/5 to-transparent"
        >
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <Loading />
            </div>
          ) : (
            <>
              <div
                className="w-full sm:pt-[3.125rem] sm:pb-[6.563rem] pt-0 pb-0 sm:px-[3.125rem] px-0 flex flex-col sm:flex-row 
              flex-wrap mx-auto justify-between items-center gap-4 mb-8"
              >
                <div className="flex sm:hidden items-center pt-[2rem] pb-[2rem] px-[2.313rem] space-x-[12px] text-gray-400">
                  <JobSocialIcons />
                </div>
                <div
                  ref={dropdownRef}
                  className="flex flex-wrap items-center gap-2 px-[0.938rem] sm:px-0 bg-transparent sm:justify-center"
                >
                  <div className="inline-flex items-center mx-auto bg-[#2a2a2a] gap-[13px] p-1 rounded-full border border-transparent">
                    <button
                      onClick={() => handleJobTypeSelect("All Jobs")}
                      className={`flex leading-[100%] tracking-[0%] text-base font-normal items-center justify-center w-[92px] h-[33px] 
                        px-[16px] py-[7px] sm:text-base 
                      rounded-[100px] cursor-pointer whitespace-nowrap
                      ${
                        selectedJobType === "All Jobs"
                          ? "bg-white text-black"
                          : "bg-gray-700/50 hover:bg-white hover:text-black"
                      }`}
                    >
                      All Jobs
                    </button>
                    <button
                      className="flex items-center justify-center w-[169px] h-[33px] px-[16px] py-[9px] text-base font-normal leading-[100%] tracking-[0%]
    rounded-[100px] cursor-pointer whitespace-nowrap 
    bg-white/10 border border-white/10 text-white"
                    >
                      Most Recent Jobs
                    </button>
                  </div>
                  {/* Job Type Dropdown */}
                  <div className="relative sm:pt-0 pt-[1.5rem] ">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center justify-between w-[296px] sm:w-[293px] 
  h-[50px] px-[16px] py-[9px]
  rounded-[100px] cursor-pointer bg-transparent whitespace-nowrap border border-white"
                    >
                      {/* The className below has been updated */}
                      <span className="text-base font-normal leading-[100%] tracking-[0%] text-[rgba(255,255,255,0.5)]">
                        {selectedJobType !== "All Jobs" ? selectedJobType : "Job Category"}
                      </span>
                      <ChevronDownIcon
                        className={`ml-2 w-4 h-4 transition-transform duration-200 text-white ${
                          isDropdownOpen ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div
                        className="absolute z-20 mt-2 right-0 w-full sm:w-64 2xl:w-[304px] 
             max-h-80 2xl:max-h-[628px] overflow-y-auto rounded-2xl 
             border border-white/20 bg-gray-900/80 shadow-2xl 
             backdrop-blur-xl backdrop-saturate-150"
                      >
                        <ul className="py-2 space-y-2 mt-[20px]">
                          {jobTypes?.map((type) => (
                            <li
                              key={type}
                              onClick={() => handleJobTypeSelect(type)}
                              className="flex justify-center w-full px-[20px] cursor-pointer"
                            >
                              <div
                                className={`text-sm transition-all duration-200 flex items-center h-[40px] sm:h-[45px] 2xl:h-[50px] w-[200px] sm:w-[220px] 2xl:w-[254px] px-3 sm:px-4 ${
                                  selectedJobType === type
                                    ? "text-white bg-white/15 font-semibold rounded-[100px]"
                                    : "text-gray-200 hover:text-white hover:bg-white/15 hover:rounded-[100px]"
                                }`}
                              >
                                {type}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="sm:flex hidden items-center lg:mx-0 mx-auto space-x-[12px] text-gray-400">
                  <JobSocialIcons />
                </div>
              </div>

              <div className="gap-x-[30px] gap-y-[30px] mx-auto grid md:grid-cols-1 2xl:grid-cols-2 justify-center">
                {/* {!filteredJobs && <p>No Jobs Available to show at the moment</p>} */}
                {filteredJobs?.map((job, index) => (
                  <div
                    key={index}
                    className="bg-[#2a2a2a] p-[15px]  sm:p-6 rounded-[20px] shadow-lg hover:shadow-pink-500/10 transition-shadow duration-300 
    flex flex-col justify-between border border-[rgba(255,255,255,0.1)] max-w-full
    w-[301px] h-[190px] sm:w-[608px] sm:h-[278px]"
                  >
                    {/* Top section: Title and Details */}
                    <div>
                      <h3 className="sm:mb-[2.2rem] mb-4">
                        {" "}
                        {/* Adjusted margin for consistency */}
                        <div className="flex items-center">
                          <Image
                            height={40}
                            width={40}
                            src="/images/briefcase.png"
                            alt="Briefcase Icon"
                            className="mr-3"
                          />
                          <div className="flex flex-col">
                            <div className="sm:text-2xl text-white text-base leading-[100%] tracking-[0%] font-medium text-whitespan">
                              {job?.title}
                            </div>
                            <span className="sm:hidden text-white/50 font-normal text-xs leading-[20px] tracking-[0%] flex items-start">
                              {job?.job_type}, {job?.job_location_type} {/* Example: Full Time, Remote */}
                            </span>
                          </div>
                        </div>
                      </h3>

                      {/* ==================== START: CORRECTED LAYOUT SECTION ==================== */}

                      {/* Mobile Layout (Visible on small screens, hidden on sm and up) */}
                      <div className="sm:hidden flex flex-col">
                        {/* Row 1: Deadline and Salary */}
                        <div className="flex flex-row items-center space-x-3">
                          {/* Deadline Pill */}
                          <span className="font-normal text-white text-xs leading-[22px] tracking-[0%] border border-[rgba(255,255,255,0.1)] rounded-[100px] px-[10px] py-[2px]">
                            <span className="text-gray-400">Deadline:</span>{" "}
                            {job?.deadline
                              ? new Date(job?.deadline).toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "2-digit",
                                })
                              : "N/A"}
                          </span>
                          {/* Salary Pill */}
                          <span className="font-normal text-white text-xs leading-[22px] tracking-[0%] border border-[rgba(255,255,255,0.1)] rounded-[100px] px-[10px] py-[2px]">
                            Upto {job?.salary_to}
                          </span>
                        </div>
                        {/* Row 2: Location */}
                        <div className="flex items-center  mt-[8px] mb-[10px]">
                          <span className="font-normal text-xs text-white leading-[22px] tracking-[0%]">
                            <span className="text-gray-400">Location:</span> {job?.job_location}
                          </span>
                        </div>
                      </div>

                      {/* Desktop Layout (Hidden on small screens, visible as a grid on sm and up) */}
                      <div className="hidden sm:grid grid-cols-2 text-base text-white gap-y-3 sm:gap-x-6">
                        {/* Job Type */}
                        <div className="flex items-center">
                          <Image
                            height={24}
                            width={24}
                            src="/images/briefcase.png"
                            alt="Job Type Icon"
                            className="w-6 h-6 mr-3"
                          />
                          <span>
                            <span className="text-gray-400">Job Type:</span> {job?.job_type}
                          </span>
                        </div>
                        {/* Salary */}
                        <div className="flex items-center">
                          <DollarIcon className="w-6 h-6 mr-3 text-gray-400" />
                          <span>
                            <span className="text-gray-400">Salary:</span> {job?.salary_from} - {job?.salary_to}
                          </span>
                        </div>
                        {/* Deadline */}
                        <div className="flex items-center">
                          <CalendarIcon className="w-6 h-6 mr-3 text-gray-400" />
                          <span>
                            <span className="text-gray-400">Deadline:</span>{" "}
                            {job?.deadline
                              ? new Date(job.deadline).toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                })
                              : "N/A"}
                          </span>
                        </div>
                        {/* Location */}
                        <div className="flex items-center">
                          <LocationIcon className="w-6 h-6 mr-3 text-gray-400" />
                          <span>
                            <span className="text-gray-400">Location:</span> {job?.job_location}
                          </span>
                        </div>
                      </div>

                      {/* ==================== END: CORRECTED LAYOUT SECTION ==================== */}
                    </div>

                    {/* Bottom section: Action Buttons */}
                    <div className="flex flex-row justify-start space-x-4">
                      {/* Adjusted to left-align */}
                      <Link
                        href={`/job-details/${job?.slug}`}
                        className="w-[120px] sm:w-[264px] h-[29px] sm:h-[39px] flex items-center 
                      justify-center border border-[rgba(255,255,255,0.1)] px-[16px] rounded-[100px] 
                      bg-gray-600/50 text-white hover:bg-gray-500/50 transition-colors cursor-pointer"
                      >
                        Job Details
                      </Link>
                      <button
                        onClick={() => handleApply(job?.id)}
                        className={
                          currentUser?.apply === "Yes"
                            ? "w-[120px] sm:w-[264px] h-[29px] sm:h-[39px] flex items-center justify-center px-[16px] text-gray-400 text-center rounded-[100px] border border-gray-200 bg-white cursor-not-allowed"
                            : "w-[120px] sm:w-[264px] h-[29px] sm:h-[39px] flex items-center justify-center px-[16px] text-white text-center rounded-[100px] border border-[rgba(255,255,255,0.1)] bg-gradient-to-r from-[rgba(102,22,66,1)] to-[rgba(110,31,75,1)] shadow-[inset_1px_1px_5px_2px_rgba(187,40,102,1)] transition duration-300 ease-in-out hover:bg-gradient-to-b hover:from-[#B82173] hover:to-[#6E1F4B] hover:shadow-[inset_0px_4px_4px_0px_rgba(255,36,157,1),inset_0px_-4px_4px_0px_rgba(162,40,108,1)] cursor-pointer"
                        }
                        type="button"
                        disabled={currentUser?.apply === "Yes"}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center sm:pt-[60px] sm:pb-[68px] pb-[42px] pt-[32px] bg-transparent">
                <nav aria-label="Page navigation">
                  <ul className="flex items-center space-x-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center w-24 h-10 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-full transition-colors hover:bg-gray-800"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-400 bg-transparent border border-gray-600 rounded-full transition-colors hover:border-white hover:text-white"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-400 bg-transparent border border-gray-600 rounded-full transition-colors hover:border-white hover:text-white"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center w-10 h-10 text-sm font-medium text-gray-400 bg-transparent border border-gray-600 rounded-full transition-colors hover:border-white hover:text-white"
                      >
                        3
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center w-24 h-10 text-sm font-medium text-black bg-gray-300 rounded-full transition-colors hover:bg-white"
                      >
                        Next
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </>
          )}
        </main>
      </div>
      <Banner />
    </div>
  );
};

export default Careers;
