import React from "react";

interface Props {
  title: string;
  link: string;
  titleLink: string;
}

export default function TitleWithLink(props: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <h3 className="text-2xl font-bold leading-140 text-color-text-primary">
        {props.title}
      </h3>
      <a
        href={props.link}
        className="text-color-text-primary font-medium leading-140 hover:opacity-80 transition-all duration-200"
      >
        {props.titleLink}
      </a>
    </div>
  );
}
