import type { Metadata } from "next";
import "@/styles/globals.css";
import {MusicContextProvider} from "@/contexts/musicContext";
import { inconsolata } from "./fonts";

// components
import NavBar from "@/components/navbar";
import CustomCursor from "@/components/cursor";
import Progress from "@/components/progress";
import AudioViz from "@/components/AudioViz";
import PageWrapper from "@/components/pageAnimation";

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
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-[100vw] h-[100vh] object-cover z-[-1]"
        >
    <source src="/bg_optimized.webm" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        
        <CustomCursor/>
        
          <MusicContextProvider>
            <AudioViz/>

            <main className="flex flex-col items-center justify-center lg:items-start lg:justify-start w-full h-auto lg:h-full">
              <Progress/>
              <PageWrapper>{children}</PageWrapper>
              <NavBar/>
            </main>

          </MusicContextProvider>
        
      </body>
    </html>
  );
}
