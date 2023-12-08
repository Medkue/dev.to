"use client";

import { useEffect, useState } from "react";
import { SinglePost } from "./SinglePost";
import styles from "../app/nav_style.module.css";
import { useSearch } from "@/app/layout";

export const BlogListing = () => {
  const [posts, setPosts] = useState([]);
  const [number, setNumber] = useState(9);
  const [isLoading, setLoading] = useState(true);
  const { searchValue } = useSearch();

  useEffect(() => {
    try {
      fetch(`https://dev.to/api/articles?page&per_page=${number}`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    } finally {
      setLoading(false);
    }
  }, [number]);

  const load = () => {
    setNumber((prev) => prev + 3);
  };

  return (
    <>
      <div className="w-full flex justify-center mt-[50px]">
        <div className="w-[1200px] grid grid-cols-3 flex justify-center gap-[40px] ">
          {isLoading ? (
            <div className="w-full  ">
              <h1>huleechih unshjin hu</h1>
            </div>
          ) : (
            posts
              .filter((post) => {
                return (
                  post.title.includes(searchValue.toLowerCase()) ||
                  post.description.includes(searchValue.toLowerCase())
                );
              })
              .map((post, index) => {
                return (
                  <div className="h-fit" key={post.id}>
                    <SinglePost {...post} />
                  </div>
                );
              })
          )}
        </div>
      </div>
      <button onClick={load} className={styles.btn}>
        Load more
      </button>
    </>
  );
};
