"use client";
import Link from "next/link";
import styles from "../app/nav_style.module.css";
import { createContext, useContext, useEffect, useState } from "react";
import { BlogListing } from "./BlogListing";
import { useSearch } from "@/app/layout";

export const Nav = () => {
  const { searchValue, setSearchValue } = useSearch();

  const inputHandler = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="w-full flex justify-center">
      <div className={styles.nav}>
        <img src="./Logo.svg" />

        <div className={styles.hide}>
          <img src="menu-outline.svg" />
        </div>
        <div className={styles.mid_nav}>
          <Link href="/">
            <p className="text-base text-[#3B3C4A]">Home</p>
          </Link>
          <Link href="/blog">
            <p className="text-base text-[#3B3C4A]">Blog</p>
          </Link>
          <Link href="/contact">
          <p className="text-base text-[#3B3C4A]">Contact</p>
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
