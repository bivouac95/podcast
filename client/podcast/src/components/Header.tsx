"use client";

import { Alata } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const alata = Alata({ subsets: ["latin"], weight: "400" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <header className="flex w-full px-4 py-2 justify-center fixed top-0 z-30 bg-white40 backdrop-blur-sm">
      <main className="flex w-full max-w-2xl justify-between items-center">
        <h1 className={alata.className + " text-lg cursor-pointer"}>
          PODCAST NAME
        </h1>

        <div className="md:flex hidden direction-row gap-4 items-center ">
          <Button
            radius="sm"
            className="bg-transparent w-fit min-w-0 h-fit p-2 text-black text-sm"
            key="Episodes"
          >
            <span className={sourceSerif.className}>Episodes</span>
          </Button>
          <Button
            radius="sm"
            className="bg-transparent w-fit min-w-0 h-fit p-2 text-black text-sm"
            key="Blog"
          >
            <span className={sourceSerif.className}>Blog</span>
          </Button>
          <Button
            radius="sm"
            className="bg-transparent w-fit min-w-0 h-fit p-2 text-black text-sm"
            key="Contact"
          >
            <span className={sourceSerif.className}>Contact</span>
          </Button>
          <Button
            radius="sm"
            className="bg-transparent w-fit min-w-0 h-fit p-2 text-black text-sm"
            key="Donate"
          >
            <span className={sourceSerif.className}>Donate</span>
          </Button>
          <Button
            isIconOnly
            radius="sm"
            className=" bg-transparent"
            key="Search"
          >
            <img src="../search.svg" alt="" />
          </Button>
        </div>

        <Dropdown
          className="shadow-none text-black bg-white40 min-w-32 md:hidden flex"
          placement="bottom-end"
          radius="sm"
        >
          <DropdownTrigger className="md:hidden flex">
            <Button isIconOnly radius="sm" className=" bg-transparent">
              <img src="../menu.svg" alt="" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu classNames={{ list: "gap-4 " }} aria-label="Pages">
            <DropdownItem
              className={sourceSerif.className + " text-right text-sm p-0 px-3"}
              variant="light"
              key="episodes"
            >
              Episodes
            </DropdownItem>
            <DropdownItem
              className={sourceSerif.className + " text-right text-sm p-0 px-3"}
              variant="light"
              key="blog"
            >
              Blog
            </DropdownItem>
            <DropdownItem
              className={sourceSerif.className + " text-right text-sm p-0 px-3"}
              variant="light"
              key="contact"
            >
              Contact
            </DropdownItem>
            <DropdownItem
              className={
                sourceSerif.className +
                " text-right text-sm p-0 px-3 text-purple"
              }
              variant="light"
              key="donate"
              endContent={<img src="../heart.svg" alt="" />}
            >
              Donate
            </DropdownItem>
            <DropdownItem
              className={sourceSerif.className + " text-right text-sm p-0 px-3"}
              variant="light"
              key="search"
              endContent={<img src="../search.svg" alt="" />}
            >
              Search
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </main>
    </header>
  );
}
