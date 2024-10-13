import React from "react";

const AddUser = ({ slug, columns, setOpen }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        //Add new item
    }

  return (
    <div className="h-[100vh] w-[100vw] absolute top-0 left-0 bg-[rgba(0,0,0,0.724)] flex items-center justify-center">
      <span onClick={()=> setOpen(false)}>X</span>
      <h1 className="text-5xl font-bold">Add new {slug}</h1>
      <form onSubmit={handleSubmit}>
        {columns
          .filter((item) => item.field !== "id" && item.field !== "img")
          .map((column) => {
            return(

                <div>
              <label>{column.headerName}</label>
              <input type={column.type} placeholder={column.field} />
            </div>
            )
          })}
          <button>Send</button>
      </form>
    </div>
  );
};

export default AddUser;
