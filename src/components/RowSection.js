import { Droppable } from "react-beautiful-dnd";
import RowList from "./RowList";

function RowSection({ lineSelection, setLineSelection }) {
  return (
    <Droppable droppableId="dp1">
      {(provided) => (
        <div
          className="mt-16 pb-20"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {lineSelection.length > 0 &&
            lineSelection.map((item, index) => (
              <RowList
                item={item}
                index={index}
                lineSelection={lineSelection}
                setLineSelection={setLineSelection}
              />
            ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default RowSection;
