"use client";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import { RiMovie2Line } from "react-icons/ri";
import useScroll from "@/hooks/useScroll";
import clsx from "clsx";

const Header = () => {
  const isTop = useScroll(3);
  return (
    <div
      className={clsx("fixed w-full top-0 z-[99] mobile:p-3 p-5 duration-150", !isTop && "bg-header")}
    >
      <div className="flex items-center justify-between gap-3">
        {/* brand & menu */}
        <div className="flex items-center gap-6">
          {/* brand */}
          <Link href={"/"}>
            <RiMovie2Line size={30} />
          </Link>
          {/*  menu */}
          <div
            className="
        pt-1.5
        flex 
        items-center 
        gap-6
        mobile:fixed
        mobile:bottom-0
        mobile:left-0
        mobile:right-0
        mobile:justify-center
        mobile:py-3
        mobile:bg-header
        mobile:gap-6
        "
          >
            <Link href={"/movies"}>Movies</Link>
            <Link href={"/tv"}>TV</Link>
          </div>
        </div>

        {/* search */}
        <Search />
      </div>
    </div>
  );
};

export default Header;
