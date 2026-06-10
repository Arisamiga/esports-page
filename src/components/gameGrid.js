import Image from "next/image";

const GAMES_DATA = [
  { slug: "leagueoflegends", title: "League Of Legends", ext: "jpg" },
  { slug: "valorant", title: "Valorant", ext: "png" },
  { slug: "csgo", title: "Counter Strike: Global Offensive 2", ext: "webp" },
  { slug: "rocketleague", title: "Rocket League", ext: "jpg" },
  { slug: "overwatch", title: "Overwatch", ext: "jpg" },
  { slug: "marvelrivals", title: "Marvel Rivals", ext: "png" },
  { slug: "r6siege", title: "Rainbow Six: Siege", ext: "jpg" },
  { slug: "tft", title: "Teamfight Tactics", ext: "webp" },
  { slug: "osu!", title: "osu!", ext: "png" },
  { slug: "fightinggames", title: "Fighting Games", ext: "png" },
  { slug: "dota", title: "Dota 2", ext: "png" },
  { slug: "minecraft", title: "Minecraft", ext: "png" },
  { slug: "apex", title: "Apex Legends", ext: "jpg" },
];

export default function GameGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
      {GAMES_DATA.map((game) => (
        <div
          key={game.slug}
          className="flex items-center gap-4 p-3 bg-base-100 hover:bg-base-200 border border-base-300 rounded-xl shadow-sm transition-all cursor-pointer"
        >
          <div className="avatar">
            <div className="w-12 h-12 rounded-lg relative overflow-hidden">
              <Image
                src={`/games/${game.slug}.${game.ext}`}
                alt={game.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm text-base-content line-clamp-1">
              {game.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
