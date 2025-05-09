import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./styles/globals.css";
import NavBar from "../app/components/navbar";
import CustomCursor from "../app/components/cursor";

const inconsolata=Inconsolata({
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Shibam Roy",
  description: "This is my personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inconsolata.className}
      >
        <NavBar/>
        {/* <div className="z-[100] flex items-center justify-center w-full h-full">
        <Loader/>
        </div> */}
        <CustomCursor/>
        {children}
        
      </body>
    </html>
  );
}
