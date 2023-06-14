import React from "react";
import { render, screen } from "@testing-library/react";
import { DragDropContext } from "react-beautiful-dnd";
import PriorityCard from "./PriorityCard";

test("renders issue cards for each status", () => {
  render(
    <DragDropContext onDragEnd={() => {}}>
      <PriorityCard />
    </DragDropContext>
  );

  // Assert that the issue cards are rendered for each status
  expect(screen.getByText("Latest Issues")).toBeInTheDocument();
  expect(screen.getByText("High Priority")).toBeInTheDocument();
  expect(screen.getByText("List")).toBeInTheDocument();
});
