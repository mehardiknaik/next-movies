import Link from "next/link";
import React from "react";
import Search from "./Search";

const Header = () => (
  <div className="bg-header sticky top-0 z-[99] p-5">
    <div className="flex items-center justify-between gap-3 mobile:block">
      {/* brand & menu */}
      <div className="flex items-center gap-6">
        {/* brand */}
        <h1 className="text-2xl font-semibold">
          <Link href={"/"}>Movielia</Link>
        </h1>
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

export default Header;