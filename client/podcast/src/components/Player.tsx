"use client";

import { Alata } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import { Progress, Button, Image } from "@nextui-org/react";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const smallText = sourceSerif.className + " text-sm text-gray p-0";
const normalText = sourceSerif.className + " text-base text-black p-0";
const bigText = sourceSerif.className + " text-2xl text-black font-medium p-0";

export default function Home() {
  let episode_name = "Big juicy Episode Name";
  let episode_date = new Date("2022-01-08");
  let episode_number = 1;
  let is_latest = true;
  let image_url =
    "https://images.unsplash.com/photo-1727619784641-db497cc6da32?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <section className="flex flex-col gap-8 items-center w-full">
      <div className="flex flex-col gap-4 items-center w-fit">
        <span className={smallText}>Latest episode</span>
        <Image src={image_url} alt={episode_name} width={180} height={180} radius="sm" />
      </div>

      <section className="flex flex-col gap-4 items-center w-fit">
        <h3 className={bigText}>{episode_name}</h3>
        <span
          className={smallText}
        >{`Episode ${episode_number} | ${episode_date.toLocaleDateString()} | By VitaThemes`}</span>
      </section>

      <div className="flex direction-row gap-4 items-center box-border w-full">
        <Button isIconOnly radius="sm" className=" bg-transparent" key="Play">
          <img src="../play.svg" alt="" />
        </Button>
        <span className={smallText}>0:00</span>
        <Progress aria-label="Played progress" value={1} className= "min-w-5 w-full" />
        <span className={smallText}>15:00</span>
        <Button isIconOnly radius="sm" className=" bg-transparent" key="Volume">
          <img src="../volume.svg" alt="" />
        </Button>
        <Button isIconOnly radius="sm" className=" bg-transparent" key="Download">
          <img src="../download.svg" alt="" />
        </Button>
      </div>

      <div className="flex flex-col gap-3 items-center w-fit">
        <span className={normalText}>LISTEN ON</span>
        <nav className="flex direction-row gap-4 items-center">
            <img src="../spotify.svg" alt="" />
            <img src="../soundcloud.svg" alt="" />
            <img src="../apple.svg" alt="" />
        </nav>
      </div>
    </section>
  );
}
