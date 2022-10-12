import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Statistic.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    const data = useLoaderData().data;
    console.log(data)
    return (
        <div>
            <h3 className='statistic-header'>Mark Analysis Chart</h3>
      <ResponsiveContainer width="95%" height={400}>
        <LineChart className='chart'
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Statistic;