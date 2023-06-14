import React from "react";
import { render } from "@testing-library/react";
import Chart from "./Chart";

jest.mock("@amcharts/amcharts4/core", () => ({
  create: jest.fn().mockReturnValue({
    padding: { right: 20 },
    xAxes: {
      push: jest.fn(),
    },
    yAxes: {
      push: jest.fn(),
    },
    series: {
      push: jest.fn(),
    },
    cursor: {},
    scrollbarX: {},
    data: [],
    dispose: jest.fn(),
  }),
}));
jest.mock("@amcharts/amcharts4/charts", () => ({
  XYChart: jest.fn(),
  DateAxis: jest.fn(),
  ValueAxis: jest.fn(),
  LineSeries: jest.fn(),
  XYChartScrollbar: jest.fn().mockReturnValue({
    series: {
      push: jest.fn(),
    },
  }),
}));
jest.mock("@amcharts/amcharts4/themes/animated", () => ({}));

describe("Chart", () => {
  test("renders chart without errors", () => {
    const { container } = render(<Chart />);

    // Assert that the chart container element exists
    expect(container.querySelector("#chartdiv")).toBeInTheDocument();
  });
});
