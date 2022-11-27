import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,ColumnSeries,Tooltip,DataLabel,Highlight,
 
  Legend,
  
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";

import { useStateContext } from "../../contexts/ContextProvider";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

const Area = () => {
 
  const {currentMode}=useStateContext();
  return (   <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
  <Header category='Chart' title='Bar'/>
   
    <ChartComponent
      id="bar-chart"
      height="420px"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      title='Olympic Medal Counts - RIO'
      tooltip={{ enable: true }}
      background={currentMode==='Dark'?'#33373E':'#fff'}
    >
      <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel, Highlight]}></Inject>
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => (
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
