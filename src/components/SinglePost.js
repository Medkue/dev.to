import { useKk } from "@/app/page";

export const SinglePost = () => {
  const { posts } = useKk();
  // console.log(posts[0]);
  return (
    <div className="w-[392px] h-[476px] flex flex-col gap-[10px]">
      <img src={posts[0].image} />
      <p>{posts[0].createdAt}</p>
      <p>{posts[0].description}</p>
    </div>
  );
};
