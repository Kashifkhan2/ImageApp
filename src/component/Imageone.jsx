import React from "react";

const Imageone = (props) => {
  const { download, html } = props.elem;
  return (
    <div className="relative" key={props.id}>
      <img
        className="md:w-[20rem] sm:w-[15rem] w-[10rem] h-[15rem] sm:h-[15rem] md:h-[20rem] rounded-xl"
        src={props.urls.small}
        alt="Image"
      />
      <div className="absolute flex items-center justify-center top-0 opacity-0 hover:opacity-100 left-0 h-full w-full rounded-xl bg-[#0000005c]">
        <a href={html} target="_blank">
          <i className="fa-solid fa-download fa-2xl text-white"></i>
        </a>
      </div>
    </div>
  );
};

export default Imageone;
