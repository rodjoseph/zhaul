import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Booking } from '../types/types';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'user',
    headerName: 'User ID',
    width: 150,
    editable: true,
  },
  {
    field: 'truck',
    headerName: 'Truck Number',
    width: 150,
    editable: true,
  },
  {
    field: 'start',
    headerName: 'Start DateTime',
    type: 'datetime',
    width: 180,
    editable: true,
  },
  {
    field: 'end',
    headerName: 'End DateTime',
    type: 'datetime',
    width: 180,
    editable: true,
  },
  // {
  //   field: 'created_at',
  //   headerName: 'Created at',
  //   type: 'datetime',
  //   width: 180,
  //   editable: true,
  // },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function BookingsDataGrid({rows}: {rows: Booking[]}) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={50}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  );
}