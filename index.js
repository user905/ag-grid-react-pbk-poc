import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import { rowData, altRowData, test } from './rowData';
import { headerCols, altHeaderCols, testCols } from './colDefs';

import './style.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  const [data] = useState(rowData);
  const [altData] = useState(altRowData);
  // const [testData] = useState(test);

  var dataObj = {};
  Object.keys(test.header).forEach((row) => {
    dataObj[row] = test.header[row];
  });

  var dataObjArr = [dataObj];

  const [testData] = useState(dataObjArr);
  // const [headerColDefs] = useState(headerCols);
  // const [altHeaderColDefs] = useState(altHeaderCols);
  const [testColsDefs] = useState(testCols);

  console.log(testData);

  return (
    <div className="ag-theme-alpine" style={{ height: 200, width: 'auto' }}>
      <h2 style={{ backgroundColor: 'cyan' }}>PB-K Table</h2>
      {/* <AgGridReact rowData={data} columnDefs={headerColDefs}></AgGridReact>
      <AgGridReact rowData={altData} columnDefs={altHeaderColDefs}></AgGridReact> */}
      <AgGridReact rowData={testData} columnDefs={testColsDefs}></AgGridReact>
      <h3 style={{ backgroundColor: 'cyan' }}>General</h3>
    </div>
  );
};

render(<App />, document.getElementById('root'));
