import Navbar from "../components/Navbar";
import GameGrid from "../components/gameGrid";
import Committee from "../components/committee";
import CoverCarousel from "../components/coverCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-200">
      <Navbar />

      <main className="w-full mx-auto mt-5">
        {/* Hero Section */}
        <div className="flex flex-col items-center">
          <CoverCarousel />
        </div>

        {/* Welcome Section */}
        <section className="max-w-4xl mx-auto text-center px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to DCU Esports Society
          </h1>

          <div className="max-w-3xl mx-auto space-y-4 text-lg leading-8 text-base-content/80">
            <p>
              DCU Esports Society is a student-run community dedicated to
              competitive gaming and gaming culture on campus.
            </p>

            <p>
              We bring together students who share a passion for video games,
              creating opportunities to connect, socialize, and compete in
              titles such as League of Legends, CS2, Rocket League, and
              Valorant.
            </p>

            <p>
              Through tournaments, gaming nights, and community events, members
              can improve their skills, make new friends, and represent DCU in
              competition. Whether you&apos;re a casual player or a seasoned
              competitor, there&apos;s a place for you in our community.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="https://dcuclubsandsocs.ie/society/esport"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Join us!
            </Link>
          </div>
        </section>

        {/* Games Section */}
        <section className="max-w-7xl mx-auto px-6 mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Games</h2>
          <GameGrid />
        </section>

        {/* Committee Section */}
        <section className="max-w-7xl mx-auto px-6 mt-16 pb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Meet the Committee
          </h2>
          <Committee />
        </section>
      </main>

      <footer className="bg-base-200 py-6 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <Link
            href="https://cdn.dcuclubs.ie/user_files/constitution/10305/2f010747ef794b550296b23e555e94dd.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            Constitution
          </Link>

          <Link
            href="https://cdn.dcuclubs.ie/user_files/safety_statement/10305/fb02d237133a2ea1513d21367193510a.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            Safety Statement
          </Link>
        </div>

        <p className="text-sm text-base-content/70">
          &copy; {new Date().getFullYear()} DCU Esports Society. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
