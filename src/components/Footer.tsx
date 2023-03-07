import React from "react";
import dayjs from "dayjs";

const Footer = () => {
  return (
    <div className="p-6 text-center mobile:pb-16">
      <p className="text-sm opacity-[0.7]">
        &#169; {dayjs().format("YYYY")}{" "}
        <strong className="text-slate-400 animate-pulse">HarDik Naik.</strong>{" "}
        All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
