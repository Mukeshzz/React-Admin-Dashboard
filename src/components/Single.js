import { Tooltip } from "@mui/material";
import React from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const Single = ({ img, title, info, chart, activities }) => {
  return (
    <div className="flex">
      <div className="flex-[1]">
        <div>
          <div className="flex items-center gap-5">
            {img && (
              <img
                src={img}
                alt=""
                className="h-[100px] w-[100px] gap-5 object-cover rounded"
              />
            )}
            <h1 className="font-medium text-4xl">{title}</h1>
            <button>Update</button>
          </div>
          <div className="text-[18px]">
            {Object.entries(info).map((item) => {
                return(

                    <div className="my-[30px] mx-[0px]" key={item[0]}>
                <span className="font-semibold capitalize mr-[10px]">
                  {item[0]}
                  {console.log(item[0])}
                </span>
                <span>{item[1]}</span>
                {console.log(item[1])}
              </div>
            )
            })}
          </div>
        </div>
        <hr className="w-[80%] h-0 border-[0.5px] border-solid border-gray-500 my-5 mx-0" />
        {chart && (
          <div className="mt-[50px] w-[80%] h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {chart.dataKeys.map((dataKey) => {
                  return (
                    <Line
                      type="monotone"
                      dataKey={dataKey.name}
                      stroke={dataKey.color}
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div class="right" className="flex-[1]">
        <div>
          <h2 className="font-medium text-4xl mb-5">Latest Activities</h2>
          {activities && (
            <ul>
              {activities.map((activity) => {
                return (
                  <li
                    key={activity.text}
                    className="list-none relative w-[1px] pt-[50px] bg-[#f45b69] after:absolute after:left-[50%] after:bottom-0 after:w-[10px] after:h-[10px] after:rounded-[50%] after:content-[''] after:bg-[#f45b69] after:translate-x-[-50%]"
                  >
                    <div className="min-w-[480px] p-[15px] bg-[#f45b6810]">
                      <p>{activity.text}</p>
                      <time>{activity.time}</time>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Single;
