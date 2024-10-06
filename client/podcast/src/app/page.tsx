
import { Source_Serif_4 } from "next/font/google";
const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: "400" });

import Player from "../components/Player";
import Main from "../components/Main";

export default function Home() {
  return (
    <Main>
      <Player />
    </Main>
  );
}
