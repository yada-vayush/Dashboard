import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      
      dataSource={data}
      fill={color}
      border={{ color: currentColor, width: 2 }}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible: true, format: '${x} :data ${yval}', trackLineSettings:{
          visible:true
        }}}
      
    >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  );
};

export default SparkLine;
