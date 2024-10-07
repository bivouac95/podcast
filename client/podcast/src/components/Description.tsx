"use client";

import { Alata } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import { Progress, Button, Image } from "@nextui-org/react";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const smallGrayText = sourceSerif.className + " text-sm text-gray p-0";
const smallBlackText = sourceSerif.className + " text-sm text-black p-0";
const normalText = sourceSerif.className + " text-base text-black p-0";
const bigText = sourceSerif.className + " text-xl text-black font-medium p-0";

interface DescriptionProps {
    episodeName: string,
    episodeTags: string[],
    edpisodeDescription: string
}

const podcastDescription = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolores alias veniam ex quae, tempore architecto optio porro, enim aliquid delectus sint modi velit debitis cum ratione fugit quibusdam explicabo?"

export default function Description({episodeName, episodeTags, edpisodeDescription}: DescriptionProps) {
    return (
        <section className="flex flex-col gap-8">
            <p className={smallGrayText}>{podcastDescription}</p>
            <article className="flex flex-col gap-4">
                <h3 className={bigText}>{episodeName}</h3>
                <p className={smallGrayText}>{edpisodeDescription}</p>
            </article>
            <div className={normalText + " flex flex-wrap gap-2"}>{episodeTags.map(tag => <span key={"Tag " + tag}>{'#' + tag}</span>)}</div>
        </section>
    );
}