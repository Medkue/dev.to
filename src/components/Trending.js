import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  };

  const minus = () => {
    if (number === 0) return;
    setNumber((prev) => prev - 1);
  };
  const display = (a) => {};

  return (
    <>
      <div className="w-[1200px] h-[420px] rounded-[8px] relative ">
        <div className="w-[1200px] h-[420px] rounded-[8px]  overflow-hidden">
          {isLoading === true ? (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-[20px] text-black">Loading</p>
            </div>
          ) : (
            <div className="w-[1200px] h-[420px] ">
              {posts[0].cover_image === null ? (
                <img src="./catcat.jpeg" className="w-[100%] h-[100%] fit" />
              ) : (
                <img
                  className="w-[100%] h-[100%] fit"
                  src={posts[0].cover_image}
                />
              )}

              <div className="w-[650px] h-[250px] rounded-[8px] bg-[#E8E8EA] p-[40px] flex flex-col gap-[20px] absolute bottom-[0%]">
                <p className="p-[10px] bg-[#4B6BFB] rounded-[8px] text-white w-fit">
                  {posts[0].title}
                </p>
                <h1>{posts[0].description}</h1>
                <p className="text-[#97989F]">
                  {posts[0].readable_publish_date}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-[0px] absolute -bottom-[50px] right-[0px]">
          <button
            className=" rounded-[4px] p-[8px]"
            onClick={() => {
              minus();
            }}
          >
            <img src="./back.svg" />
          </button>
          <button
            className=" rounded-[4px] p-[8px]"
            onClick={() => {
              plus();
              display(posts[0].cover_image);
            }}
          >
            <img src="./forward.svg" />
          </button>
        </div>
      </div>
    </>
  );
};
