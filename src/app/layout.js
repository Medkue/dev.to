"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { createContext, useContext, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export default function RootLayout({ children }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Nav />
          {children}
          <Footer />
        </SearchContext.Provider>
      </body>
    </html>
  );
}
