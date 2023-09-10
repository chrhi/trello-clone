"use client";

import { FC } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { StrictModeDroppable } from "../StrictModeDroppable";
import Column from "./Column";

interface BoardAbdullahProps {}

const Board: FC<BoardAbdullahProps> = ({}) => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <StrictModeDroppable
        droppableId="board"
        type="COLUMN"
        direction="horizontal"
        ignoreContainerClipping={true}
        isCombineEnabled={true}
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-full h-full "
          >
            <Column index={0} tasks={[]} title="Todo" key={909} />
            <Column index={1} tasks={[]} title="todo2" key={910} />
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};

export default Board;
