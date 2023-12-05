"use client";
import Image from "next/image";

import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-[50px] justify-center items-center">
        <Nav />
      </div>
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
