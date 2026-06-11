import Image from "@/components/image";
import Link from "next/link";
import ThemePicker from "./themePicker";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                href="https://discord.gg/Cp6QPGKJUv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/dcuesports"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image
            src="/esports.png"
            alt="Esports Logo"
            width={40}
            height={40}
            className="inline-block h-6 w-6"
          />{" "}
          DCU Esports Society
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="https://discord.gg/Cp6QPGKJUv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </Link>
          </li>
          <li>
            <Link
              href="https://instagram.com/dcuesports"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-4">
        <ThemePicker />
      </div>
    </div>
  );
}
