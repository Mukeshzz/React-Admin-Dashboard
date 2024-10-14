import React from "react";

const Add = ({ slug, columns, setOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    //Add new item
  };

  return (
    <div className="h-[100vh] w-[100vw] absolute top-0 left-0 bg-[rgba(0,0,0,0.724)] flex items-center justify-center">
      <div className="p-[50px] rounded-[10px] bg-[#001F3F] relative ">
        <span
          onClick={() => setOpen(false)}
          className="cursor-pointer absolute top-[10px] right-[10px]"
        >
          X
        </span>
        <h1 className="text-4xl mb-10 font-bold text-[#e0e1e1]">
          Add new {slug}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap max-w-[500px] justify-between "
        >
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => {
              return (
                <div className="flex flex-col gap-[10px] mb-5">
                  <label className="text-sm">{column.headerName}</label>
                  <input
                    className="p-[10px] bg-transparent outline-none text-white border border-solid border-[#e0e1e1] rounded"
                    type={column.type}
                    placeholder={column.field}
                  />
                </div>
              );
            })}
          <button className="w-[100%] p-[10px] cursor-pointer bg-[#EAD8B1] text-black rounded">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
