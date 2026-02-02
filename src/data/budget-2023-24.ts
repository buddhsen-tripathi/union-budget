import { BudgetAllocation, RupeeFlow, PolicyHighlight, YearlyStats, BudgetYear, DeficitStats, ReceiptsBreakdown, ExpenditureBreakdown } from '../types';

export const YEAR: BudgetYear = "2023-24";

// 2023-24 Budget Estimates (BE) - from 2023-24 Budget document
// NOTE: Verify these values against official Budget at a Glance document
export const allocations: BudgetAllocation[] = [
  { ministry: "Interest Payments", amountCrore: 1079971, category: "Debt", year: YEAR },
  { ministry: "Defence", amountCrore: 593538, category: "Defense", year: YEAR },
  { ministry: "Transport", amountCrore: 439897, category: "Infrastructure", year: YEAR },
  { ministry: "Pension", amountCrore: 254774, category: "Social", year: YEAR },
  { ministry: "Home Affairs", amountCrore: 196035, category: "Administration", year: YEAR },
  { ministry: "Food Subsidy", amountCrore: 197350, category: "Subsidies", year: YEAR },
  { ministry: "Rural Development", amountCrore: 195855, category: "Social", year: YEAR },
  { ministry: "Fertiliser Subsidy", amountCrore: 175100, category: "Subsidies", year: YEAR },
  { ministry: "Agriculture and Allied Activities", amountCrore: 137695, category: "Economic", year: YEAR },
  { ministry: "Education", amountCrore: 112899, category: "Social", year: YEAR },
  { ministry: "Health", amountCrore: 89155, category: "Social", year: YEAR },
  { ministry: "Energy", amountCrore: 60222, category: "Infrastructure", year: YEAR },
  { ministry: "IT and Telecom", amountCrore: 98550, category: "Infrastructure", year: YEAR },
  { ministry: "Finance", amountCrore: 58530, category: "Administration", year: YEAR },
  { ministry: "Urban Development", amountCrore: 76432, category: "Infrastructure", year: YEAR },
  { ministry: "Social Welfare", amountCrore: 39914, category: "Social", year: YEAR },
  { ministry: "Commerce and Industry", amountCrore: 36100, category: "Economic", year: YEAR },
  { ministry: "Tax Administration", amountCrore: 70600, category: "Administration", year: YEAR },
  { ministry: "Scientific Departments", amountCrore: 25036, category: "Economic", year: YEAR },
  { ministry: "External Affairs", amountCrore: 18050, category: "Administration", year: YEAR },
  { ministry: "Petroleum Subsidy", amountCrore: 2257, category: "Subsidies", year: YEAR },
  { ministry: "Development of North East", amountCrore: 5892, category: "Infrastructure", year: YEAR },
];

export const rupeeComesFrom: RupeeFlow[] = [
  { label: "Borrowings & Liabilities", percentage: 34, color: "#475569", year: YEAR },
  { label: "Income Tax", percentage: 15, color: "#138808", year: YEAR },
  { label: "GST & Other Taxes", percentage: 17, color: "#eab308", year: YEAR },
  { label: "Corporation Tax", percentage: 15, color: "#ea580c", year: YEAR },
  { label: "Non-Tax Revenues", percentage: 6, color: "#3b82f6", year: YEAR },
  { label: "Union Excise Duties", percentage: 7, color: "#8b5cf6", year: YEAR },
  { label: "Customs", percentage: 4, color: "#ec4899", year: YEAR },
  { label: "Non-Debt Capital Receipts", percentage: 2, color: "#64748b", year: YEAR },
];

export const rupeeGoesTo: RupeeFlow[] = [
  { label: "Interest Payment", percentage: 20, color: "#ef4444", year: YEAR },
  { label: "States Share of Taxes", percentage: 18, color: "#ea580c", year: YEAR },
  { label: "Central Sector Scheme", percentage: 17, color: "#138808", year: YEAR },
  { label: "Defence", percentage: 9, color: "#475569", year: YEAR },
  { label: "Finance Commission Transfers", percentage: 8, color: "#8b5cf6", year: YEAR },
  { label: "Centrally Sponsored Scheme", percentage: 9, color: "#3b82f6", year: YEAR },
  { label: "Major Subsidies", percentage: 8, color: "#eab308", year: YEAR },
  { label: "Other Expenditures", percentage: 7, color: "#94a3b8", year: YEAR },
  { label: "Pensions", percentage: 4, color: "#64748b", year: YEAR },
];

export const highlights: PolicyHighlight[] = [
  {
    id: "2023-1",
    title: "Green Growth",
    category: "Infra",
    description: "Focus on sustainable development and energy transition.",
    points: [
      "National Green Hydrogen Mission with ₹19,700 crore outlay.",
      "PM-PRANAM scheme for sustainable agriculture.",
      "500 new 'Waste to Wealth' plants.",
      "Battery Energy Storage Systems with 4,000 MWH capacity.",
    ],
    year: YEAR,
  },
  {
    id: "2023-2",
    title: "Youth Power",
    category: "Social",
    description: "Skill development and entrepreneurship for youth.",
    points: [
      "Pradhan Mantri Kaushal Vikas Yojana 4.0 launched.",
      "30 Skill India International Centres.",
      "National Apprenticeship Promotion Scheme.",
      "Unified Skill India Digital platform.",
    ],
    year: YEAR,
  },
  {
    id: "2023-3",
    title: "Infrastructure Investment",
    category: "Infra",
    description: "Record capital expenditure for nation building.",
    points: [
      "Capital investment outlay of ₹10 lakh crore (3.3% of GDP).",
      "100 critical transport infrastructure projects identified.",
      "50 additional airports, heliports, water aerodromes.",
      "Urban Infrastructure Development Fund of ₹10,000 crore.",
    ],
    year: YEAR,
  },
];

export const stats: YearlyStats = {
  revenueReceipts: 27.3,
  capitalReceipts: 17.1,
  revenueExpenditure: 34.9,
  effectiveCapitalExpenditure: 12.5,
};

// Official Deficit Statistics (2023-24 Budget Estimates)
export const deficitStats: DeficitStats = {
  year: YEAR,
  fiscalDeficit: { value: 1786816, percentGDP: 5.9 },
  revenueDeficit: { value: 876566, percentGDP: 2.9 },
  effectiveRevenueDeficit: { value: 295779, percentGDP: 1.0 },
  primaryDeficit: { value: 706845, percentGDP: 2.3 },
};

// Official Receipts Breakdown (2023-24 Budget Estimates)
export const receiptsBreakdown: ReceiptsBreakdown = {
  year: YEAR,
  grossTaxRevenue: 3301990,
  taxComposition: {
    corporationTax: 922675,
    incomeTax: 833000,
    customs: 220000,
    unionExciseDuties: 338505,
    gst: 973280,
    otherTaxes: 14530,
  },
  statesShare: 1075650,
  netTaxRevenue: 2226340,
  nonTaxRevenue: 300000,
  totalRevenueReceipts: 2526340,
  capitalReceipts: {
    nonDebt: 80000,
    debt: 1786816,
    total: 1866816,
  },
  totalReceipts: 4503097,
};

// Official Expenditure Breakdown (2023-24 Budget Estimates)
export const expenditureBreakdown: ExpenditureBreakdown = {
  year: YEAR,
  establishmentExpenditure: 718000,
  centralSectorSchemes: 1395000,
  otherCentralSector: 1350000,
  interestPayments: 1079971,
  centrallySponsoredSchemes: 472000,
  financeCommissionGrants: 121000,
  otherTransfers: 347126,
  totalExpenditure: 4503097,
  capitalExpenditure: 1000000,
  grantsForCapitalAssets: 380787,
  effectiveCapitalExpenditure: 1380787,
};
