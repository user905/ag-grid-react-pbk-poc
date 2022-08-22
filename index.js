import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import { sourceData } from './rowData';
import { headerColDef, generalColDef } from './colDefs';
import {
  transposeHeaderData,
  transposeGeneralData,
} from './DataTransposeService.js';

import './style.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
  const headerHeight = 0;
  var headerObjArr = transposeHeaderData(sourceData.header);
  var generalObjArr = transposeGeneralData(sourceData.general);
  const [headerData] = useState(headerObjArr);
  const [headerCols] = useState(headerColDef);
  // const [generalCols] = useState(generalColDef);
  const [generalData] = useState(generalObjArr);

  return (
    <div>
      <div
        className="ag-theme-alpine"
        style={{ height: 130, width: 'auto', marginBottom: '50px' }}
      >
        <h2>PB-K Table</h2>
        <AgGridReact
          rowData={headerData}
          columnDefs={headerCols}
          headerHeight={headerHeight}
        ></AgGridReact>
      </div>
      <h3>General</h3>
      <div className="ag-theme-alpine" style={{ height: 520, width: 'auto' }}>
        <AgGridReact
          rowData={generalData}
          columnDefs={headerCols}
          headerHeight={headerHeight}
        ></AgGridReact>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
