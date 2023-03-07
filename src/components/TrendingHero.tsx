"use client";
import Image from "next/image";
import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const TrendingHero = ({ data }: any) => {
  console.log(data);

  return (
    <Swiper
      spaceBetween={50}
      modules={[Autoplay, Navigation]}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
      }}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((e: any) => (
        <SwiperSlide key={e.id}>
          <Link
            href={`/movie/${e.id}`}
            prefetch={false}
            className="h-[300px] mobile:h-[200px] relative flex items-center cursor-pointer"
          >
            {/* bg image */}
            <div className="absolute left-0 top-0 right-0 bottom-0">
              <div className="overlay-slick-hero"></div>
              <Image
                src={`https://image.tmdb.org/t/p/original${e.backdrop_path}`}
                alt="ad"
                width={800}
                height={800}
                className="rounded-sm bg-primary h-full w-full"
              ></Image>
            </div>
            {/* text */}
            <div className="flex flex-col gap-3 items-start relative z-10 max-w-[50%] mobile:max-w-[100%]">
              <p className="text-xl line-clamp-1">{e.title}</p>
              <p className="text-sm line-clamp-3">{e.overview}</p>
              {/* <button className="px-3 py-1.5 flex items-center gap-3 bg-primary rounded-md">
                <MdPlayCircleOutline size={18}></MdPlayCircleOutline>
                <span>Play trailer</span>
              </button> */}
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
