import React from "react";

export async function generateStaticParams() {
  try {
    let res: any = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=26ba5e77849587dbd7df199727859189&sort_by=release_date.desc&page=1&release_date.lte=2023-12-31&with_original_language=mr%7Chi&with_genres="
    );
    console.log("revalidate");
    res = await res.json();

    let data = res.results.slice(0, 1).map(({ id }: { id: string }) => ({
      slug: `${id}`,
    }));
    console.log(data);
    return data;
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
}

async function getData(slug: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}?api_key=26ba5e77849587dbd7df199727859189&language=en-US&append_to_response=videos,credits`,
    { next: { revalidate: 30 } }
  );
  console.log(slug);

  return res.json();
}

export default async function Pages({ params: { slug } }: any) {
  // Initiate both requests in parallel
  const data = await getData(slug);

  return (
    <>
      <title>{data.title}</title>
      <link rel="icon" href={`https://image.tmdb.org/t/p/w200${data.poster_path}`} />
      <meta name="description" content={data.overview} />
      <div>{JSON.stringify(data)}</div>
    </>
  );
}
