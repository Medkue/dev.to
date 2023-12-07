import Link from "next/link";

export const SinglePost = (props) => {
  console.log(props);
  return (
    <Link href="/moreinfo">
      <div className="w-[392px] h-[476px] flex flex-col gap-[10px]">
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
