import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import NewLineAdd from "./components/NewLineAdd";
import RowSection from "./components/RowSection";

function App() {
  const [lineSelection, setLineSelection] = useState([]);

  const onDragEnd = (result) => {
    const { destination, source, reason } = result;
    if (!destination || reason === "CANCEL") {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const lineSelect = lineSelection;
    const droppedUser = lineSelect[source.index];

    lineSelect.splice(source.index, 1);
    lineSelect.splice(destination.index, 0, droppedUser);

    setLineSelection(lineSelect);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <RowSection
          lineSelection={lineSelection}
          setLineSelection={setLineSelection}
        />
        <NewLineAdd
          setLineSelection={setLineSelection}
          lineSelection={lineSelection}
        />
      </DragDropContext>
    </>
  );
}

export default App;
