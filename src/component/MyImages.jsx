import React from "react";
import { useGlobalContext } from "../context/newContext";
import Imageone from "./Imageone";

const MyImages = () => {
  const { showImages, count, prevHandler, nextHandler, disabledBtn } =
    useGlobalContext();
  return (
    <>
      <div className="flex items-center justify-center gap-3 flex-wrap w-[98%] md:max-w-[90%] m-auto mt-12">
        {showImages.map((curElem) => {
          const { links, urls, id } = curElem;
          return <Imageone id={id} elem={links} urls={urls} />;
        })}
      </div>
      <div className="max-w-[90%] m-auto relative mt-12 flex items-center justify-center gap-3">
        <button
          disabled={count <= 1}
          onClick={prevHandler}
          className="px-10 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2"
        >
          Prev
        </button>
        <button
          disabled={count === disabledBtn}
          onClick={nextHandler}
          className="px-10 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default MyImages;
