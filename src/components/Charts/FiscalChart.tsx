import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { budgetData } from '../../data';

export const FiscalChart: React.FC = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={budgetData.fiscalTrends}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="year" 
            tick={{fontSize: 12, fill: '#64748b'}} 
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            tick={{fontSize: 12, fill: '#64748b'}} 
            axisLine={false}
            tickLine={false}
            label={{ value: '% of GDP', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            cursor={{fill: '#f1f5f9'}}
          />
          <Legend wrapperStyle={{paddingTop: '20px'}} />
          <Bar dataKey="fiscalDeficit" name="Fiscal Deficit" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={24} animationDuration={500} />
          <Bar dataKey="revenueDeficit" name="Revenue Deficit" fill="#f59e0b" radius={[4, 4, 0, 0]} barSize={24} animationDuration={500} />
          <Bar dataKey="primaryDeficit" name="Primary Deficit" fill="#10b981" radius={[4, 4, 0, 0]} barSize={24} animationDuration={500} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};