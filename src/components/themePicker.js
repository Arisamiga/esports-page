"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) {
    return (
      <div className="dropdown">
        <div className="btn m-1 opacity-50" id="theme-dropdown">
          Theme
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://w3.org"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1" id="theme-dropdown">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://w3.org"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content bg-base-300 rounded-box z-1 w-fit p-2 shadow-2xl"
      >
        {[
          { label: "Default", value: "default" },
          { label: "Retro", value: "retro" },
          { label: "Cyberpunk", value: "cyberpunk" },
          { label: "Valentine", value: "valentine" },
          { label: "Aqua", value: "aqua" },
        ].map((t) => (
          <li key={t.value}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
              aria-label={t.label}
              value={t.value}
              checked={theme === t.value}
              onChange={(e) => setTheme(e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
