import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieCharbox = () => {
  return (
    <div className="h-[100%] flex flex-col justify-between">
      <h1 className='font-semibold text-2xl max-lg:text-xl lg:text-2xl'>Leads by Source</h1>
      <div className="flex justify-center items-center h-[100%] w-[100%]">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
            contentStyle={{background:"white", borderRadius:"5px"}}
            />
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color}
                />
              ))}
            </Pie>
            
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between gap-[10px] text-sm max-lg:flex-col">
        {data.map((item) => (
            <div key={item.name} className="flex flex-col gap-[10px] items-center ">
                <div className="flex items-center gap-[10px]">
                    <div className="h-[10px] w-[10px] rounded-[50%]" style={{background:item.color}}/>
                    <span>{item.name}</span>
                </div>
                    <span>{item.value}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default PieCharbox;
