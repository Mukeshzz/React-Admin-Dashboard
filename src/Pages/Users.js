import React, { useState } from 'react'
import DataTable from '../components/DataTable'
import { userRows } from '../data.ts'
import AddUser from '../components/AddUser.js';

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        <img
          src={params.row.img || "/noavatar.png"}
          alt=""
          className="h-8 w-8 rounded-[50%] object-cover"
        />
      );
    },
  },
  
  {
    field: "firstName",
    headerName: "First name",
    width: 100,
    type:"String"
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 100,
    type:"String"
  },
  
  {
    field: "email",
    headerName: "Email",
    width: 200,
    type:"String"
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 200,
    type:"String"
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type:"String"
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean"
  },
];

export default function Users() {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className='flex items-center gap-5 m-3'>
        <h1 className='text-4xl font-bold'>Users</h1>
        <button onClick={() => setOpen(true)} className='bg-[#EAD8B1] text-black rounded p-1 cursor-pointer'>Add New Users</button>
      </div>
    
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <AddUser slug="users" columns={columns} setOpen={setOpen} />}
    </div>
  )
}
