import React from "react";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const Props = {
    color: String,
    icon: String,
    title: String,
    dataKey: String,
    number: Number | String,
    percentage: Number,
    chartData: [{}]
}

const Chartbox = (props=Props) => {
  return (
    <div className="flex h-[100%]">
      <div className="flex flex-col justify-between flex-[3]">
        <div className="flex items-center  gap-[10px]">
          <img src={`${props.icon}`} alt=""/>
         
          <span>{props.title}</span>
        </div>
        <h1 className="font-semibold text-4xl">{props.number}</h1>
        <Link to="/" style={{color:props.color}}>View All</Link>
      </div>
      <div className="flex flex-col justify-between flex-[2]">
        <div className="w-[100%] h-[100%]">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
                <Tooltip
                contentStyle={{background:"transparent", border:"none"}}
                labelStyle={{display:"none"}}
                position={{x:10, y:60}}
                />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col text-right">
          <span className="font-bold text-xl" style={{color:props.percentage<0 ? "tomato" : "limegreen"}}>{props.percentage}%</span>
          <span  className="text-sm">this month</span>
        </div>
      </div>
    </div>
  );
};

export default Chartbox;
