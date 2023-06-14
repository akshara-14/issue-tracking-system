import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

test("renders search input and search icon", () => {
  render(<Searchbar />);
  const searchInput = screen.getByPlaceholderText("Search");

  expect(searchInput).toBeInTheDocument();
});
