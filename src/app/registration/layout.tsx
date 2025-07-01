import Footer from "../(components)/Footer/Footer";
import Navbar from "../(components)/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-[#0d0007] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
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

        <div className="block lg:hidden">
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
      <main className="flex-1 sm:mt-[7.5rem] mt-[1.875rem]">{children}</main>
    </div>
  );
}
