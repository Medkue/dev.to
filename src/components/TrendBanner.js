import { useTop } from "./Trending";

export const TrendBanner = (props) => {
  const { posts } = useTop();

  return (
    <div className="w-[1200px] h-[650px] rounded-[8px] relative overflow-hidden">
      <img
        className="w-[100%] h-[100%] fit"
        src={posts[props.index].cover_image}
      />
      <div className="w-[650px] h-[250px] rounded-[8px] bg-[#E8E8EA] p-[40px] flex flex-col gap-[20px] absolute bottom-[0%]">
        <p className="p-[10px] bg-[#4B6BFB] rounded-[8px] text-white w-fit">
          {posts[props.index].title}
        </p>
        <h1>{posts[props.index].description}</h1>
        <p className="text-[#97989F]">
          {" "}
          {posts[props.index].readable_publish_date}
        </p>
      </div>
    </div>
  );
};
