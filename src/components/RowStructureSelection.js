import { MdClose } from "react-icons/md";
import data from "../data/sectiondata.json";

function RowStructureSelection({
  setNewLineAdd,
  setLineSelection,
  lineSelection,
}) {
  const newLineAddClose = () => {
    setNewLineAdd(false);
  };

  const handleRowSelection = (e) => {
    const selectedLine = data.find((item) => item.id === Number(e.target.id));
    if (selectedLine !== undefined) {
      setLineSelection([...lineSelection, selectedLine]);
      setNewLineAdd(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center border-dashed border-2 pb-10 pt-3">
      <div
        className="ml-auto cursor-pointer text-gray-300 pr-3"
        onClick={newLineAddClose}
      >
        <MdClose size={22} />
      </div>
      <div className="text-xs text-gray-500">SATIR YAPISINI SEÇINIZ</div>
      <div className="max-w-3xl flex flex-wrap items-center justify-center text-gray-300 gap-5 mt-7">
        {data.map((item) => (
          <svg
            key={item.id}
            width={100}
            height={50}
            className="cursor-pointer hover:text-black"
            onClick={handleRowSelection}
          >
            <path id={item.id} d={item.svgattr} fill="currentColor" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default RowStructureSelection;
