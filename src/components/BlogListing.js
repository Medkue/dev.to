"use client";

import { useEffect, useState } from "react";
import { SinglePost } from "./SinglePost";
import styles from "../app/nav_style.module.css";
import { useSearch } from "@/app/layout";

export const BlogListing = () => {
  const [posts, setPosts] = useState([]);
  const [cate, setCate] = useState([]);
  const [number, setNumber] = useState(9);
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
      if(discuss=='') return
      fetch(`https://dev.to/api/articles?tags=${discuss}`)
        .then((res) => res.json())
        .then((data) => setCate(data));
    } finally {
      setLoading(false);                                                    
    }
  }, [discuss]);


  const load = () => {
    setNumber((prev) => prev + 3);
  };

  const on = (event) => {
    let x = event.target.textContent;
    console.log(x);
    if (x == "Design") {
      setDiscuss("design")
    } else if (x == "Travel") {
       setDiscuss("travel")
    } else if (x == 'Fashion') {
       setDiscuss("fashion")
    } else if (x == 'Branding') {
       setDiscuss("branding")
    } else if (x == 'Discuss') {
       setDiscuss("discuss")
    } else if (x == "All") {
      setDiscuss('')
    }
  }
  // console.log(discuss);
  const a = posts.filter((post) => {
    return post.tags.includes(discuss)
  });
console.log(cate);
 
  return (
    <>
      <div className="w-full flex flex-col items-center mt-[50px] mb-[50px]">
        <div className="flex flex-col gap-[10px] w-[1200px] mb-[10px]">
          <h1 className="flex p-[3px]">All Blog Post</h1>
          <div className="flex justify-between">
            <div className="flex gap-[10px]">
              <p className="flex p-[3px] hover:bg-black hover:text-white rounded-[4px]" onClick={on}>All</p>
              <p className="flex p-[3px] hover:bg-black hover:text-white rounded-[4px]" onClick={on}>Design</p>
              <p className="flex p-[3px] hover:bg-black hover:text-white rounded-[4px]" onClick={on}>Travel</p>
              <p className="flex p-[3px] hover:bg-black hover:text-white rounded-[4px]" onClick={on}>Fashion</p>
              <p className="flex p-[3px] hover:bg-black hover:text-white rounded-[4px]" onClick={on}>Branding</p>
              <p className="flex p-[3px] hover:bg-black hover:text-white rounded-[4px]" onClick={on}>Discuss</p>
            </div>
            <p className="flex p-[3px] hover:bg-black hover:text-white rounded-[4px]">View all</p>
          </div>    
        </div>
        <div className="w-[1200px] grid grid-cols-3 flex justify-center gap-[40px] ">
          {isLoading ? (
            <div className="w-full h-full flex justify-center items-center ">
              <h1>huleechih unshjin hu</h1>
            </div>
          ) : (discuss==""? posts
              .filter((post) => {
                return (
                  post.title.includes(searchValue.toLowerCase()) ||
                  post.description.includes(searchValue.toLowerCase())
                );
              })
              .map((post, index) => {
                return (
                  <div className="h-fit w-fit p-[8px] border-[1px] rounded-[8px]" key={post.id}>
                    <SinglePost {...post} />
                  </div>
                );
              }): cate.map((post, index) => {
                if (index < 9) {
                  return (
                    <div className="h-fit w-fit p-[8px] border-[1px] rounded-[8px]" key={post.id}>
                      <SinglePost {...post} />
                    </div>
                  );
                }else {return}
            })
          )}
        </div>
        <button onClick={load} className={styles.btn}>
          Load more
        </button>
      </div>
    
    </>
  );
};
