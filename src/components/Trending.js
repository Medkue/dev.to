import { createContext, useContext, useEffect, useRef, useState } from "react";
import { TrendBanner } from "./TrendBanner";

export const top = createContext();

export const useTop = () => useContext(top);

export const Trending = () => {
  const [number, setNumber] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(number);
        const res = await fetch(
          `https://dev.to/api/articles?page=${number}&per_page=1`
        );
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [number]);

  const plus = () => {
    setNumber((prev) => prev + 1);
    console.log(number, "plus");
  };

  const minus = () => {
    if (number === 0) return;
    setNumber((prev) => prev - 1);
    console.log(number, "minus");
  };

  return (
    <>
      <div className="w-[1200px] h-[650px] rounded-[8px] relative ">
        {isLoading === true ? (
          <div className="w-full h-full">
            <p className="text-[20px] text-black">Loading</p>
          </div>
        ) : (
          <div className="w-fit h-fit">
            <img className="w-[100%] h-[100%] fit" src={posts[0].cover_image} />
            <div className="w-[650px] h-[250px] rounded-[8px] bg-[#E8E8EA] p-[40px] flex flex-col gap-[20px] absolute bottom-[40%]">
              <p className="p-[10px] bg-[#4B6BFB] rounded-[8px] text-white w-fit">
                {posts[0].title}
              </p>
              <h1>{posts[0].description}</h1>
              <p className="text-[#97989F]">{posts[0].readable_publish_date}</p>
            </div>
          </div>
        )}
        <button
          className="bg-black text-white h-[20px] w-[60px]"
          onClick={() => {
            minus();
          }}
        >
          prev
        </button>
        <button
          className="bg-black text-white"
          onClick={() => {
            plus();
          }}
        >
          next
        </button>
      </div>
      {/* <top.Provider value={{ posts }}>
        <div className="w-full flex ">
          <div className="w-[1200px] flex">
            {posts.map((post, index) => {
              if (index < 4)
                return (
                  <div className="" key={index}>
                    <TrendBanner {...posts} index={index} />
                  </div>
                );
            })}
          </div>
        </div>
      </top.Provider> */}
    </>
  );
};
