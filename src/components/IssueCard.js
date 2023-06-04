import React, { useState } from "react";
import "./IssueCard.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";

const item = {
  id: v4(),
  name: "fix bug",
};

const item2 = {
  id: v4(),
  name: "improve css",
};

function IssueCard() {
  const [state, setState] = useState({
    todo: {
      title: "To Do",
      items: [item],
    },
    "in-progress": {
      title: "In Progress",
      items: [item2],
    },
    done: {
      title: "Done",
      items: [],
    },
  });
  return (
    <div className="issue-card">
      <DragDropContext onDragEnd={(e) => console.log(e)}>
        {_.map(state, (data, key) => {
          return (
            <div key={key} className={"column"}>
              <h2>{data.title}</h2>
              <Droppable droppableId={key}>
                {(provided) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={"droppable-column"}
                    >
                      {data.items.map((el: T, index: number) => {
                        return (
                          <Draggable
                            key={el.id}
                            index={index}
                            draggableId={el.id}
                          >
                            {(provided) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {el.name}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default IssueCard;
