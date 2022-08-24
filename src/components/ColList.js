import React from "react";
import { BsWindowSidebar } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function ColList({ col }) {
  return (
    <div
      key={col.id}
      style={{ width: `${col.width}%` }}
      className="flex relative h-7 items-center justify-center text-gray-400 border-2 border-dashed border-black border-opacity-60 hover:outline-1 hover:outline-offset-8 hover:outline-black hover:outline-dotted group"
    >
      <div className="bg-gray-600 hidden absolute bottom-[13px] p-1 text-white left-0 -translate-x-1/2 z-50 hover:bg-gray-800 cursor-pointer group-hover:inline-block">
        <BsWindowSidebar size={13} />
      </div>
      <AiOutlinePlus size={20} />
    </div>
  );
}

export default ColList;
