import Footer from "../(components)/Footer/Footer";
import Navbar from "../(components)/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#0d0007] overflow-hidden">
      {/* Background glow effects - positioned absolutely but not affecting layout */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Wrapper for glows that only appear on LARGE screens (lg and up) */}
        <div className="hidden lg:block">
          <div
            className="absolute"
            style={{
              width: "800px",
              height: "800px",
              left: "-400px",
              top: "-400px",
              background: "radial-gradient(ellipse, rgba(255, 33, 194, 0.4) 0%, rgba(13, 0, 7, 0) 70%)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "800px",
              height: "800px",
              top: "-500px",
              left: "-200px",
              background: "radial-gradient(ellipse, rgba(255, 80, 83, 0.3) 0%, rgba(13, 0, 7, 0) 70%)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "700px",
              height: "700px",
              top: "200px",
              right: "-400px",
              background: "radial-gradient(ellipse, rgba(255, 80, 174, 0.3) 0%, rgba(13, 0, 7, 0) 70%)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "900px",
              height: "900px",
              top: "300px",
              right: "-500px",
              background: "radial-gradient(ellipse, rgba(191, 80, 255, 0.35) 0%, rgba(13, 0, 7, 0) 70%)",
            }}
          />
        </div>

        {/* Wrapper for glows that do NOT meet in the middle on SMALL screens */}
        <div className="block lg:hidden">
          {/* Glow from the left, with increased opacity */}
          <div
            className="absolute"
            style={{
              width: "700px",
              height: "500px",
              top: "-55px",
              left: "-500px",
              background: "radial-gradient(ellipse, rgba(255, 80, 174, 0.57) 0%, rgba(13, 0, 7, 0) 70%)",
            }}
          />
          {/* Glow from the right, with increased opacity */}
          <div
            className="absolute"
            style={{
              width: "650px",
              height: "500px",
              top: "-65px",
              right: "-500px",
              background: "radial-gradient(ellipse, rgba(255, 80, 174, 0.7) 0%, rgba(13, 0, 7, 0) 70%)",
            }}
          />
        </div>
      </div>

      {/* Content Wrapper - this should stay at the top */}
      <div className="relative z-20 flex flex-col min-h-screen sm:pt-[32px] pt-[20px]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <div className="sm:mt-[8.75rem] mt-[4.375rem]">
          <Footer />
        </div>
      </div>
    </div>
  );
}
