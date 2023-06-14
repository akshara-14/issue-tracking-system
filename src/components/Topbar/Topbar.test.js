import React from "react";
import { render, screen } from "@testing-library/react";
import Topbar from "./Topbar";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));
test("renders logo, and icons", () => {
  render(<Topbar />);
  const logo = screen.getByAltText("Logo");

  expect(logo).toBeInTheDocument();
});
