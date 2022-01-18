import React,{useContext} from 'react'
import "./analytics.scss"
import { Context } from '../../context'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function Analytics() {
    const {date} = useContext(Context)
    console.log(date)
  return (
    <div className='analytic'>
    <h3 className='text-analytic'>User Analytics</h3>
    <LineChart
      width={1400}
      height={400}
      data={date}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" className='names-of-date'/>
      <Tooltip />
      <Line type="monotone" dataKey="User" stroke="#3361FF" />
    </LineChart>
    </div>
  );
}
export default Analytics;
