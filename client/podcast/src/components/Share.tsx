"use client";

import { Alata } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import { Divider, Button, Image } from "@nextui-org/react";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const smallGrayText = sourceSerif.className + " text-sm text-gray p-0";
const smallBlackText = sourceSerif.className + " text-sm text-black p-0";
const normalText = sourceSerif.className + " text-base text-black p-0";
const bigText = sourceSerif.className + " text-xl text-black font-medium p-0";

export default function Description() {
  return (
    <section className="flex flex-col gap-4">
      <Divider />
      <div aria-label="Share links" className="flex flex-row gap-4 items-center">
        <span className={normalText}>Share:</span>
        <Button isIconOnly className="bg-transparent">
          <img src="../facebook.svg" alt="" />
        </Button>
        <Button isIconOnly className="bg-transparent">
          <img src="../github.svg" alt="" />
        </Button>
        <Button isIconOnly className="bg-transparent">
          <img src="../twitter.svg" alt="" />
        </Button>
      </div>
      <Divider />
    </section>
  );
}
