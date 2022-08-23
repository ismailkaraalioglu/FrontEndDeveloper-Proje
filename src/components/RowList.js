import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { FaGripHorizontal } from "react-icons/fa";
import { Draggable } from "react-beautiful-dnd";
import ColList from "./ColList";

function RowList({ item, index, lineSelection, setLineSelection }) {
  const removeLineSelection = (key) => {
    const removeItemIndex = lineSelection.findIndex(
      (line, index) => index === key
    );
    lineSelection.splice(removeItemIndex, 1);
    const newLineSelection = [...lineSelection];
    setLineSelection(newLineSelection);
  };

  const addLineRow = (item) => {
    setLineSelection([...lineSelection, item]);
  };

  return (
    <Draggable key={index} draggableId={index.toString()} index={index}>
      {(provided) => (
        <div
          key={item.id}
          className="flex items-center gap-x-5 h-7 max-w-[1450px] py-[22px] px-5 mx-auto relative hover:ring-2 group"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="hidden items-center justify-center group-hover:flex absolute bottom-11 left-1/2 -translate-x-1/2 bg-blue-300 rounded z-20">
            <div
              className="hover:bg-blue-400 p-1.5 rounded cursor-pointer"
              onClick={() => addLineRow(item)}
            >
              <AiOutlinePlus size={11} />
            </div>
            <div
              className="hover:bg-blue-400 p-1.5 rounded cursor-pointer"
              {...provided.dragHandleProps}
            >
              <FaGripHorizontal size={11} />
            </div>
            <div
              className="hover:bg-blue-400 p-1.5 rounded cursor-pointer"
              onClick={() => removeLineSelection(index)}
            >
              <MdClose size={11} />
            </div>
          </div>

          <div className="flex w-full gap-x-5">
            {item.kolon.map((col, index) => (
              <ColList col={col} index={index} />
            ))}
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default RowList;
