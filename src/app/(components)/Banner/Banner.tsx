import React from "react";
// Assuming 'jotia' is a custom font configured in your Tailwind setup.
// If not, you might need to import it differently, e.g., via a CSS import.
// import { jotia } from "../../fonts";

const Banner = () => {
  // Style objects for the glow effects. These are fine as they are.
  const glowContainerBase = {
    position: "absolute",
    width: "150%",
    height: "150%",
    zIndex: -1,
  };

  const bottomLeftGlowContainer = {
    ...glowContainerBase,
    bottom: "-50%",
    left: "-50%",
  };

  const topRightGlowContainer = {
    ...glowContainerBase,
    top: "-50%",
    right: "-50%",
  };

  const glowElementBase = {
    position: "absolute",
    filter: "blur(100px)",
  };

  const bottomLeftGlow1 = {
    ...glowElementBase,
    width: "50%",
    height: "80%",
    bottom: "0",
    left: "0",
    background: "rgba(255, 50, 200, 0.6)",
  };

  const bottomLeftGlow2 = {
    ...glowElementBase,
    width: "50%",
    height: "60%",
    bottom: "10%",
    left: "10%",
    background: "rgba(255, 105, 180, 0.5)",
  };

  const topRightGlow1 = {
    ...glowElementBase,
    width: "50%",
    height: "70%",
    top: "0",
    right: "0",
    background: "rgba(255, 50, 200, 0.6)",
  };

  const topRightGlow2 = {
    ...glowElementBase,
    width: "50%",
    height: "60%",
    top: "10%",
    right: "10%",
    background: "rgba(255, 105, 180, 0.5)",
  };

  // The 'jotia' font class is commented out here as the import is commented out.
  // Add it back if you have it configured.
  const jotiaClassName = ""; // jotia;

  return (
    <section className="flex flex-col items-center justify-center px-4 mt-[68px]">
      {/* Main Banner Container
        - Width and Height now use clamp() for fluid scaling between your specified min/max sizes.
        - The calculation `calc(264.81px + 9.385vw)` creates a linear slope for the height 
          between 300px (at 375px viewport) and 445px (at 1920px viewport).
        - Styling is consolidated into Tailwind classes for consistency.
        - Flex properties are added to center the content vertically and horizontally.
      */}
      <div className="relative flex flex-col items-center justify-center w-[clamp(325px,90vw,1320px)] h-[clamp(300px,calc(264.81px+9.385vw),445px)] max-w-full overflow-hidden rounded-[20px] bg-[rgba(10,5,15,0.5)] border border-white/20 p-8 text-center shadow-lg sm:rounded-[26px] md:p-20">
        {/* Glow Containers */}
        <div style={bottomLeftGlowContainer}>
          <div style={bottomLeftGlow1} />
          <div style={bottomLeftGlow2} />
        </div>
        <div style={topRightGlowContainer}>
          <div style={topRightGlow1} />
          <div style={topRightGlow2} />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h2
            className={`${jotiaClassName} text-2xl sm:text-[56px] font-medium leading-[34px] sm:leading-[80px] tracking-[0%] text-white`}
          >
            Join Our Community <br className="sm:hidden" /> At Kinefelo
          </h2>
          <p
            className="sm:mt-[1.5rem] mt-[0.5rem] max-w-2xl text-base text-white/80
  sm:text-xl text-sm sm:leading-[30px] leading-[22px] tracking-[0%] sm:font-normal capitalize"
          >
            We’re building more than products
            <br className="sm:hidden" /> we’re building a culture of growth, creativity, and impact.
          </p>
          <button
            className="flex items-center justify-center sm:w-[213px] sm:h-[55px] w-[185px] h-[42px] sm:mt-[32px] mt-[20px]
    cursor-pointer sm:font-medium font-normal sm:text-base text-sm sm:leading-[100%] leading-[22px] tracking-[0%] mt-8 rounded-[100px]
    px-8 py-3 text-white transition-all duration-300
    bg-gradient-to-r from-[rgba(102,22,66,1)] to-[rgba(110,31,75,1)]
    border border-[rgba(255,255,255,0.1)]
    shadow-[inset_1px_1px_5px_2px_rgba(187,40,102,1)]
    hover:bg-gradient-to-b hover:from-[#B82173] hover:to-[#6E1F4B]
    hover:shadow-[inset_0px_4px_4px_0px_rgba(255,36,157,1),inset_0px_-4px_4px_0px_rgba(162,40,108,1)] whitespace-nowrap"
          >
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
