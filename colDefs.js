export const headerColDef = [
  { field: 'Row Header', cellStyle: { 'background-color': '#ADD8E6' } },
  { field: 'Value' },
];
export const generalColDef = [
  {
    //unimplemented; but this is another option to added a 'grouped' header that couple replace the h2's
    headerName: 'General',
    children: [{ field: 'Row Header' }, { field: 'Value' }],
  },
];
