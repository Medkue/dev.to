"use client";
import Link from "next/link";
import styles from "../app/nav_style.module.css";
import { createContext, useContext, useEffect, useState } from "react";
import { BlogListing } from "./BlogListing";
import { useSearch } from "@/app/layout";

export const Nav = () => {
  const { searchValue, setSearchValue } = useSearch();
  const [isNav, setIsNav] = useState("");

  const inputHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const on = (event) => {
    setIsNav(event.target.textContent);
  };
  return (
    <div className="w-full flex justify-center bg-[#F4F4F5] h-[80px] fixed z-20 top-[0px] left-[0px]">
      <div className={styles.nav}>
        <img src="./Logo.svg" />

        <div className={styles.hide}>
          <img src="menu-outline.svg" />
        </div>
        <div className={styles.mid_nav}>
          <Link href="/">
            <p
              className={
                isNav == "Home"
                  ? "text-xl text-black"
                  : "text-base text-[#3B3C4A]"
              }
              onClick={on}
            >
              Home
            </p>
          </Link>
          <Link href="/blog">
            <p
              className={
                isNav == "Blog"
                  ? "text-xl text-black"
                  : "text-base text-[#3B3C4A]"
              }
              onClick={on}
            >
              Blog
            </p>
          </Link>
          <Link href="/contact">
            <p
              className={
                isNav == "Contact"
                  ? "text-xl text-black"
                  : "text-base text-[#3B3C4A]"
              }
              onClick={on}
            >
              Contact
            </p>
          </Link>
        </div>
        <div className={styles.search}>
          <input
            id={styles.search}
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={inputHandler}
          />
          <img src="search-outline.svg" />
        </div>
      </div>
    </div>
  );
};
