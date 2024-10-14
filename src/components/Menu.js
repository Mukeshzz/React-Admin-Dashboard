import React from "react";
import { Link } from "react-router-dom";
import { menu } from "../data.ts";

export default function Menu() {
  return (
    <div>
      {menu.map((item) => (
        <div className="flex flex-col mb-5" key={item.id}>
          <span className="text-xs font-extralight text-[#6A9AB0] uppercase">
            {item.title}
          </span>

          {item.listItems.map((listItem) => (
            <Link
              to={listItem.url}
              className="flex items-center gap-[10px] p-[10px] rounded-[5px] hover:bg-[#07466c]"
              key={listItem.id}
            >
              <img src={`/${listItem.icon}`} alt="" />

              <span>{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
