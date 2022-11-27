import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  LineSeries,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

const LineChart = () => {
  const {currentMode}=useStateContext();
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      title='Inflation Rate'
      tooltip={{ enable: true }}
      background={currentMode==='Dark'?'#33373E':'#fff'}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}></Inject>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective
            key={index}
            {...item}
           
          ></SeriesDirective>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
