import Link from "next/link";

export const SinglePost = (props) => {
  return (
    <Link href={`/${props.id}`}>
      <div className="w-[392px] h-[] flex flex-col gap-[10px] rounded-[8px] overflow-hidden">
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
