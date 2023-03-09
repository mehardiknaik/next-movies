import FilmCover from "@/components/FilmCover";
import Image from "next/image";
import React from "react";

export default async function Pages({ params: { type } }: any) {
  // Initiate both requests in parallel

  return <div>{type}</div>;
}
