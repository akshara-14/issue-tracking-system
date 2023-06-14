import MySideNav from "./MySideNav";
import { render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

test("renders side navigation with correct items", () => {
  render(<MySideNav />);
  const dashboardNavItem = screen.getByText("Dashboard");
  const issueListNavItem = screen.getByText("Issue List");
  const createIssueNavItem = screen.getByText("Create Issue");

  expect(dashboardNavItem).toBeInTheDocument();
  expect(issueListNavItem).toBeInTheDocument();
  expect(createIssueNavItem).toBeInTheDocument();
});
