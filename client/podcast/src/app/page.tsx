import { Source_Serif_4 } from "next/font/google";
const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: "400" });

import Player from "../components/Player";
import Main from "../components/Main";
import Description from "../components/Description";
import Share from "../components/Share";

export default function Home() {
  return (
    <Main>
      <Player
        episodeName="Episode about cats"
        episodeDate={new Date()}
        episodeNumber={1}
        isLatest={true}
        imageUrl="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Description
        episodeName="Episode about cats"
        episodeTags={["cute", "pets", "cats"]}
        edpisodeDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolores alias veniam ex quae, tempore architecto optio porro, enim aliquid delectus sint modi velit debitis cum ratione fugit quibusdam explicabo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolores alias veniam ex quae, tempore architecto optio porro, enim aliquid delectus sint modi velit debitis cum ratione fugit quibusdam explicabo?"
      />
      <Share />
    </Main>
  );
}
