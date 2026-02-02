import { BudgetAllocation, RupeeFlow, PolicyHighlight, YearlyStats, BudgetYear } from '../types';

export const YEAR: BudgetYear = "2025-26";

// 2025-26 Revised Estimates (RE)
export const allocations: BudgetAllocation[] = [
  { ministry: "Interest Payments", amountCrore: 1274338, category: "Debt", year: YEAR },
  { ministry: "Defence", amountCrore: 567855, category: "Defense", year: YEAR },
  { ministry: "Pension", amountCrore: 286641, category: "Social", year: YEAR },
  { ministry: "Home Affairs", amountCrore: 241485, category: "Administration", year: YEAR },
  { ministry: "Food Subsidy", amountCrore: 228154, category: "Subsidies", year: YEAR },
  { ministry: "Rural Development", amountCrore: 212750, category: "Social", year: YEAR },
  { ministry: "Fertiliser Subsidy", amountCrore: 186460, category: "Subsidies", year: YEAR },
  { ministry: "Agriculture and Allied Activities", amountCrore: 151853, category: "Economic", year: YEAR },
  { ministry: "Education", amountCrore: 121949, category: "Social", year: YEAR },
  { ministry: "Finance", amountCrore: 112175, category: "Administration", year: YEAR },
  { ministry: "Health", amountCrore: 94625, category: "Social", year: YEAR },
  { ministry: "Energy", amountCrore: 86471, category: "Infrastructure", year: YEAR },
  { ministry: "Urban Development", amountCrore: 57204, category: "Infrastructure", year: YEAR },
  { ministry: "IT and Telecom", amountCrore: 53946, category: "Infrastructure", year: YEAR },
  { ministry: "Commerce and Industry", amountCrore: 52324, category: "Economic", year: YEAR },
  { ministry: "Social Welfare", amountCrore: 50053, category: "Social", year: YEAR },
  { ministry: "Transport", amountCrore: 547563, category: "Infrastructure", year: YEAR },
  { ministry: "Scientific Departments", amountCrore: 37014, category: "Economic", year: YEAR },
  { ministry: "External Affairs", amountCrore: 21743, category: "Administration", year: YEAR },
  { ministry: "Petroleum Subsidy", amountCrore: 15121, category: "Subsidies", year: YEAR },
  { ministry: "Tax Administration", amountCrore: 74540, category: "Administration", year: YEAR },
  { ministry: "Development of North East", amountCrore: 4479, category: "Infrastructure", year: YEAR },
];

export const rupeeComesFrom: RupeeFlow[] = [
  { label: "Borrowings & Liabilities", percentage: 24, color: "#475569", year: YEAR },
  { label: "Income Tax", percentage: 22, color: "#138808", year: YEAR },
  { label: "GST & Other Taxes", percentage: 18, color: "#eab308", year: YEAR },
  { label: "Corporation Tax", percentage: 17, color: "#ea580c", year: YEAR },
  { label: "Non-Tax Revenues", percentage: 9, color: "#3b82f6", year: YEAR },
  { label: "Union Excise Duties", percentage: 5, color: "#8b5cf6", year: YEAR },
  { label: "Customs", percentage: 4, color: "#ec4899", year: YEAR },
  { label: "Non-Debt Capital Receipts", percentage: 1, color: "#64748b", year: YEAR },
];

export const rupeeGoesTo: RupeeFlow[] = [
  { label: "States Share of Taxes", percentage: 22, color: "#ea580c", year: YEAR },
  { label: "Interest Payment", percentage: 20, color: "#ef4444", year: YEAR },
  { label: "Central Sector Scheme", percentage: 16, color: "#138808", year: YEAR },
  { label: "Defence", percentage: 8, color: "#475569", year: YEAR },
  { label: "Centrally Sponsored Scheme", percentage: 8, color: "#3b82f6", year: YEAR },
  { label: "Other Expenditures", percentage: 8, color: "#94a3b8", year: YEAR },
  { label: "Finance Commission Transfers", percentage: 8, color: "#8b5cf6", year: YEAR },
  { label: "Major Subsidies", percentage: 6, color: "#eab308", year: YEAR },
  { label: "Pensions", percentage: 4, color: "#64748b", year: YEAR },
];

export const highlights: PolicyHighlight[] = [
  {
    id: "2025-1",
    title: "Agri-District Programme",
    category: "Agriculture",
    description: "Focusing on district-level agricultural development.",
    points: [
      "Prime Minister Dhan-Dhaanya Krishi Yojana to cover 100 districts.",
      "Mission for Cotton Productivity: 5-year mission.",
      "Makhana Board to be set up in Bihar.",
      "Enhanced KCC limit to ₹5 lakh for farmers and fishermen.",
    ],
    year: YEAR,
  },
  {
    id: "2025-2",
    title: "MSME & Entrepreneurship",
    category: "Industry",
    description: "Boosting first-time entrepreneurs and micro enterprises.",
    points: [
      "Credit Cards for Micro Enterprises with ₹5 lakh limit.",
      "New scheme for 5 lakh first-time entrepreneurs with loans up to ₹2 crore.",
      "Focus Product Scheme for Footwear & Leather sectors.",
      "Revision in classification criteria for MSMEs.",
    ],
    year: YEAR,
  },
  {
    id: "2025-3",
    title: "Social Infrastructure",
    category: "Social",
    description: "Investing in health, education, and digital resources.",
    points: [
      "Day Care Cancer Centres in all District Hospitals.",
      "Bharatiya Bhasha Pustak Scheme for books in Indian languages.",
      "Expansion of medical education: 10,000 additional seats.",
      "Saksham Anganwadi and Poshan 2.0 implementation.",
    ],
    year: YEAR,
  },
];

export const stats: YearlyStats = {
  revenueReceipts: 34.2,
  capitalReceipts: 16.4,
  revenueExpenditure: 39.4,
  effectiveCapitalExpenditure: 15.5,
};
