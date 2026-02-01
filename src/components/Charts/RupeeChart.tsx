import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { RupeeFlow } from '../../types';

interface Props {
  data: RupeeFlow[];
  title?: string;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-100 shadow-lg rounded-lg">
        <p className="font-semibold text-slate-800">{payload[0].name}</p>
        <p className="text-india-saffron font-bold">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export const RupeeChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-80 w-full relative">
       {/* Center Icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10">
        <span className="text-9xl font-serif text-slate-800">₹</span>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="percentage"
            nameKey="label"
            animationDuration={600}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            layout="vertical" 
            verticalAlign="middle" 
            align="right"
            wrapperStyle={{fontSize: '12px', color: '#475569'}}
            formatter={(value, entry: any) => <span className="text-slate-600 ml-1">{value} ({entry.payload.percentage}%)</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};