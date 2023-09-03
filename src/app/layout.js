import "./globals.css";
import { Montserrat } from "next/font/google";

const monsterrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Project Red Door",
  description: "Mental Health Services for Chinese Australians",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${monsterrat.variable}`}>
      <body className={monsterrat.className}>{children}</body>
    </html>
  );
}
