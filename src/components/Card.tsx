import Image from "next/image";
import Link from "next/link";
import React from "react";

type propsType = {
  poster_path: string;
  title: string;
  id: string;
  media_type: string;
};

const Card = ({ poster_path, title, id, media_type="movie" }: propsType) => {
  return (
    <Link
      href={`/${media_type}/${id}`}
      prefetch={false}
      className="group mx-3 my-1.5 cursor-pointer"
    >
      <div
        className="
        h-[200px]
        relative
        rounded-lg overflow-hidden
        w-fit
    "
      >
        <div
          className="
          absolute
          hidden
          group-hover:flex
          items-center
          justify-center
          left-0
          right-0
          top-0
          bottom-0
          before:absolute
          before:content-['']
          before:bg-black
          before:opacity-[0.7]
          before:left-0
          before:right-0
          before:top-0
          before:bottom-0
      "
        ></div>
        {poster_path && (
          <Image
            alt={title}
            width={150}
            height={230}
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          />
        )}
      </div>
      <p className="py-1.5 line-clamp-1">{title}</p>
    </Link>
  );
};

export default Card;
