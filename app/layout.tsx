import "./globals.css";
import { Figtree } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserid from "@/actions/getSongsByUserid";
import Player from "@/components/Player";

// import type { Metadata } from "next";
const font = Figtree({ subsets: ["latin"] });


export const metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};


export const revalidate = 0;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userSongs = await getSongsByUserid();

  return (
    <html lang="en">
    <body className={font.className}>
      <ToasterProvider />
      <SupabaseProvider>
        <UserProvider>
          <ModalProvider  />
          <Sidebar songs={userSongs}>
            {children}
          </Sidebar>
          <Player />
         
        </UserProvider>
      </SupabaseProvider>
    </body>
  </html>
  );
}
