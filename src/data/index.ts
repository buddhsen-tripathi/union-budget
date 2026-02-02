import { BudgetData, FiscalIndicator } from '../types';

import * as budget2023 from './budget-2023-24';
import * as budget2024 from './budget-2024-25';
import * as budget2025 from './budget-2025-26';
import * as budget2026 from './budget-2026-27';

/** Fiscal trends spanning multiple years */
const fiscalTrends: FiscalIndicator[] = [
  { year: "2022-23", fiscalDeficit: 6.5, revenueDeficit: 4.0, primaryDeficit: 3.0, isEstimate: false },
  { year: "2023-24", fiscalDeficit: 5.6, revenueDeficit: 2.6, primaryDeficit: 1.9, isEstimate: false },
  { year: "2024-25", fiscalDeficit: 4.9, revenueDeficit: 1.8, primaryDeficit: 1.4, isEstimate: false },
  { year: "2025-26", fiscalDeficit: 4.5, revenueDeficit: 2.6, primaryDeficit: 1.3, isEstimate: true },
  { year: "2026-27", fiscalDeficit: 4.3, revenueDeficit: 2.8, primaryDeficit: 0.7, isEstimate: true },
];

/** Combined budget data for all years */
export const budgetData: BudgetData = {
  // Current year (2026-27) as primary data
  allocations: budget2026.allocations,
  rupeeComesFrom: budget2026.rupeeComesFrom,
  rupeeGoesTo: budget2026.rupeeGoesTo,
  fiscalTrends,
  highlights: [
    ...budget2026.highlights,
    ...budget2025.highlights,
    ...budget2024.highlights,
    ...budget2023.highlights,
  ],

  // Historical data by year
  historicalStats: {
    [budget2023.YEAR]: budget2023.stats,
    [budget2024.YEAR]: budget2024.stats,
    [budget2025.YEAR]: budget2025.stats,
    [budget2026.YEAR]: budget2026.stats,
  },
  historicalAllocations: {
    [budget2023.YEAR]: budget2023.allocations,
    [budget2024.YEAR]: budget2024.allocations,
    [budget2025.YEAR]: budget2025.allocations,
    [budget2026.YEAR]: budget2026.allocations,
  },
  historicalRupeeComesFrom: {
    [budget2023.YEAR]: budget2023.rupeeComesFrom,
    [budget2024.YEAR]: budget2024.rupeeComesFrom,
    [budget2025.YEAR]: budget2025.rupeeComesFrom,
    [budget2026.YEAR]: budget2026.rupeeComesFrom,
  },
  historicalRupeeGoesTo: {
    [budget2023.YEAR]: budget2023.rupeeGoesTo,
    [budget2024.YEAR]: budget2024.rupeeGoesTo,
    [budget2025.YEAR]: budget2025.rupeeGoesTo,
    [budget2026.YEAR]: budget2026.rupeeGoesTo,
  },
  historicalDeficitStats: {
    [budget2023.YEAR]: budget2023.deficitStats,
    [budget2024.YEAR]: budget2024.deficitStats,
    [budget2025.YEAR]: budget2025.deficitStats,
    [budget2026.YEAR]: budget2026.deficitStats,
  },
  historicalReceipts: {
    [budget2023.YEAR]: budget2023.receiptsBreakdown,
    [budget2024.YEAR]: budget2024.receiptsBreakdown,
    [budget2025.YEAR]: budget2025.receiptsBreakdown,
    [budget2026.YEAR]: budget2026.receiptsBreakdown,
  },
  historicalExpenditure: {
    [budget2023.YEAR]: budget2023.expenditureBreakdown,
    [budget2024.YEAR]: budget2024.expenditureBreakdown,
    [budget2025.YEAR]: budget2025.expenditureBreakdown,
    [budget2026.YEAR]: budget2026.expenditureBreakdown,
  },
};

/** Export individual year modules for direct access */
export { budget2023, budget2024, budget2025, budget2026 };

/** Available budget years */
export const AVAILABLE_YEARS = [budget2023.YEAR, budget2024.YEAR, budget2025.YEAR, budget2026.YEAR] as const;

/** Current/latest budget year */
export const CURRENT_YEAR = budget2026.YEAR;
