import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ReceiptsBreakdown } from '../../types';

interface ReceiptsChartProps {
  data: ReceiptsBreakdown;
}

const TAX_COLORS = {
  incomeTax: '#138808',
  corporationTax: '#ea580c',
  gst: '#eab308',
  unionExciseDuties: '#8b5cf6',
  customs: '#ec4899',
  otherTaxes: '#64748b',
};

const formatCrore = (value: number): string => {
  if (value >= 100000) {
    return `${(value / 100000).toFixed(2)}L`;
  }
  return `${(value / 1000).toFixed(0)}K`;
};

const formatFullCrore = (value: number): string => {
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)} Lakh Crore`;
  }
  return `₹${value.toLocaleString('en-IN')} Crore`;
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white px-3 py-2 shadow-lg rounded-lg border border-slate-200">
        <p className="font-semibold text-slate-800">{data.name}</p>
        <p className="text-sm text-slate-600">{formatFullCrore(data.value)}</p>
        <p className="text-xs text-slate-500">{data.percent?.toFixed(1)}% of Gross Tax</p>
      </div>
    );
  }
  return null;
};

export const ReceiptsChart: React.FC<ReceiptsChartProps> = ({ data }) => {
  const taxData = [
    { name: 'Income Tax', value: data.taxComposition.incomeTax, color: TAX_COLORS.incomeTax },
    { name: 'Corporation Tax', value: data.taxComposition.corporationTax, color: TAX_COLORS.corporationTax },
    { name: 'GST', value: data.taxComposition.gst, color: TAX_COLORS.gst },
    { name: 'Union Excise', value: data.taxComposition.unionExciseDuties, color: TAX_COLORS.unionExciseDuties },
    { name: 'Customs', value: data.taxComposition.customs, color: TAX_COLORS.customs },
    { name: 'Other Taxes', value: data.taxComposition.otherTaxes, color: TAX_COLORS.otherTaxes },
  ].map(item => ({
    ...item,
    percent: (item.value / data.grossTaxRevenue) * 100,
  }));

  const receiptsFlowData = [
    { name: 'Gross Tax Revenue', value: data.grossTaxRevenue, color: '#3b82f6' },
    { name: "States' Share", value: -data.statesShare, color: '#ef4444' },
    { name: 'Net Tax Revenue', value: data.netTaxRevenue, color: '#10b981' },
    { name: 'Non-Tax Revenue', value: data.nonTaxRevenue, color: '#8b5cf6' },
    { name: 'Capital Receipts', value: data.capitalReceipts.total, color: '#f59e0b' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Tax Composition Pie Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Tax Revenue Composition</h3>
        <p className="text-sm text-slate-500 mb-4">
          Gross Tax Revenue: <span className="font-semibold text-slate-700">{formatFullCrore(data.grossTaxRevenue)}</span>
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="h-48 w-48 flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taxData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {taxData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Custom Legend */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            {taxData.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-xs text-slate-600">
                  {entry.name} ({entry.percent.toFixed(0)}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Receipts Summary Cards */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Receipts Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-sm text-slate-600">Gross Tax Revenue</span>
            <span className="font-semibold text-slate-800">{formatCrore(data.grossTaxRevenue)} Cr</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100 pl-4">
            <span className="text-sm text-red-500">(-) States' Share</span>
            <span className="font-semibold text-red-500">{formatCrore(data.statesShare)} Cr</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100 bg-emerald-50 px-3 rounded">
            <span className="text-sm font-medium text-emerald-700">Net Tax Revenue (Centre)</span>
            <span className="font-bold text-emerald-700">{formatCrore(data.netTaxRevenue)} Cr</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-sm text-slate-600">Non-Tax Revenue</span>
            <span className="font-semibold text-slate-800">{formatCrore(data.nonTaxRevenue)} Cr</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100 bg-blue-50 px-3 rounded">
            <span className="text-sm font-medium text-blue-700">Total Revenue Receipts</span>
            <span className="font-bold text-blue-700">{formatCrore(data.totalRevenueReceipts)} Cr</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-sm text-slate-600">Capital Receipts (Non-Debt)</span>
            <span className="font-semibold text-slate-800">{formatCrore(data.capitalReceipts.nonDebt)} Cr</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-sm text-slate-600">Capital Receipts (Debt)</span>
            <span className="font-semibold text-slate-800">{formatCrore(data.capitalReceipts.debt)} Cr</span>
          </div>
          <div className="flex justify-between items-center py-3 bg-slate-800 text-white px-3 rounded-lg mt-2">
            <span className="text-sm font-medium">Total Receipts</span>
            <span className="font-bold text-lg">{formatCrore(data.totalReceipts)} Cr</span>
          </div>
        </div>
      </div>
    </div>
  );
};
