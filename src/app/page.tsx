import Section from "@/components/Section";
import { TrendingHero } from "@/components/TrendingHero";

async function getData() {
  try {
    let nowPlaying: any = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_original_language=hi|mr`,
      { next: { revalidate: 30 } }
    );
    nowPlaying = await nowPlaying.json();

    let trending: any = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_original_language=hi|mr`,
      { next: { revalidate: 30 } }
    );
    trending = await trending.json();

    let popular: any = await fetch(
      `${process.env.NEXT_PUBLIC_API_PATH}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_original_language=hi|mr`,
      { next: { revalidate: 30 } }
    );
    popular = await popular.json();

    console.log("revalidate");
    return { nowPlaying, trending, popular };
  } catch (e) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Page() {
  const data = await getData();
  return (
    <div>
      <TrendingHero data={data.trending.results} />
      <Section title="In Theater" data={data.nowPlaying.results} />
      {/* <Section title="Tranding" data={data.trending.results} /> */}
      <Section title="What's Popular" data={data.popular.results} />
    </div>
  );
}
