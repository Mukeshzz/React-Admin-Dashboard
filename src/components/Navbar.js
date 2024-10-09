import React from "react";



export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-[100%] p-[20px]">
      <div className="flex items-center gap-5 font-bold">
        <img src="/logo.svg" alt="" />
        <span>Rocky</span>
      </div>
      <div className="flex items-center gap-5">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className='relative'>
          <img src="/notifications.svg" alt="" />
          <span className="w-[16px] h-[16px] rounded-[50%] text-white bg-red-600 absolute top-[-10px] right-[-10px] flex items-center justify-center text-xs">1</span>
        </div>
        <div className="flex items-center gap-[10px]">
          <img
            src="https://eclatsuperior.com/wp-content/uploads/2021/04/man4.jpg"
            alt=""
            className="w-[26px] h-[26px] rounded-[50%] object-cover"
          />
          <span>Mukesh</span>
        </div>
        <img src="/settings.svg" alt="" />
      </div>
      
    </div>
  );
}
