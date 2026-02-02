import { BudgetAllocation, RupeeFlow, PolicyHighlight, YearlyStats, BudgetYear, DeficitStats, ReceiptsBreakdown, ExpenditureBreakdown } from '../types';

export const YEAR: BudgetYear = "2026-27";

// 2026-27 Budget Estimates (BE) - from 2026-27 Budget document
export const allocations: BudgetAllocation[] = [
  // Major expenditure heads (sorted by amount)
  { ministry: "Interest Payments", amountCrore: 1403972, category: "Debt", year: YEAR },
  { ministry: "Transport", amountCrore: 598520, category: "Infrastructure", year: YEAR },
  { ministry: "Defence", amountCrore: 594585, category: "Defense", year: YEAR },
  { ministry: "Pension", amountCrore: 296214, category: "Social", year: YEAR },
  { ministry: "Rural Development", amountCrore: 273108, category: "Social", year: YEAR },
  { ministry: "Home Affairs", amountCrore: 255234, category: "Administration", year: YEAR },
  { ministry: "Food Subsidy", amountCrore: 227629, category: "Subsidies", year: YEAR },
  { ministry: "Fertiliser Subsidy", amountCrore: 170781, category: "Subsidies", year: YEAR },
  { ministry: "Agriculture and Allied Activities", amountCrore: 162671, category: "Economic", year: YEAR },
  { ministry: "Education", amountCrore: 139289, category: "Social", year: YEAR },
  { ministry: "Energy", amountCrore: 109029, category: "Infrastructure", year: YEAR },
  { ministry: "Health", amountCrore: 104599, category: "Social", year: YEAR },
  { ministry: "Urban Development", amountCrore: 85522, category: "Infrastructure", year: YEAR },
  { ministry: "IT and Telecom", amountCrore: 74560, category: "Infrastructure", year: YEAR },
  { ministry: "Commerce and Industry", amountCrore: 70296, category: "Economic", year: YEAR },
  { ministry: "Social Welfare", amountCrore: 62362, category: "Social", year: YEAR },
  { ministry: "Scientific Departments", amountCrore: 55756, category: "Economic", year: YEAR },
  { ministry: "Tax Administration", amountCrore: 45500, category: "Administration", year: YEAR },
  { ministry: "External Affairs", amountCrore: 22119, category: "Administration", year: YEAR },
  { ministry: "Finance", amountCrore: 20649, category: "Administration", year: YEAR },
  { ministry: "Petroleum Subsidy", amountCrore: 12085, category: "Subsidies", year: YEAR },
  { ministry: "Development of North East", amountCrore: 6812, category: "Infrastructure", year: YEAR },
];

export const rupeeComesFrom: RupeeFlow[] = [
  { label: "Borrowings & Liabilities", percentage: 24, color: "#475569", year: YEAR },
  { label: "Income Tax", percentage: 21, color: "#138808", year: YEAR },
  { label: "Corporation Tax", percentage: 18, color: "#ea580c", year: YEAR },
  { label: "GST & Other Taxes", percentage: 15, color: "#eab308", year: YEAR },
  { label: "Non-Tax Revenues", percentage: 10, color: "#3b82f6", year: YEAR },
  { label: "Union Excise Duties", percentage: 6, color: "#8b5cf6", year: YEAR },
  { label: "Customs", percentage: 4, color: "#ec4899", year: YEAR },
  { label: "Non-Debt Capital Receipts", percentage: 2, color: "#64748b", year: YEAR },
];

export const rupeeGoesTo: RupeeFlow[] = [
  { label: "States Share of Taxes", percentage: 22, color: "#ea580c", year: YEAR },
  { label: "Interest Payment", percentage: 20, color: "#ef4444", year: YEAR },
  { label: "Central Sector Scheme", percentage: 17, color: "#138808", year: YEAR },
  { label: "Defence", percentage: 11, color: "#475569", year: YEAR },
  { label: "Centrally Sponsored Scheme", percentage: 8, color: "#3b82f6", year: YEAR },
  { label: "Other Expenditures", percentage: 7, color: "#94a3b8", year: YEAR },
  { label: "Finance Commission Transfers", percentage: 7, color: "#8b5cf6", year: YEAR },
  { label: "Major Subsidies", percentage: 6, color: "#eab308", year: YEAR },
  { label: "Civil Pension", percentage: 2, color: "#64748b", year: YEAR },
];

export const highlights: PolicyHighlight[] = [
  {
    id: "2026-1",
    title: "Manufacturing & Frontier Sectors",
    category: "Industry",
    description: "Strategic focus on strengthening domestic manufacturing and high-tech sectors.",
    points: [
      "India Semiconductor Mission (ISM) 2.0 launched.",
      "Biopharma SHAKTI initiative.",
      "3 Dedicated Chemical Parks to enhance domestic production.",
      "Scheme for Container Manufacturing to boost logistics.",
      "Electronics Components Manufacturing Scheme.",
    ],
    year: YEAR,
  },
  {
    id: "2026-2",
    title: "MSME Support",
    category: "Industry",
    description: "Three-pronged approach to help MSMEs grow as 'Champions'.",
    points: [
      "Dedicated ₹10,000 crore SME Growth Fund.",
      "Credit guarantee support through CGTMSE for invoice discounting.",
      "TReDS mandated for all CPSE purchases from MSMEs.",
      "Removal of value cap of ₹10 lakh on courier exports.",
    ],
    year: YEAR,
  },
  {
    id: "2026-3",
    title: "Tax Reforms",
    category: "Tax",
    description: "Simplification and relief for middle class and industries.",
    points: [
      "Increase limit for duty-free imports for seafood processing.",
      "Customs duty exemptions on microwave oven parts and aircraft components.",
      "Safe harbour threshold for IT services increased to ₹2,000 crore.",
      "Tax holidays until 2047 for foreign cloud service providers.",
      "Honest taxpayers can settle disputes by paying penalty in lieu of prosecution.",
    ],
    year: YEAR,
  },
  {
    id: "2026-4",
    title: "Agriculture & Allied",
    category: "Agriculture",
    description: "Increasing farmer's income by enhancing productivity.",
    points: [
      "Dedicated programme for Indian cashew and cocoa.",
      "High-density cultivation of walnuts, almonds, and pine nuts.",
      "Integrating AgriStack portals with AI systems.",
      "Fish catch in EEZ made duty-free.",
    ],
    year: YEAR,
  },
];

export const stats: YearlyStats = {
  revenueReceipts: 38.5,
  capitalReceipts: 15.9,
  revenueExpenditure: 42.1,
  effectiveCapitalExpenditure: 16.2,
};

// Official Deficit Statistics (2026-27 Budget Estimates)
export const deficitStats: DeficitStats = {
  year: YEAR,
  fiscalDeficit: { value: 1695768, percentGDP: 4.3 },
  revenueDeficit: { value: 592344, percentGDP: 1.5 },
  effectiveRevenueDeficit: { value: 99642, percentGDP: 0.3 },
  primaryDeficit: { value: 291796, percentGDP: 0.7 },
};

// Official Receipts Breakdown (2026-27 Budget Estimates)
export const receiptsBreakdown: ReceiptsBreakdown = {
  year: YEAR,
  grossTaxRevenue: 4404086,
  taxComposition: {
    corporationTax: 1231000,
    incomeTax: 1466000,
    customs: 271200,
    unionExciseDuties: 388910,
    gst: 1019020,
    otherTaxes: 17700,
  },
  statesShare: 1526255,
  netTaxRevenue: 2866922,
  nonTaxRevenue: 666228,
  totalRevenueReceipts: 3533150,
  capitalReceipts: {
    nonDebt: 118397,
    debt: 1695768,
    total: 1814165,
  },
  totalReceipts: 5347315,
};

// Official Expenditure Breakdown (2026-27 Budget Estimates)
export const expenditureBreakdown: ExpenditureBreakdown = {
  year: YEAR,
  establishmentExpenditure: 824114,
  centralSectorSchemes: 1771928,
  otherCentralSector: 1761387,
  interestPayments: 1403972,
  centrallySponsoredSchemes: 548798,
  financeCommissionGrants: 129397,
  otherTransfers: 311691,
  totalExpenditure: 5347315,
  capitalExpenditure: 1221821,
  grantsForCapitalAssets: 492702,
  effectiveCapitalExpenditure: 1714523,
};
