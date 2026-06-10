import "./globals.css";

export const metadata = {
  title: "Esports",
  description: "DCU's Esports Society",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
