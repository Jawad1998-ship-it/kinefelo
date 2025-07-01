import Footer from "./(components)/Footer/Footer";
import Navbar from "./(components)/Navbar/Navbar";

export default function HomeWrapper({ children }) {
  return (
    <div className="relative w-full text-white">
      <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-br from-[#1a0b2e] via-[#3a1c5d] to-[#5d2b7a] overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/25 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/25 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      <Navbar />
      <main className="min-h-screen px-6">{children}</main>
      <Footer />
    </div>
  );
}
