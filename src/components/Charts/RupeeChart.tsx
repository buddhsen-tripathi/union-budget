import React, { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`w-full relative ${isMobile ? 'h-[420px]' : 'h-80'}`}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy={isMobile ? 100 : "50%"}
            innerRadius={isMobile ? 50 : 60}
            outerRadius={isMobile ? 80 : 100}
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
            layout={isMobile ? "horizontal" : "vertical"}
            verticalAlign={isMobile ? "bottom" : "middle"}
            align={isMobile ? "center" : "right"}
            wrapperStyle={{
              fontSize: '11px',
              color: '#475569',
              ...(isMobile && { paddingTop: '16px' })
            }}
            formatter={(value, entry: any) => <span className="text-slate-600 ml-1">{value} ({entry.payload.percentage}%)</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};