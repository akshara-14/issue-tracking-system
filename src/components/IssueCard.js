import React, { useState } from "react";
import "./IssueCard.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";
import Card from "./Card";

// const item1 = {
//   id: v4(),
//   name: "Fix Bug",
// };

function IssueCard() {
  const formValuesJson = { ...localStorage };
  let issues = Object.values(formValuesJson);

  var toDoArr = [];
  var inProgArr = [];
  var doneArr = [];
  issues.map((val) => {
    if (JSON.parse(val).status === "In Progress") {
      inProgArr.push({
        id: v4(),
        component: [
          <Card key="{JSON.parse(val).title}" data={JSON.parse(val)} />,
        ],
      });
    } else if (JSON.parse(val).status === "Done") {
      doneArr.push({
        id: v4(),
        component: [
          <Card key="{JSON.parse(val).title}" data={JSON.parse(val)} />,
        ],
      });
    } else {
      toDoArr.push({
        id: v4(),
        component: [
          <Card key="{JSON.parse(val).title}" data={JSON.parse(val)} />,
        ],
      });
    }
  });
  const [state, setState] = useState({
    todo: {
      title: "To Do",
      items: toDoArr,
    },
    "in-progress": {
      title: "In Progress",
      items: inProgArr,
    },
    done: {
      title: "Done",
      items: doneArr,
    },
  });

  const handleDragEnd = ({ destination, source }) => {
    console.log("from", source);
    console.log("to", destination);
    if (!destination) {
      console.log("not dropped in droppable");
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      console.log("dropped in same place");
      return;
    }

    const itemCopy = { ...state[source.droppableId].items[source.index] };

    setState((prev) => {
      prev = { ...prev };
      prev[source.droppableId].items.splice(source.index, 1);
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );
      return prev;
    });
  };

  return (
    <div className="issue-card">
      <DragDropContext onDragEnd={handleDragEnd}>
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
                      {data.items.map((el, index) => {
                        return (
                          <Draggable
                            key={el.id}
                            index={index}
                            draggableId={el.id}
                          >
                            {(provided) => {
                              return (
                                <div
                                  className="item"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  // {...console.log({
                                  //   ...provided.draggableProps,
                                  // })}
                                >
                                  {el.component}
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
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
