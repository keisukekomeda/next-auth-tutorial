import SessionProvider from "@/provider/SessionProvider";
import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Auth Tutorial",
  description: "Hello next-auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="ja">
        <body
        // className={inter.className}
        >
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
