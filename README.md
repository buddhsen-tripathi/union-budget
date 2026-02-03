# Union Budget Dashboard

An interactive visualization dashboard for the Indian Union Budget. This application provides insights into fiscal allocations, revenue sources, expenditure trends, and key policy highlights spanning FY 2023-24 to FY 2026-27.

## 🚀 Features

- **Budget at a Glance**: Overview with total budget allocation and key fiscal indicators.
- **Deficit Indicators**: Fiscal deficit, revenue deficit, effective revenue deficit, and primary deficit with year-over-year comparisons.
- **Fiscal Deficit Sources**: Visualization of how the fiscal deficit is financed (market borrowings, small savings, external debt, etc.).
- **Revenue & Receipts**: Tax composition breakdown (Income Tax, Corporation Tax, GST, Customs, Excise) and receipts summary.
- **Expenditure Structure**: Government expenditure breakdown and capital expenditure analysis.
- **Allocation Explorer**: Detailed ministry-wise breakdown of budget allocations with search and filter capabilities.
- **Visual Analytics**:
    - **Receipts vs Expenditure**: Trend analysis over multiple fiscal years.
    - **Deficit Trends**: Historical view of fiscal, revenue, and primary deficits (% of GDP).
    - **Rupee Movement**: Interactive charts showing where the money comes from and where it goes.
- **Historical Comparison**: Compare budget data across FY 2023-24, 2024-25, 2025-26, and 2026-27.
- **Policy Overview**: High-level summary of major policy initiatives across sectors.

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **State Management**: Zustand
- **Routing**: React Router DOM

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

## 📂 Project Structure

- `src/components`: Reusable UI components and charts.
- `src/pages`: Main application views (Dashboard, AllocationExplorer, Policies).
- `src/data`: Budget datasets organized by fiscal year.
  - `budget-2023-24.ts`: FY 2023-24 budget data
  - `budget-2024-25.ts`: FY 2024-25 budget data
  - `budget-2025-26.ts`: FY 2025-26 budget data
  - `budget-2026-27.ts`: FY 2026-27 budget data
  - `index.ts`: Aggregated budget data exports
- `src/store`: Zustand store for state management.
- `src/types.ts`: TypeScript type definitions for budget data structures.

## 📊 Data Source

Budget data is sourced from official Union Budget documents available at [indiabudget.gov.in](https://www.indiabudget.gov.in/).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Disclaimer: This is a visualization project and not an official government website.*