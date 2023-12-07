"use client";
import Link from "next/link";
import styles from "../app/nav_style.module.css";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <img src="./Logo.svg" />

      <div className={styles.hide}>
        <img src="menu-outline.svg" />
      </div>
      <div className={styles.mid_nav}>
        <p className="text-base text-[#3B3C4A]">Home</p>
        <Link href="/blog">
          <p className="text-base text-[#3B3C4A]">Blog</p>
        </Link>
        <p className="text-base text-[#3B3C4A]">Contact</p>
      </div>
      <div className={styles.search}>
        <input id={styles.search} type="text" placeholder="Search" />
        <img src="search-outline.svg" />

        {/* <div className={styles.theme}>
          <div className={styles.kk}>
            <img src="./Frame 205.svg" />
          </div>
        </div> */}
      </div>
    </div>
  );
};
