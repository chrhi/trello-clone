"use client";

import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";

interface ColumnAbdullahProps {
  title: string;
  tasks: any[];
  index: number;
}

const Column: FC<ColumnAbdullahProps> = ({ title, index }) => {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="w-[350px] min-h-[500px] bg-zinc-100 "
        ></div>
      )}
    </Draggable>
  );
};

export default Column;
