export interface BudgetAllocation {
  ministry: string;
  amountCrore: number;
  icon?: string;
  category: 'Infrastructure' | 'Social' | 'Defense' | 'Administration' | 'Economic';
  year?: string;
}

export interface RupeeFlow {
  label: string;
  percentage: number;
  color: string;
  year?: string;
}

export interface FiscalIndicator {
  year: string;
  fiscalDeficit: number; // as % of GDP
  revenueDeficit: number;
  primaryDeficit: number;
  isEstimate: boolean;
}

export interface PolicyHighlight {
  id: string;
  title: string;
  description: string;
  category: 'Tax' | 'Industry' | 'Agriculture' | 'Social' | 'Infra';
  points: string[];
  year?: string;
}

export interface YearlyStats {
  revenueReceipts: number;
  capitalReceipts: number;
  revenueExpenditure: number;
  effectiveCapitalExpenditure: number;
}

export interface BudgetData {
  allocations: BudgetAllocation[];
  rupeeComesFrom: RupeeFlow[];
  rupeeGoesTo: RupeeFlow[];
  fiscalTrends: FiscalIndicator[];
  highlights: PolicyHighlight[];
  historicalStats?: Record<string, YearlyStats>; // Year -> Stats
  historicalAllocations?: Record<string, BudgetAllocation[]>; // Year -> Allocations
  historicalRupeeComesFrom?: Record<string, RupeeFlow[]>;
  historicalRupeeGoesTo?: Record<string, RupeeFlow[]>;
}

export type SortField = 'ministry' | 'amountCrore';
export type SortOrder = 'asc' | 'desc';