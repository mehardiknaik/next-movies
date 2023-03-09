// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req.query;

  let search: any = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/search/multi?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=1`
  );
  search = await search.json();

  res.status(200).json(search);
}
