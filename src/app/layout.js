import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Esports",
  description: "DCU's Esports Society",
};

export default function RootLayout({ children }) {
  return (
    // Set suppressHydrationWarning here as required by next-themes
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="data-theme" // Tells next-themes to target data-theme="..."
          defaultTheme="dark" // Your default fallback theme
          value={{
            default: "dark", // Maps your custom theme keys if needed
            retro: "retro",
            cyberpunk: "cyberpunk",
            valentine: "valentine",
            aqua: "aqua",
          }}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
