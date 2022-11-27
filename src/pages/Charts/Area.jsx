import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
 SplineAreaSeries,
  Legend,
  
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";

import { useStateContext } from "../../contexts/ContextProvider";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

const Area = () => {
 
  const {currentMode}=useStateContext();
  return (   <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
  <Header category='Chart' title='Area'/>
   
    <ChartComponent
      id="area-chart"
      height="420px"
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{ border: { width: 0 }  }}
      title='Inflation Rate in Percentage'
      tooltip={{ enable: true }}
      background={currentMode==='Dark'?'#33373E':'#fff'}
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend]}></Inject>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => (
          <SeriesDirective
            key={index}
            {...item}
           
          ></SeriesDirective>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  );
};

export default Area;
