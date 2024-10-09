import React from 'react'
import DataTable from '../components/DataTable'

export default function Users() {
  return (
    <div>
      <div>

      <h1>Users</h1>
      <button>Add New Users</button>
      </div>
      <div>
        <DataTable />
      </div>
    </div>
  )
}
