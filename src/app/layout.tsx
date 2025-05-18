import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/navbar";
import CustomCursor from "@/components/cursor";
import Progress from "@/components/progress";
import {MusicContextProvider} from "@/contexts/musicContext";
import AudioViz from "@/components/AudioViz";
import PageWrapper from "@/components/pageAnimation";

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
        <MusicContextProvider>

          <AudioViz/>
        <NavBar/>
        <CustomCursor/>

        <main className="flex flex-row items-start justify-start w-full h-full">
          <Progress/>

          <PageWrapper>{children}</PageWrapper>
        </main>

        </MusicContextProvider>
        
      </body>
    </html>
  );
}
