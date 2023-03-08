async function getData(slug: any) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}?api_key=26ba5e77849587dbd7df199727859189&language=en-US&append_to_response=videos,credits`,
    { next: { revalidate: 30 } }
  );

  return res.json();
}

export default async function Head({ params: { slug } }: any) {
  const data = await getData(slug);
  return (
    <>
      <title>{data.title}</title>
      <link
        rel="icon"
        href={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
      />
      <meta name="description" content={data.overview} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
}
