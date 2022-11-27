import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2md:m-10 p-2 md:p-10 bg-white rounded-3x1">
      <Header category="Page" title="Employess" />
      <GridComponent
        
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        {/*Pagination*/}
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search,Toolbar]}></Inject>
      </GridComponent>
    </div>
  );
};

export default Employees;
