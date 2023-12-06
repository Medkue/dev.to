"use client";
import Image from "next/image";

import { Nav } from "@/components/Nav";
import { createContext, useContext, useEffect, useState } from "react";
import { SinglePost } from "@/components/SinglePost";
import { data } from "autoprefixer";
import { TrendBanner } from "@/components/TrendBanner";
import { Trending } from "@/components/Trending";
export const kk = createContext();

export const useKk = () => useContext(kk);

export default function Home() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("https://dev.to/api/articles?username=gereltuyamz")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //       console.log(posts);
  //       console.log(data[0].cover_image);
  //     });
  // }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://656e8a31cb41cca10e9d7539.mockapi.io/posts"
      );
      const data = await res.json();
      setPosts(data);
    };
    getData();
  }, []);
  // console.log(posts, "jj");
  return (
    <>
      <kk.Provider value={{ posts }}>
        <div className="w-full flex flex-col gap-[50px] justify-center items-center">
          <Nav />
          {/* <div className="flex gap-[10px]">
            {posts.map((item) => {
              <SinglePost />;
            })}
          </div> */}
          {/* <SinglePost /> */}
          <Trending />;
        </div>
      </kk.Provider>
    </>
  );
}

// export async function getServerSideProps() {
//   const articles = await fetch("https://dev.to/api/articles").then((res) =>
//     res.json()
//   );
//   console.log("articles= ", articles);

//   return {
//     props: {
//       articles: articles,
//     },
//   };
// }
