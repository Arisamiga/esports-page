import Image from "next/image";
import Navbar from "../components/Navbar";
import GameGrid from "../components/gameGrid";
import Committee from "../components/committee";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-200">
      <Navbar />
      <main className="p-4 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="./cover.png"
            alt="DCU Esports Cover Image"
            width={800}
            height={400}
            className="rounded-lg mb-6 shadow-xl"
          />
        </div>

        <Committee />

        <h2 className="text-3xl font-bold mb-4">
          Welcome to DCU Esports Society!
        </h2>

        <p className="mb-4 text-base-content/80 text-lg leading-relaxed">
          DCU Eports Society is a student-run organization dedicated to
          promoting competitive gaming and gaming culture on campus. The society
          brings together students with a shared interest in video games,
          providing a platform for them to connect, socialize and compete in a
          variety of popular titles such as League of Legends, CS2, Rocket
          League and Valorant. The society also hosts regular events,
          tournaments, and gaming sessions, giving members the chance to hone
          their skills, make new friends, and showcase their talent. With a
          vibrant and diverse community of gamers, DCU eSports Society is a
          welcoming and inclusive space for anyone passionate about gaming.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Our Games</h3>
        <GameGrid />
      </main>
    </div>
  );
}
