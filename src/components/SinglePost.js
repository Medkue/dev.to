import { useSearch } from "@/app/layout";
import Link from "next/link";

export const SinglePost = (props) => {
  const { discuss } = useSearch();

  return (
    <Link href={`/blog/${props.id}`}>
      <div className="w-full  flex flex-col gap-[10px] rounded-[8px] overflow-hidden mt-[]">
        <div className="w-[80%] flex flex-col gap-[20px]">
          <h1>{props.tags.includes(discuss) ? discuss : ""}</h1>
          <p></p>
        </div>
        {props.cover_image === null ? (
          <img src="./catcat.jpeg" />
        ) : (
          <img src={props.cover_image} />
        )}
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};
