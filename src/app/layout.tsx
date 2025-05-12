import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./styles/globals.css";
import NavBar from "../app/components/navbar";
import CustomCursor from "../app/components/cursor";
import Progress from "../app/components/progress";

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
        <CustomCursor/>

        {/* <audio controls src="/music/lofi1.mp3">
      </audio> */}
        <main className="flex flex-row items-start justify-start w-full h-full">
          <Progress/>
        {children}
        </main>

        
      </body>
    </html>
  );
}
