import type { Metadata } from "next";
import "@/styles/globals.css";
import {MusicContextProvider} from "@/contexts/musicContext";
import { inconsolata } from "./fonts";
import Bg from "@/components/bg";

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
        <Bg/>
        
        <CustomCursor/>
        
          <MusicContextProvider>

            <main className="flex flex-col items-center justify-center lg:items-start lg:justify-start w-full h-auto lg:h-full">
              <Progress/>
              <PageWrapper>{children}</PageWrapper>
              <NavBar/>
            </main>
            <AudioViz/>

          </MusicContextProvider>
        
      </body>
    </html>
  );
}
