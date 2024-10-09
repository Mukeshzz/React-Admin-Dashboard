import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'


const Props = {
    title: String,
    color: String,
    dataKey: String,
    chartData: [{}]
}


const BarChartBox = (props=Props) => {
  return (
    <div className='w-[100%] h-[100%]'>
      <h1 className='font-semibold mb-5'>{props.title}</h1>
      <div className='h-[100%]'>
      <ResponsiveContainer width="99%" height={150}>
        <BarChart  data={props.chartData}>
            <Tooltip
            contentStyle={{background: "#2a3447" , borderRadius: "5px" }}
            labelStyle={{display:"none"}}
            cursor={{fill:"none"}}
            />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartBox
