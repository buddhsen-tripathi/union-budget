import { BudgetAllocation, RupeeFlow, PolicyHighlight, YearlyStats, BudgetYear } from '../types';

export const YEAR: BudgetYear = "2024-25";

// 2024-25 Actuals
export const allocations: BudgetAllocation[] = [
  { ministry: "Interest Payments", amountCrore: 1115575, category: "Debt", year: YEAR },
  { ministry: "Transport", amountCrore: 560162, category: "Infrastructure", year: YEAR },
  { ministry: "Defence", amountCrore: 450733, category: "Defense", year: YEAR },
  { ministry: "Pension", amountCrore: 273772, category: "Social", year: YEAR },
  { ministry: "Home Affairs", amountCrore: 224585, category: "Administration", year: YEAR },
  { ministry: "Rural Development", amountCrore: 206010, category: "Social", year: YEAR },
  { ministry: "Tax Administration", amountCrore: 202772, category: "Administration", year: YEAR },
  { ministry: "Food Subsidy", amountCrore: 199867, category: "Subsidies", year: YEAR },
  { ministry: "Fertiliser Subsidy", amountCrore: 170683, category: "Subsidies", year: YEAR },
  { ministry: "Agriculture and Allied Activities", amountCrore: 154610, category: "Economic", year: YEAR },
  { ministry: "IT and Telecom", amountCrore: 117163, category: "Infrastructure", year: YEAR },
  { ministry: "Education", amountCrore: 110736, category: "Social", year: YEAR },
  { ministry: "Health", amountCrore: 88353, category: "Social", year: YEAR },
  { ministry: "Energy", amountCrore: 66052, category: "Infrastructure", year: YEAR },
  { ministry: "Finance", amountCrore: 58217, category: "Administration", year: YEAR },
  { ministry: "Urban Development", amountCrore: 53255, category: "Infrastructure", year: YEAR },
  { ministry: "Social Welfare", amountCrore: 45804, category: "Social", year: YEAR },
  { ministry: "Commerce and Industry", amountCrore: 44446, category: "Economic", year: YEAR },
  { ministry: "Scientific Departments", amountCrore: 27518, category: "Economic", year: YEAR },
  { ministry: "External Affairs", amountCrore: 25512, category: "Administration", year: YEAR },
  { ministry: "Petroleum Subsidy", amountCrore: 14479, category: "Subsidies", year: YEAR },
  { ministry: "Development of North East", amountCrore: 3371, category: "Infrastructure", year: YEAR },
];

export const rupeeComesFrom: RupeeFlow[] = [
  { label: "Borrowings & Liabilities", percentage: 27, color: "#475569", year: YEAR },
  { label: "Income Tax", percentage: 19, color: "#138808", year: YEAR },
  { label: "GST & Other Taxes", percentage: 18, color: "#eab308", year: YEAR },
  { label: "Corporation Tax", percentage: 17, color: "#ea580c", year: YEAR },
  { label: "Non-Tax Revenues", percentage: 9, color: "#3b82f6", year: YEAR },
  { label: "Union Excise Duties", percentage: 5, color: "#8b5cf6", year: YEAR },
  { label: "Customs", percentage: 4, color: "#ec4899", year: YEAR },
  { label: "Non-Debt Capital Receipts", percentage: 1, color: "#64748b", year: YEAR },
];

export const rupeeGoesTo: RupeeFlow[] = [
  { label: "States Share of Taxes", percentage: 21, color: "#ea580c", year: YEAR },
  { label: "Interest Payment", percentage: 19, color: "#ef4444", year: YEAR },
  { label: "Central Sector Scheme", percentage: 16, color: "#138808", year: YEAR },
  { label: "Other Expenditures", percentage: 9, color: "#94a3b8", year: YEAR },
  { label: "Finance Commission Transfers", percentage: 9, color: "#8b5cf6", year: YEAR },
  { label: "Centrally Sponsored Scheme", percentage: 8, color: "#3b82f6", year: YEAR },
  { label: "Defence", percentage: 8, color: "#475569", year: YEAR },
  { label: "Major Subsidies", percentage: 6, color: "#eab308", year: YEAR },
  { label: "Pensions", percentage: 4, color: "#64748b", year: YEAR },
];

export const highlights: PolicyHighlight[] = [
  {
    id: "2024-1",
    title: "Employment & Skilling",
    category: "Social",
    description: "Comprehensive package for job creation and skilling.",
    points: [
      "PM's Package of 5 schemes for Employment Linked Incentive.",
      "Internship opportunities in 500 top companies for 1 crore youth.",
      "One-month wage to new entrants in all formal sectors.",
      "Skilling programme for 20 lakh youth over 5 years.",
    ],
    year: YEAR,
  },
  {
    id: "2024-2",
    title: "Infrastructure Push",
    category: "Infra",
    description: "Continued strong capex for nation building.",
    points: [
      "Provision of ₹11,11,111 crore for infrastructure (3.4% of GDP).",
      "Phase IV of PMGSY for 25,000 rural habitations.",
      "Irrigation and Flood Mitigation projects worth ₹11,500 crore.",
      "Transit Oriented Development plans for 14 large cities.",
    ],
    year: YEAR,
  },
  {
    id: "2024-3",
    title: "Energy Security",
    category: "Infra",
    description: "Focus on renewable energy and nuclear power.",
    points: [
      "PM Surya Ghar Muft Bijli Yojana for 1 crore households.",
      "Setting up Bharat Small Reactors with private sector.",
      "Pumped Storage Policy for electricity storage.",
      "AUSC Thermal Power Plants joint venture.",
    ],
    year: YEAR,
  },
];

export const stats: YearlyStats = {
  revenueReceipts: 31.3,
  capitalReceipts: 16.9,
  revenueExpenditure: 37.1,
  effectiveCapitalExpenditure: 15.0,
};
