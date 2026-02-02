import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ExpenditureBreakdown } from '../../types';

interface ExpenditureStructureChartProps {
  data: ExpenditureBreakdown;
}

const COLORS = {
  establishment: '#3b82f6',
  centralSchemes: '#10b981',
  otherCentral: '#8b5cf6',
  interest: '#ef4444',
  css: '#f59e0b',
  fcGrants: '#ec4899',
  others: '#64748b',
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
        <p className="text-xs text-slate-500">{data.percent?.toFixed(1)}% of Total</p>
      </div>
    );
  }
  return null;
};

export const ExpenditureStructureChart: React.FC<ExpenditureStructureChartProps> = ({ data }) => {
  const expenditureData = [
    { name: 'Central Sector Schemes', value: data.centralSectorSchemes, color: COLORS.centralSchemes },
    { name: 'Other Central Sector', value: data.otherCentralSector - data.interestPayments, color: COLORS.otherCentral },
    { name: 'Interest Payments', value: data.interestPayments, color: COLORS.interest },
    { name: 'Establishment', value: data.establishmentExpenditure, color: COLORS.establishment },
    { name: 'Centrally Sponsored Schemes', value: data.centrallySponsoredSchemes, color: COLORS.css },
    { name: 'FC Grants', value: data.financeCommissionGrants, color: COLORS.fcGrants },
    { name: 'Other Transfers', value: data.otherTransfers, color: COLORS.others },
  ].map(item => ({
    ...item,
    percent: (item.value / data.totalExpenditure) * 100,
  }));

  const capitalData = [
    { name: 'Capital Expenditure', value: data.capitalExpenditure, color: '#3b82f6' },
    { name: 'Grants for Capital Assets', value: data.grantsForCapitalAssets, color: '#10b981' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Expenditure Structure Pie Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Government Expenditure Structure</h3>
        <p className="text-sm text-slate-500 mb-4">
          Total Expenditure: <span className="font-semibold text-slate-700">{formatFullCrore(data.totalExpenditure)}</span>
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="h-48 w-48 flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenditureData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {expenditureData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Custom Legend */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            {expenditureData.map((entry, index) => (
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

      {/* Capital Expenditure Card */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Capital Expenditure</h3>
        <div className="space-y-4">
          {/* Capital Expenditure Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-600">Capital Expenditure</span>
              <span className="font-semibold text-blue-600">{formatCrore(data.capitalExpenditure)} Cr</span>
            </div>
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${(data.capitalExpenditure / data.effectiveCapitalExpenditure) * 100}%` }}
              />
            </div>
          </div>

          {/* Grants for Capital Assets Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-600">Grants for Capital Assets</span>
              <span className="font-semibold text-emerald-600">{formatCrore(data.grantsForCapitalAssets)} Cr</span>
            </div>
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${(data.grantsForCapitalAssets / data.effectiveCapitalExpenditure) * 100}%` }}
              />
            </div>
          </div>

          {/* Effective Capital Expenditure Total */}
          <div className="mt-6 p-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl text-white">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-300">Effective Capital Expenditure</p>
                <p className="text-2xl font-bold mt-1">{formatFullCrore(data.effectiveCapitalExpenditure)}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">% of Total Expenditure</p>
                <p className="text-xl font-semibold text-emerald-400">
                  {((data.effectiveCapitalExpenditure / data.totalExpenditure) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
          </div>

          {/* Breakdown List */}
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">Interest Payments</span>
              <span className="font-semibold text-red-500">{formatCrore(data.interestPayments)} Cr</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">Central Sector Schemes</span>
              <span className="font-semibold text-slate-800">{formatCrore(data.centralSectorSchemes)} Cr</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-slate-600">Centrally Sponsored Schemes</span>
              <span className="font-semibold text-slate-800">{formatCrore(data.centrallySponsoredSchemes)} Cr</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-600">Finance Commission Grants</span>
              <span className="font-semibold text-slate-800">{formatCrore(data.financeCommissionGrants)} Cr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
