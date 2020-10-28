import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import API from '../utils/API';
import Title from '../components/Title';

let formatYAxis = (tick) => {
  return 10 - tick;
}

export default function ResultChartContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      let data = {};
      const result = await API.getResults()
        .then((result) => {
          // console.log(result[0]);
          let {Results, ...meta} = result[0];
          // console.log(meta);
          data.meta = meta;
          return result[0].Results;
        })
        .then((rows) => {
          // console.table(rows);
          data.rows = rows.map((res, i) => {
            return {
              "driver": res.Driver.code,
              "points": res.points,
              "pos": res.position,
              "posVal": rows.length - res.position,
              // "posVal": res.position,
              "grid": res.grid,
              "gridVal": rows.length - res.grid,
              // "gridVal": res.grid,
            };
          });
          return data;
        });
      setData(result);
    };
    fetchData().catch((err) => console.warn('error', err.message));
  }, []);
  console.log(data.rows);
  return (
    <>
    { data.meta && <Title>{ data.meta.season } { data.meta.raceName } Results</Title> }
      <ResponsiveContainer>
        <BarChart data={data.rows} margin={{ top: 0, right: 2, bottom: 0, left: 2, }}>
          <XAxis dataKey="driver" type="category" />
          <YAxis dataKey="posVal" />
          {/* <Tooltip /> */}
          <Tooltip formatter={(value, name) => ([((data.rows.length - value).toString()), name])} />
          <Legend />
          <CartesianGrid strokeDashArray="3 3" />
          <Bar dataKey="posVal" name="Position" fill="#8884d8" />
          <Bar dataKey="gridVal" name="Grid" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
