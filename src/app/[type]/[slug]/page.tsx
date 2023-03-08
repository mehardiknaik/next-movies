import FilmCover from "@/components/FilmCover";
import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  try {
    let data = [{ type: "movie", slug: "936622" }];
    return data;
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
}

async function getData(slug: string, type: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/${type}/${slug}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos,credits`,
    { next: { revalidate: 30 } }
  );
  console.log(slug);

  return res.json();
}

export default async function Pages({ params: { slug, type } }: any) {
  // Initiate both requests in parallel

  const data = await getData(slug, type);

  return (
    <>
      <FilmCover src={data.backdrop_path} />
      {/* poster and text */}
      <div className="-mt-[150px] flex items-center relative z-10 mobile:block">
        <Image
          alt={data.title}
          width={200}
          height={300}
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          className="w-[200px] min-w-[200px] h-[300px] mobile:mx-auto ml-5 min-h-[200px] object-cover rounded-xl"
        />
        <div className="px-3 flex flex-col items-start gap-3">
          <p className="text-xl line-clamp-1">{data.title}</p>
          <ul className="flex items-center gap-3">
            {data?.genres?.map(({ name, id }: any) => (
              <li
                key={id}
                className="px-3 py-1.5 bg-primary rounded-lg text-sm"
              >
                {name}
              </li>
            ))}
          </ul>
          <p className="line-clamp-4 opacity-[0.9]">{data.overview}</p>
        </div>
      </div>

      {/* <div>{JSON.stringify(data)}</div> */}
    </>
  );
}
