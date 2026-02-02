import { BudgetAllocation, RupeeFlow, PolicyHighlight, YearlyStats, BudgetYear, DeficitStats, ReceiptsBreakdown, ExpenditureBreakdown } from '../types';

export const YEAR: BudgetYear = "2025-26";

// 2025-26 Budget Estimates (BE) - from Major Expenditure document
export const allocations: BudgetAllocation[] = [
  { ministry: "Interest Payments", amountCrore: 1276338, category: "Debt", year: YEAR },
  { ministry: "Transport", amountCrore: 548649, category: "Infrastructure", year: YEAR },
  { ministry: "Defence", amountCrore: 491732, category: "Defense", year: YEAR },
  { ministry: "Pension", amountCrore: 276618, category: "Social", year: YEAR },
  { ministry: "Rural Development", amountCrore: 266817, category: "Social", year: YEAR },
  { ministry: "Home Affairs", amountCrore: 233211, category: "Administration", year: YEAR },
  { ministry: "Food Subsidy", amountCrore: 203420, category: "Subsidies", year: YEAR },
  { ministry: "Tax Administration", amountCrore: 186632, category: "Administration", year: YEAR },
  { ministry: "Agriculture and Allied Activities", amountCrore: 171437, category: "Economic", year: YEAR },
  { ministry: "Fertiliser Subsidy", amountCrore: 167887, category: "Subsidies", year: YEAR },
  { ministry: "Education", amountCrore: 128650, category: "Social", year: YEAR },
  { ministry: "Health", amountCrore: 98311, category: "Social", year: YEAR },
  { ministry: "Urban Development", amountCrore: 96777, category: "Infrastructure", year: YEAR },
  { ministry: "IT and Telecom", amountCrore: 95298, category: "Infrastructure", year: YEAR },
  { ministry: "Energy", amountCrore: 81174, category: "Infrastructure", year: YEAR },
  { ministry: "Commerce and Industry", amountCrore: 65553, category: "Economic", year: YEAR },
  { ministry: "Finance", amountCrore: 62924, category: "Administration", year: YEAR },
  { ministry: "Social Welfare", amountCrore: 60052, category: "Social", year: YEAR },
  { ministry: "Scientific Departments", amountCrore: 55679, category: "Economic", year: YEAR },
  { ministry: "External Affairs", amountCrore: 20517, category: "Administration", year: YEAR },
  { ministry: "Petroleum Subsidy", amountCrore: 12100, category: "Subsidies", year: YEAR },
  { ministry: "Development of North East", amountCrore: 5915, category: "Infrastructure", year: YEAR },
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

// Official Deficit Statistics (2025-26 Budget Estimates)
export const deficitStats: DeficitStats = {
  year: YEAR,
  fiscalDeficit: { value: 1568936, percentGDP: 4.4 },
  revenueDeficit: { value: 523846, percentGDP: 1.5 },
  effectiveRevenueDeficit: { value: 96654, percentGDP: 0.3 },
  primaryDeficit: { value: 292598, percentGDP: 0.8 },
};

// Sources of Financing Fiscal Deficit (2025-26 Budget Estimates)
export const fiscalDeficitSources = {
  year: YEAR,
  debtReceiptsNet: 1566452,
  marketBorrowings: 1153834,
  shortTermBorrowing: 0, // T-Bills etc.
  securitiesAgainstSmallSavings: 343382,
  stateProvidentFunds: 5000,
  otherInternalDebts: 40746,
  externalDebt: 23490,
  drawDownCashBalance: 2484,
  total: 1568936,
};

// Official Receipts Breakdown (2025-26 Budget Estimates) - from Revenue Receipts document
export const receiptsBreakdown: ReceiptsBreakdown = {
  year: YEAR,
  grossTaxRevenue: 4270233,
  taxComposition: {
    corporationTax: 1082000,
    incomeTax: 1438000,
    customs: 240000,
    unionExciseDuties: 317000,
    gst: 1178000, // CGST (1010890) + GST Compensation Cess (167110)
    otherTaxes: 15233, // Service Tax (100) + Taxes of Union Territories (10133) + Other Taxes (5000)
  },
  statesShare: 1422444,
  netTaxRevenue: 2837409,
  nonTaxRevenue: 583000,
  totalRevenueReceipts: 3420409,
  capitalReceipts: {
    nonDebt: 76000,
    debt: 1566452, // Debt Receipts
    total: 1642452, // Total Capital Receipts (A+B)
  },
  totalReceipts: 5065345, // Total Receipts (1a+2+3+4)
};

// Official Expenditure Breakdown (2025-26 Budget Estimates) - from Centre's Expenditure document
export const expenditureBreakdown: ExpenditureBreakdown = {
  year: YEAR,
  establishmentExpenditure: 868096,
  centralSectorSchemes: 1621899,
  otherCentralSector: 1526008,
  interestPayments: 1276338,
  centrallySponsoredSchemes: 541850,
  financeCommissionGrants: 132767,
  otherTransfers: 374725,
  totalExpenditure: 5065345,
  capitalExpenditure: 1121090,
  grantsForCapitalAssets: 427192,
  effectiveCapitalExpenditure: 1548282, // Capital (1121090) + Grants (427192)
};
