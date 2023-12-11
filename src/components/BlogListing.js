"use client";

import { useEffect, useState } from "react";
import { SinglePost } from "./SinglePost";
import styles from "../app/nav_style.module.css";
import { useSearch } from "@/app/layout";
import Link from "next/link";

export const BlogListing = () => {
  const [posts, setPosts] = useState([]);
  const [cate, setCate] = useState([]);
  const [number, setNumber] = useState(9);
  const [num, setNum] = useState(9);
  const [isLoading, setLoading] = useState(true);
  const { searchValue, discuss, setDiscuss } = useSearch();

  useEffect(() => {
    try {
      fetch(`https://dev.to/api/articles?page&per_page=${number}`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    } finally {
      setLoading(false);
    }
  }, [number]);

  useEffect(() => {
    try {
      if (discuss == "") return;
      fetch(`https://dev.to/api/articles?page&tag=${discuss}&per_page=${num}`)
        .then((res) => res.json())
        .then((data) => setCate(data));
    } finally {
      setLoading(false);
    }
  }, [discuss, num]);

  const load = () => {
    setNumber((prev) => prev + 3);
  };

  const load2 = () => {
    setNum((prev) => prev + 3);
  };

  const on = (event) => {
    let x = event.target.textContent;
    if (x == "All") {
      setDiscuss("");
    } else {
      setDiscuss(x.toLowerCase());
    }
  };

  return (
    <>
      <div className="w-full flex flex-col items-center mt-[50px] mb-[50px]">
        <div className="flex flex-col gap-[10px] w-[1200px] mb-[10px]">
          <h1 className="flex p-[3px]">All Blog Post</h1>
          <div className="flex justify-between">
            <div className="flex gap-[10px]">
              <p
                className={
                  discuss == ""
                    ? "flex p-[3px] bg-black text-white rounded-[4px]"
                    : "flex p-[3px] hover:bg-black hover:text-white rounded-[4px]"
                }
                onClick={on}
              >
                All
              </p>
              <p
                className={
                  discuss == "design"
                    ? "flex p-[3px] bg-black text-white rounded-[4px]"
                    : "flex p-[3px] hover:bg-black hover:text-white rounded-[4px]"
                }
                onClick={on}
              >
                Design
              </p>
              <p
                className={
                  discuss == "travel"
                    ? "flex p-[3px] bg-black text-white rounded-[4px]"
                    : "flex p-[3px] hover:bg-black hover:text-white rounded-[4px]"
                }
                onClick={on}
              >
                Travel
              </p>
              <p
                className={
                  discuss == "fashion"
                    ? "flex p-[3px] bg-black text-white rounded-[4px]"
                    : "flex p-[3px] hover:bg-black hover:text-white rounded-[4px]"
                }
                onClick={on}
              >
                Fashion
              </p>
              <p
                className={
                  discuss == "branding"
                    ? "flex p-[3px] bg-black text-white rounded-[4px]"
                    : "flex p-[3px] hover:bg-black hover:text-white rounded-[4px]"
                }
                onClick={on}
              >
                Branding
              </p>
              <p
                className={
                  discuss == "discuss"
                    ? "flex p-[3px] bg-black text-white rounded-[4px]"
                    : "flex p-[3px] hover:bg-black hover:text-white rounded-[4px]"
                }
                onClick={on}
              >
                Discuss
              </p>
            </div>
            <Link href="/blog">
              <p className="flex p-[3px] hover:bg-black hover:text-white rounded-[4px]">
                View all
              </p>
            </Link>
          </div>
        </div>
        <div className="w-[1200px] grid grid-cols-3 flex justify-center gap-[40px] ">
          {isLoading ? (
            <div className="w-full h-full flex justify-center items-center ">
              <h1>huleechih unshjin hu</h1>
            </div>
          ) : discuss == "" ? (
            posts
              .filter((post) => {
                return (
                  post.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  post.description
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );
              })
              .map((post, index) => {
                return (
                  <Link href="/blog/id" key={post.id}>
                    <div className="h-fit w-fit p-[8px] border-[1px] rounded-[8px]">
                      <SinglePost {...post} />
                    </div>
                  </Link>
                );
              })
          ) : (
            cate
              .filter((post) => {
                return (
                  post.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  post.description
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );
              })
              .map((post) => {
                return (
                  <Link href="/blog/id" key={post.id}>
                    <div
                      className="h-fit w-fit p-[8px] border-[1px] rounded-[8px]"
                      key={post.id}
                    >
                      <SinglePost {...post} />
                    </div>
                  </Link>
                );
              })
          )}
        </div>
        <button onClick={discuss == "" ? load : load2} className={styles.btn}>
          Load more
        </button>
      </div>
    </>
  );
};
