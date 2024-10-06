"use client";

import { Source_Serif_4 } from "next/font/google";
const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <footer className="flex w-full p-4 justify-center bg-light">
      <main className="flex direction-row gap-4 items-center">
        <span className={sourceSerif.className + " text-sm text-gray"}>
          PodcastTheme by VitaThemes & bivouac95
        </span>
        <img src="../github.svg" alt="" />
      </main>
    </footer>
  );
}
