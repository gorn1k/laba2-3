import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
    {"id":1,"firstName":"Иван","lastName":"Иванов","age":30},
    {"id":2,"firstName":"Петр","lastName":"Петров","age":33},
    {"id":3,"firstName":"Алексей","lastName":"Петрив","age":27},
    {"id":4,"firstName":"Андрей","lastName":"Соколов","age":29},
    {"id":5,"firstName":"Никита","lastName":"Чанцев","age":24},
    {"id":6,"firstName":"Антон","lastName":"Березуцкий","age":21},
    {"id":7,"firstName":"Владимир","lastName":"Кузнецов","age":45},
    {"id":8,"firstName":"Дмитрий","lastName":"Смирнов","age":28},
    {"id":9,"firstName":"Сергей","lastName":"Лебедев","age":32},
    {"id":10,"firstName":"Михаил","lastName":"Новиков","age":36},
    {"id":11,"firstName":"Иван","lastName":"Попов","age":40},
    {"id":12,"firstName":"Андрей","lastName":"Морозов","age":23},
    {"id":13,"firstName":"Алексей","lastName":"Козлов","age":31},
    {"id":14,"firstName":"Петр","lastName":"Кузнецов","age":42},
    {"id":15,"firstName":"Никита","lastName":"Соколов","age":25},
    {"id":16,"firstName":"Антон","lastName":"Новиков","age":29},
    {"id":17,"firstName":"Иван","lastName":"Лебедев","age":37},
    {"id":18,"firstName":"Алексей","lastName":"Смирнов","age":34},
    {"id":19,"firstName":"Сергей","lastName":"Попов","age":26},
    {"id":20,"firstName":"Михаил","lastName":"Чанцев","age":38}
    
];

export default function DataGridDemo() {
  const [gridColumns, setGridColumns] = React.useState(columns);

  const handleColumnOrderChange = (newColumns) => {
    setGridColumns(newColumns);
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={gridColumns}
        onColumnOrderChange={handleColumnOrderChange}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
