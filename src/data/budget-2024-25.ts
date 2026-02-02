import { BudgetAllocation, RupeeFlow, PolicyHighlight, YearlyStats, BudgetYear, DeficitStats, ReceiptsBreakdown, ExpenditureBreakdown } from '../types';

export const YEAR: BudgetYear = "2024-25";

// 2024-25 Budget Estimates (BE) - from Major Expenditure document
export const allocations: BudgetAllocation[] = [
  { ministry: "Interest Payments", amountCrore: 1162940, category: "Debt", year: YEAR },
  { ministry: "Transport", amountCrore: 544128, category: "Infrastructure", year: YEAR },
  { ministry: "Defence", amountCrore: 454773, category: "Defense", year: YEAR },
  { ministry: "Rural Development", amountCrore: 265808, category: "Social", year: YEAR },
  { ministry: "Pension", amountCrore: 243296, category: "Social", year: YEAR },
  { ministry: "Food Subsidy", amountCrore: 205250, category: "Subsidies", year: YEAR },
  { ministry: "Tax Administration", amountCrore: 203530, category: "Administration", year: YEAR },
  { ministry: "Fertiliser Subsidy", amountCrore: 164000, category: "Subsidies", year: YEAR },
  { ministry: "Agriculture and Allied Activities", amountCrore: 151851, category: "Economic", year: YEAR },
  { ministry: "Home Affairs", amountCrore: 150983, category: "Administration", year: YEAR },
  { ministry: "Education", amountCrore: 125638, category: "Social", year: YEAR },
  { ministry: "IT and Telecom", amountCrore: 116342, category: "Infrastructure", year: YEAR },
  { ministry: "Health", amountCrore: 89287, category: "Social", year: YEAR },
  { ministry: "Finance", amountCrore: 86339, category: "Administration", year: YEAR },
  { ministry: "Urban Development", amountCrore: 82577, category: "Infrastructure", year: YEAR },
  { ministry: "Energy", amountCrore: 68769, category: "Infrastructure", year: YEAR },
  { ministry: "Union Territories", amountCrore: 68660, category: "Administration", year: YEAR },
  { ministry: "Social Welfare", amountCrore: 56501, category: "Social", year: YEAR },
  { ministry: "Commerce and Industry", amountCrore: 47559, category: "Economic", year: YEAR },
  { ministry: "Scientific Departments", amountCrore: 32736, category: "Economic", year: YEAR },
  { ministry: "External Affairs", amountCrore: 22155, category: "Administration", year: YEAR },
  { ministry: "Petroleum Subsidy", amountCrore: 11925, category: "Subsidies", year: YEAR },
  { ministry: "Planning and Statistics", amountCrore: 6291, category: "Administration", year: YEAR },
  { ministry: "Development of North East", amountCrore: 5900, category: "Infrastructure", year: YEAR },
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

// Official Deficit Statistics (2024-25 Budget Estimates)
export const deficitStats: DeficitStats = {
  year: YEAR,
  fiscalDeficit: { value: 1613312, percentGDP: 4.9 },
  revenueDeficit: { value: 580201, percentGDP: 1.8 },
  effectiveRevenueDeficit: { value: 189423, percentGDP: 0.6 },
  primaryDeficit: { value: 450372, percentGDP: 1.4 },
};

// Sources of Financing Fiscal Deficit (2024-25 Budget Estimates)
export const fiscalDeficitSources = {
  year: YEAR,
  debtReceiptsNet: 1472915,
  marketBorrowings: 1163182,
  shortTermBorrowing: -50000, // T-Bills etc.
  securitiesAgainstSmallSavings: 420063,
  stateProvidentFunds: 5000,
  otherInternalDebts: -81282,
  externalDebt: 15952,
  drawDownCashBalance: 140397,
  total: 1613312,
};

// Official Receipts Breakdown (2024-25 Budget Estimates) - from Revenue Receipts document
export const receiptsBreakdown: ReceiptsBreakdown = {
  year: YEAR,
  grossTaxRevenue: 3840170,
  taxComposition: {
    corporationTax: 1020000,
    incomeTax: 1187000,
    customs: 237745,
    unionExciseDuties: 319000,
    gst: 1061899, // CGST (910890) + GST Compensation Cess (151009)
    otherTaxes: 14526, // Service Tax (100) + Taxes of Union Territories (9426) + Other Taxes (5000)
  },
  statesShare: 1247211,
  netTaxRevenue: 2583499,
  nonTaxRevenue: 545701,
  totalRevenueReceipts: 3129200,
  capitalReceipts: {
    nonDebt: 78000,
    debt: 1472915, // Debt Receipts
    total: 1550915, // Total Capital Receipts (A+B)
  },
  totalReceipts: 4680115, // Total Receipts (1a+2+3)
};

// Official Expenditure Breakdown (2024-25 Budget Estimates)
export const expenditureBreakdown: ExpenditureBreakdown = {
  year: YEAR,
  establishmentExpenditure: 783618,
  centralSectorSchemes: 1516176,
  otherCentralSector: 1490586,
  interestPayments: 1162940,
  centrallySponsoredSchemes: 505978,
  financeCommissionGrants: 132378,
  otherTransfers: 391776,
  totalExpenditure: 4820512,
  capitalExpenditure: 1111111,
  grantsForCapitalAssets: 390778,
  effectiveCapitalExpenditure: 1501889,
};
