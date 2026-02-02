/** Budget year format: "2024-25", "2025-26", etc. */
export type BudgetYear = string;

/** Categories for budget allocations */
export type AllocationCategory = 'Infrastructure' | 'Social' | 'Defense' | 'Administration' | 'Economic' | 'Debt' | 'Subsidies';

/** Categories for policy highlights */
export type PolicyCategory = 'Tax' | 'Industry' | 'Agriculture' | 'Social' | 'Infra';

/** Amount in Crores (₹) */
export type AmountInCrore = number;

/** Percentage value (0-100) */
export type Percentage = number;

export interface BudgetAllocation {
  ministry: string;
  amountCrore: AmountInCrore;
  icon?: string;
  category: AllocationCategory;
  year?: BudgetYear;
}

export interface RupeeFlow {
  label: string;
  percentage: Percentage;
  color: string;
  year?: BudgetYear;
}

export interface FiscalIndicator {
  year: BudgetYear;
  /** Fiscal deficit as % of GDP */
  fiscalDeficit: Percentage;
  /** Revenue deficit as % of GDP */
  revenueDeficit: Percentage;
  /** Primary deficit as % of GDP */
  primaryDeficit: Percentage;
  isEstimate: boolean;
}

export interface PolicyHighlight {
  id: string;
  title: string;
  description: string;
  category: PolicyCategory;
  points: string[];
  year?: BudgetYear;
}

export interface YearlyStats {
  revenueReceipts: AmountInCrore;
  capitalReceipts: AmountInCrore;
  revenueExpenditure: AmountInCrore;
  effectiveCapitalExpenditure: AmountInCrore;
}

/** Detailed deficit statistics with values and % of GDP */
export interface DeficitStats {
  year: BudgetYear;
  fiscalDeficit: { value: AmountInCrore; percentGDP: Percentage };
  revenueDeficit: { value: AmountInCrore; percentGDP: Percentage };
  effectiveRevenueDeficit: { value: AmountInCrore; percentGDP: Percentage };
  primaryDeficit: { value: AmountInCrore; percentGDP: Percentage };
}

/** Detailed receipts breakdown */
export interface ReceiptsBreakdown {
  year: BudgetYear;
  grossTaxRevenue: AmountInCrore;
  taxComposition: {
    corporationTax: AmountInCrore;
    incomeTax: AmountInCrore;
    customs: AmountInCrore;
    unionExciseDuties: AmountInCrore;
    gst: AmountInCrore;
    otherTaxes: AmountInCrore;
  };
  statesShare: AmountInCrore;
  netTaxRevenue: AmountInCrore;
  nonTaxRevenue: AmountInCrore;
  totalRevenueReceipts: AmountInCrore;
  capitalReceipts: {
    nonDebt: AmountInCrore;
    debt: AmountInCrore;
    total: AmountInCrore;
  };
  totalReceipts: AmountInCrore;
}

/** Government expenditure structure breakdown */
export interface ExpenditureBreakdown {
  year: BudgetYear;
  establishmentExpenditure: AmountInCrore;
  centralSectorSchemes: AmountInCrore;
  otherCentralSector: AmountInCrore;
  interestPayments: AmountInCrore;
  centrallySponsoredSchemes: AmountInCrore;
  financeCommissionGrants: AmountInCrore;
  otherTransfers: AmountInCrore;
  totalExpenditure: AmountInCrore;
  capitalExpenditure: AmountInCrore;
  grantsForCapitalAssets: AmountInCrore;
  effectiveCapitalExpenditure: AmountInCrore;
}

/** Generic type for historical data indexed by year */
type HistoricalData<T> = Record<BudgetYear, T>;

export interface BudgetData {
  allocations: BudgetAllocation[];
  rupeeComesFrom: RupeeFlow[];
  rupeeGoesTo: RupeeFlow[];
  fiscalTrends: FiscalIndicator[];
  highlights: PolicyHighlight[];
  historicalStats?: HistoricalData<YearlyStats>;
  historicalAllocations?: HistoricalData<BudgetAllocation[]>;
  historicalRupeeComesFrom?: HistoricalData<RupeeFlow[]>;
  historicalRupeeGoesTo?: HistoricalData<RupeeFlow[]>;
  historicalDeficitStats?: HistoricalData<DeficitStats>;
  historicalReceipts?: HistoricalData<ReceiptsBreakdown>;
  historicalExpenditure?: HistoricalData<ExpenditureBreakdown>;
}

export type SortField = 'ministry' | 'amountCrore' | 'amount2024' | 'amount2025' | 'amount2026';
export type SortOrder = 'asc' | 'desc';