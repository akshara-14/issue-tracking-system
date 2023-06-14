import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Create from "./Create";

describe("Create Component", () => {
  test("form submission", () => {
    render(<Create />);

    // Fill in form fields
    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(screen.getByLabelText("Type"), {
      target: { value: "Bug" },
    });
    fireEvent.change(screen.getByLabelText("Status"), {
      target: { value: "Open" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Submit"));

    expect.any(String), expect.any(String);
  });
});
