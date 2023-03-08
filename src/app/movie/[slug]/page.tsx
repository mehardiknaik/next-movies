import React from "react";

export async function generateStaticParams() {
  try {
    let data = [ { slug: '936622' } ];
    console.log(data);
    return data;
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
}

async function getData(slug: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/movie/${slug}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos,credits`,
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

      <div>{JSON.stringify(data)}</div>
    </>
  );
}
