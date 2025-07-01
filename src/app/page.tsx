"use client";

import React from "react";
import Hero from "./(components)/Hero/Hero";
import Hiring from "./(components)/Hiring/Hiring";
import Socials from "./(components)/Socials/Socials";
import HomeWrapper from "./homeWrapper";

const Home = () => {
  return (
    <HomeWrapper>
      <div className="w-full">
        <Hero />
        <Hiring />
        <Socials />
      </div>
    </HomeWrapper>
  );
};

export default Home;
