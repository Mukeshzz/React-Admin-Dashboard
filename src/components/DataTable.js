import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import { Link } from "react-router-dom";



const DataTable = ({columns, rows, slug }) => {

    const handleDelete = (id) =>{
        //delete the item
        console.log(id+" has been deleted!")

    }

    const actionColumn = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
           <div className="flex gap-4">
            <Link to={`/${slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" className="h-5 w-5 cursor-pointer"/>
            </Link>
            <div onClick={() => handleDelete(params.row.id)}> 
                <img src="/delete.svg" alt="" className="h-5 w-5 cursor-pointer"/>
            </div>
           </div>
          );
        },
      }
  return (
    <div>
      <DataGrid
      className="bg-white p-5"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
