import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const Statistic = () => {
    const data = useLoaderData().data;
    console.log(data)
    return (
        <div>
            <h1 bg='warning'>Mark Analysis Chart</h1>
            <AreaChart
      width={400}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
        </div>
    );
};

export default Statistic;