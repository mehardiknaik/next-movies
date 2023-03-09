import Image from "next/image";
import React from "react";

const FilmCover = ({ src }: { src: string }) => {
  return (
    <div className="h-[300px] mobile:h-[250px] left-0 right-0 top-0 relative">
      <div className="overlay-film-cover"></div>
      <Image
        src={src ? `https://image.tmdb.org/t/p/original${src}` : "/nocover.jpg"}
        alt={`cover`}
        width={800}
        height={300}
        className="rounded-sm bg-primary h-full w-full"
      />
    </div>
  );
};

export default FilmCover;
