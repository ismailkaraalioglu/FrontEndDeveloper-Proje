import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import RowStructureSelection from "./RowStructureSelection";

function NewLineAdd({ setLineSelection, lineSelection }) {
  const [newLineAdd, setNewLineAdd] = useState(false);

  const lineAdd = () => {
    setNewLineAdd(true);
  };

  return (
    <>
      {!newLineAdd && (
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center border-dashed border-2 pb-8 pt-3">
          <div className="ml-auto cursor-pointer text-gray-300 pr-3">
            <MdClose size={22} />
          </div>
          <div
            className="flex items-center flex-col cursor-pointer"
            onClick={lineAdd}
          >
            <span className="text-slate-700 pb-2">
              <BsPlusCircleFill size={30} />
            </span>
            <span className="font-medium italic text-slate-500 text-xs">
              Yeni Satır Ekle
            </span>
          </div>
        </div>
      )}

      {newLineAdd && (
        <RowStructureSelection
          setNewLineAdd={setNewLineAdd}
          setLineSelection={setLineSelection}
          lineSelection={lineSelection}
        />
      )}
    </>
  );
}

export default NewLineAdd;
