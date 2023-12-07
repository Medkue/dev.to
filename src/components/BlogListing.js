import { useEffect, useState } from "react";
import { SinglePost } from "./SinglePost";

export const BlogListing = () => {
  const [posts, setPosts] = useState([]);
  const [number, setNumber] = useState(9);
  const [isLoading, setLoading] = useState(true);

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
  console.log(posts);
  return (
    <>
      <div className="w-full flex ">
        <div className="w-[1200px] grid grid-cols-3">
          {isLoading ? (
            <div className="w-full h-full ">
              <h1>kk</h1>
            </div>
          ) : (
            posts.map((post, index) => {
              return (
                <div className="" key={index}>
                  <SinglePost {...post} />;
                </div>
              );
            })
          )}
        </div>
      </div>
      ;<button onClick={load}>click me </button>
    </>
  );
};
