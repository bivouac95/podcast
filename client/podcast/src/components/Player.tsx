"use client";

import { Alata } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import { Progress, Button, Image } from "@nextui-org/react";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const smallText = sourceSerif.className + " text-sm text-gray p-0";
const smallBlackText = sourceSerif.className + " text-sm text-black p-0";
const normalText = sourceSerif.className + " text-base text-black p-0";
const bigText = sourceSerif.className + " text-2xl text-black font-medium p-0";

interface PlayerProps {
  episodeName: string;
  episodeDate: Date;
  episodeNumber: number;
  isLatest: boolean;
  imageUrl: string;
}

export default function Home({
  episodeName,
  episodeDate,
  episodeNumber,
  isLatest,
  imageUrl,
}: PlayerProps) {
  return (
    <section className="flex flex-col gap-8 items-center w-full">
      <div className="flex flex-col gap-4 items-center w-fit">
        <span className={isLatest ? smallText : "hidden"}>Latest episode</span>
        <Image
          src={imageUrl}
          alt={episodeName}
          width={180}
          height={180}
          radius="sm"
        />
      </div>

      <section className="flex flex-col gap-4 items-center w-fit">
        <h3 className={bigText}>{episodeName}</h3>
        <span
          className={smallText}
        >{`Episode ${episodeNumber} | ${episodeDate.toLocaleDateString()} | By VitaThemes`}</span>
      </section>

      <div className="flex direction-row gap-4 items-center box-border w-full">
        <Button isIconOnly radius="sm" className=" bg-transparent" key="Play">
          <img src="../play.svg" alt="" />
        </Button>
        <span className={smallText}>0:00</span>
        <Progress
          aria-label="Played progress"
          value={1}
          size="sm"
          // className="min-w-5 w-full"
          classNames={{
            base: "min-w-5 w-full",
            track: "bg-light",
            indicator: "bg-black",
          }}
        />
        <span className={smallText}>15:00</span>
        <Button isIconOnly radius="sm" className=" bg-transparent" key="Volume">
          <img src="../volume.svg" alt="" />
        </Button>
        <Button
          isIconOnly
          radius="sm"
          className=" bg-transparent"
          key="Download"
        >
          <img src="../download.svg" alt="" />
        </Button>
      </div>

      <div className="flex flex-col gap-1 items-center w-fit">
        <span className={smallBlackText}>Listen on</span>
        <nav className="flex direction-row gap-4 items-center">
          <Button
            radius="sm"
            className="bg-transparent w-fit min-w-0 h-fit p-2 text-black text-sm"
            key="Spotify"
            isIconOnly
          >
            <img src="../spotify.svg" alt="" />
          </Button>
          <Button
            radius="sm"
            className="bg-transparent w-fit min-w-0 h-fit p-2 text-black text-sm"
            key="Soundcloud"
            isIconOnly
          >
            <img src="../soundcloud.svg" alt="" />
          </Button>
          <Button
            radius="sm"
            className="bg-transparent w-fit min-w-0 h-fit p-2 text-black text-sm"
            key="Apple Music"
            isIconOnly
          >
            <img src="../apple.svg" alt="" />
          </Button>
        </nav>
      </div>
    </section>
  );
}
