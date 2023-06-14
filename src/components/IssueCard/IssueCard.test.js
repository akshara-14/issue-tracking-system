import React from "react";
import { render, screen } from "@testing-library/react";
import { DragDropContext } from "react-beautiful-dnd";
import IssueCard from "./IssueCard";

test("renders issue cards for each status", () => {
  render(
    <DragDropContext onDragEnd={() => {}}>
      <IssueCard />
    </DragDropContext>
  );

  // Assert that the issue cards are rendered for each status
  expect(screen.getByText("To Do")).toBeInTheDocument();
  expect(screen.getByText("In Progress")).toBeInTheDocument();
  expect(screen.getByText("Done")).toBeInTheDocument();
});
