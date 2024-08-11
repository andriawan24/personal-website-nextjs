import React from "react";

interface Param {
  text: string;
}

export default function Pill(param: Param) {
  return (
    <span className="cursor-pointer hover:scale-[0.98] transition-all duration-200 py-2 px-4 bg-color-background-pill-dark rounded-full text-xs md:text-sm text-color-background-dark font-semibold leading-140">
      {param.text}
    </span>
  );
}
