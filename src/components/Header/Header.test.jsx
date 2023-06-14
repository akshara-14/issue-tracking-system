import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders MySideNav", () => {
  const title = "Dashboard";
  const component = render(<Header title={title} />);
  const linkElement = screen.getByText(title);
  expect(linkElement).toBeInTheDocument();
});
