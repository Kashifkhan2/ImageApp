import React from "react";
import { useGlobalContext } from "../context/newContext";

const Searchbar = () => {
  const { value, onChange } = useGlobalContext();
  return (
    <div className="relative">
      <figure>
        <img className=" w-full h-72" src="bg.jpg" alt="Bg" />
      </figure>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex items-center justify-center z-50 top-0 left-0 text-center absolute w-full h-full flex-col gap-2"
      >
        <h1 className="font-bold text-xl text-white md:text-3xl">
          Search Or Download Your Favourite Images
        </h1>
        <input
          value={value}
          onChange={onChange}
          className="w-[50%] text-green-500 p-2 rounded-2xl px-4 border-2 border-white outline-none focus:border-green-500 foc bg-transparent"
          type="text"
          placeholder="Search Here"
          name="search"
        />
      </form>
    </div>
  );
};

export default Searchbar;
