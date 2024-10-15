import React, { useState } from "react";
import DataTable from "../components/DataTable";
import Add from "../components/Add.js";
import { products } from "../data.ts";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
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
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

export default function Products() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-5 m-3">
        <h1 className="text-4xl font-bold">Products</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-[#EAD8B1] text-black rounded p-1 cursor-pointer"
        >
          Add New Products
        </button>
      </div>

      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  );
}
