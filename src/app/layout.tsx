import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import ReduxWrapper from "./reduxWrapper";

export const metadata: Metadata = {
  title: "KineFelo Ecommerce",
  description: "ecommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter}`}>
        <ReduxWrapper>{children}</ReduxWrapper>
      </body>
    </html>
  );
}
