
import { Source_Serif_4 } from "next/font/google";
const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: "400" });


export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">
      <main className="flex flex-col w-full max-w-2xl pt-14">
        <h2 className={sourceSerif.className}>hello bitches</h2>
      </main>
    </main>
  );
}
