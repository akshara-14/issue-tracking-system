import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "./Chart.css";

am4core.useTheme(am4themes_animated);

class Chart extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 20;

    const formValuesJson = { ...localStorage };
    let issues = Object.values(formValuesJson);

    let data = [];
    let visits = 0;
    let time = [];

    // creating an array of dates on which issues are pushed
    issues.map((val) => {
      const a = JSON.parse(val).timestamp;
      const b = a.slice(8, 10);
      time.push(b);
    });

    // sorting the array
    time.sort(function (a, b) {
      return a - b;
    });

    // loop to show data in charts
    time.forEach(myFunction);
    function myFunction(value) {
      visits++;
      data.push({
        date: new Date(2023, 5, value),
        name: "name" + value,
        value: visits,
      });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
  }
}

export default Chart;
