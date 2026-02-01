import { BudgetData } from '../types';

// Data extracted from PDF Pages 17, 18, 21
export const budgetData: BudgetData = {
  allocations: [
    { ministry: "Transport", amountCrore: 598520, category: "Infrastructure" },
    { ministry: "Defence", amountCrore: 594585, category: "Defense" },
    { ministry: "Rural Development", amountCrore: 273108, category: "Social" },
    { ministry: "Home Affairs", amountCrore: 255234, category: "Administration" },
    { ministry: "Agriculture and Allied Activities", amountCrore: 162671, category: "Economic" },
    { ministry: "Education", amountCrore: 139289, category: "Social" },
    { ministry: "Energy", amountCrore: 109029, category: "Infrastructure" },
    { ministry: "Health", amountCrore: 104599, category: "Social" },
    { ministry: "Urban Development", amountCrore: 85522, category: "Infrastructure" },
    { ministry: "IT and Telecom", amountCrore: 74560, category: "Infrastructure" },
    { ministry: "Commerce and Industry", amountCrore: 70296, category: "Economic" },
    { ministry: "Social Welfare", amountCrore: 62362, category: "Social" },
    { ministry: "Scientific Departments", amountCrore: 55756, category: "Economic" },
    { ministry: "Tax Administration", amountCrore: 45500, category: "Administration" },
    { ministry: "External Affairs", amountCrore: 22119, category: "Administration" },
    { ministry: "Finance", amountCrore: 20649, category: "Administration" },
    { ministry: "Development of North East", amountCrore: 6812, category: "Infrastructure" },
  ],
  rupeeComesFrom: [
    { label: "Borrowings & Liabilities", percentage: 24, color: "#475569" },
    { label: "Income Tax", percentage: 21, color: "#138808" }, // India Green
    { label: "Corporation Tax", percentage: 18, color: "#ea580c" }, // Deep Orange
    { label: "GST & Other Taxes", percentage: 15, color: "#eab308" }, // Yellow
    { label: "Non-Tax Revenues", percentage: 10, color: "#3b82f6" },
    { label: "Union Excise Duties", percentage: 6, color: "#8b5cf6" },
    { label: "Customs", percentage: 4, color: "#ec4899" },
    { label: "Non-Debt Capital Receipts", percentage: 2, color: "#64748b" },
  ],
  rupeeGoesTo: [
    { label: "States Share of Taxes", percentage: 22, color: "#ea580c" },
    { label: "Interest Payment", percentage: 20, color: "#ef4444" },
    { label: "Central Sector Scheme", percentage: 17, color: "#138808" },
    { label: "Defence", percentage: 11, color: "#475569" },
    { label: "Centrally Sponsored Scheme", percentage: 8, color: "#3b82f6" },
    { label: "Other Expenditures", percentage: 7, color: "#94a3b8" },
    { label: "Finance Commission Transfers", percentage: 7, color: "#8b5cf6" },
    { label: "Major Subsidies", percentage: 6, color: "#eab308" },
    { label: "Civil Pension", percentage: 2, color: "#64748b" },
  ],
  fiscalTrends: [
    { year: "2022-23", fiscalDeficit: 6.5, revenueDeficit: 4.0, primaryDeficit: 3.0, isEstimate: false },
    { year: "2023-24", fiscalDeficit: 5.6, revenueDeficit: 2.6, primaryDeficit: 1.9, isEstimate: false },
    { year: "2024-25", fiscalDeficit: 4.9, revenueDeficit: 1.8, primaryDeficit: 1.4, isEstimate: false },
    { year: "2025-26", fiscalDeficit: 4.5, revenueDeficit: 2.6, primaryDeficit: 1.3, isEstimate: true },
    { year: "2026-27 (BE)", fiscalDeficit: 4.3, revenueDeficit: 2.8, primaryDeficit: 0.7, isEstimate: true },
  ],
  highlights: [
    {
      id: "1",
      title: "Manufacturing & Frontier Sectors",
      category: "Industry",
      description: "Strategic focus on strengthening domestic manufacturing and high-tech sectors.",
      points: [
        "India Semiconductor Mission (ISM) 2.0 launched.",
        "Biopharma SHAKTI initiative.",
        "3 Dedicated Chemical Parks to enhance domestic production.",
        "Scheme for Container Manufacturing to boost logistics.",
        "Electronics Components Manufacturing Scheme."
      ],
      year: "2026-27"
    },
    {
      id: "2",
      title: "MSME Support",
      category: "Industry",
      description: "Three-pronged approach to help MSMEs grow as 'Champions'.",
      points: [
        "Dedicated ₹10,000 crore SME Growth Fund.",
        "Credit guarantee support through CGTMSE for invoice discounting.",
        "TReDS mandated for all CPSE purchases from MSMEs.",
        "Removal of value cap of ₹10 lakh on courier exports."
      ],
      year: "2026-27"
    },
    {
      id: "3",
      title: "Tax Reforms",
      category: "Tax",
      description: "Simplification and relief for middle class and industries.",
      points: [
        "Increase limit for duty-free imports for seafood processing.",
        "Customs duty exemptions on microwave oven parts and aircraft components.",
        "Safe harbour threshold for IT services increased to ₹2,000 crore.",
        "Tax holidays until 2047 for foreign cloud service providers.",
        "Honest taxpayers can settle disputes by paying penalty in lieu of prosecution."
      ],
      year: "2026-27"
    },
    {
      id: "4",
      title: "Agriculture & Allied",
      category: "Agriculture",
      description: "Increasing farmer's income by enhancing productivity.",
      points: [
        "Dedicated programme for Indian cashew and cocoa.",
        "High-density cultivation of walnuts, almonds, and pine nuts.",
        "Integrating AgriStack portals with AI systems.",
        "Fish catch in EEZ made duty-free."
      ],
      year: "2026-27"
    },
    // 2025-26 Highlights
    {
      id: "5",
      title: "Agri-District Programme",
      category: "Agriculture",
      description: "Focusing on district-level agricultural development.",
      points: [
        "Prime Minister Dhan-Dhaanya Krishi Yojana to cover 100 districts.",
        "Mission for Cotton Productivity: 5-year mission.",
        "Makhana Board to be set up in Bihar.",
        "Enhanced KCC limit to ₹5 lakh for farmers and fishermen."
      ],
      year: "2025-26"
    },
    {
      id: "6",
      title: "MSME & Entrepreneurship",
      category: "Industry",
      description: "Boosting first-time entrepreneurs and micro enterprises.",
      points: [
        "Credit Cards for Micro Enterprises with ₹5 lakh limit.",
        "New scheme for 5 lakh first-time entrepreneurs with loans up to ₹2 crore.",
        "Focus Product Scheme for Footwear & Leather sectors.",
        "Revision in classification criteria for MSMEs."
      ],
      year: "2025-26"
    },
    {
      id: "7",
      title: "Social Infrastructure",
      category: "Social",
      description: "Investing in health, education, and digital resources.",
      points: [
        "Day Care Cancer Centres in all District Hospitals.",
        "Bharatiya Bhasha Pustak Scheme for books in Indian languages.",
        "Expansion of medical education: 10,000 additional seats.",
        "Saksham Anganwadi and Poshan 2.0 implementation."
      ],
      year: "2025-26"
    },
    // 2024-25 Highlights
    {
      id: "8",
      title: "Employment & Skilling",
      category: "Social",
      description: "Comprehensive package for job creation and skilling.",
      points: [
        "PM's Package of 5 schemes for Employment Linked Incentive.",
        "Internship opportunities in 500 top companies for 1 crore youth.",
        "One-month wage to new entrants in all formal sectors.",
        "Skilling programme for 20 lakh youth over 5 years."
      ],
      year: "2024-25"
    },
    {
      id: "9",
      title: "Infrastructure Push",
      category: "Infra",
      description: "Continued strong capex for nation building.",
      points: [
        "Provision of ₹11,11,111 crore for infrastructure (3.4% of GDP).",
        "Phase IV of PMGSY for 25,000 rural habitations.",
        "Irrigation and Flood Mitigation projects worth ₹11,500 crore.",
        "Transit Oriented Development plans for 14 large cities."
      ],
      year: "2024-25"
    },
    {
      id: "10",
      title: "Energy Security",
      category: "Infra",
      description: "Focus on renewable energy and nuclear power.",
      points: [
        "PM Surya Ghar Muft Bijli Yojana for 1 crore households.",
        "Setting up Bharat Small Reactors with private sector.",
        "Pumped Storage Policy for electricity storage.",
        "AUSC Thermal Power Plants joint venture."
      ],
      year: "2024-25"
    }
  ],
  historicalStats: {
    "2023-24": { revenueReceipts: 27.3, capitalReceipts: 17.1, revenueExpenditure: 34.9, effectiveCapitalExpenditure: 12.5 },
    "2024-25": { revenueReceipts: 31.3, capitalReceipts: 16.9, revenueExpenditure: 37.1, effectiveCapitalExpenditure: 15.0 },
    "2025-26": { revenueReceipts: 34.2, capitalReceipts: 16.4, revenueExpenditure: 39.4, effectiveCapitalExpenditure: 15.5 },
    "2026-27": { revenueReceipts: 38.5, capitalReceipts: 15.9, revenueExpenditure: 42.1, effectiveCapitalExpenditure: 16.2 } // Estimated based on trends/context if not explicit, but filling for consistency
  },
  historicalAllocations: {
    "2024-25": [
      { ministry: "Defence", amountCrore: 454773, category: "Defense" },
      { ministry: "Rural Development", amountCrore: 265808, category: "Social" },
      { ministry: "Agriculture and Allied Activities", amountCrore: 151851, category: "Economic" },
      { ministry: "Home Affairs", amountCrore: 150983, category: "Administration" },
      { ministry: "Education", amountCrore: 125638, category: "Social" },
      { ministry: "IT and Telecom", amountCrore: 116342, category: "Infrastructure" },
      { ministry: "Health", amountCrore: 89287, category: "Social" },
      { ministry: "Energy", amountCrore: 68769, category: "Infrastructure" },
      { ministry: "Social Welfare", amountCrore: 56501, category: "Social" },
      { ministry: "Commerce and Industry", amountCrore: 47559, category: "Economic" }
    ],
    "2025-26": [
      { ministry: "Defence", amountCrore: 491732, category: "Defense" },
      { ministry: "Rural Development", amountCrore: 266817, category: "Social" },
      { ministry: "Home Affairs", amountCrore: 233211, category: "Administration" },
      { ministry: "Agriculture and Allied Activities", amountCrore: 171437, category: "Economic" },
      { ministry: "Education", amountCrore: 128650, category: "Social" },
      { ministry: "Health", amountCrore: 98311, category: "Social" },
      { ministry: "Urban Development", amountCrore: 96777, category: "Infrastructure" },
      { ministry: "IT and Telecom", amountCrore: 95298, category: "Infrastructure" },
      { ministry: "Energy", amountCrore: 81174, category: "Infrastructure" },
      { ministry: "Commerce and Industry", amountCrore: 65553, category: "Economic" },
      { ministry: "Social Welfare", amountCrore: 60052, category: "Social" },
      { ministry: "Scientific Departments", amountCrore: 55679, category: "Economic" }
    ]
  },
  historicalRupeeComesFrom: {
    "2024-25": [
      { label: "Borrowings & Liabilities", percentage: 27, color: "#475569" },
      { label: "Income Tax", percentage: 19, color: "#138808" },
      { label: "GST & Other Taxes", percentage: 18, color: "#eab308" },
      { label: "Corporation Tax", percentage: 17, color: "#ea580c" },
      { label: "Non-Tax Revenues", percentage: 9, color: "#3b82f6" },
      { label: "Union Excise Duties", percentage: 5, color: "#8b5cf6" },
      { label: "Customs", percentage: 4, color: "#ec4899" },
      { label: "Non-Debt Capital Receipts", percentage: 1, color: "#64748b" }
    ],
    "2025-26": [
      { label: "Borrowings & Liabilities", percentage: 24, color: "#475569" },
      { label: "Income Tax", percentage: 22, color: "#138808" },
      { label: "GST & Other Taxes", percentage: 18, color: "#eab308" },
      { label: "Corporation Tax", percentage: 17, color: "#ea580c" },
      { label: "Non-Tax Revenues", percentage: 9, color: "#3b82f6" },
      { label: "Union Excise Duties", percentage: 5, color: "#8b5cf6" },
      { label: "Customs", percentage: 4, color: "#ec4899" },
      { label: "Non-Debt Capital Receipts", percentage: 1, color: "#64748b" }
    ]
  },
  historicalRupeeGoesTo: {
    "2024-25": [
      { label: "States Share of Taxes", percentage: 21, color: "#ea580c" },
      { label: "Interest Payment", percentage: 19, color: "#ef4444" },
      { label: "Central Sector Scheme", percentage: 16, color: "#138808" },
      { label: "Other Expenditures", percentage: 9, color: "#94a3b8" },
      { label: "Finance Commission Transfers", percentage: 9, color: "#8b5cf6" },
      { label: "Centrally Sponsored Scheme", percentage: 8, color: "#3b82f6" },
      { label: "Defence", percentage: 8, color: "#475569" },
      { label: "Major Subsidies", percentage: 6, color: "#eab308" },
      { label: "Pensions", percentage: 4, color: "#64748b" }
    ],
    "2025-26": [
      { label: "States Share of Taxes", percentage: 22, color: "#ea580c" },
      { label: "Interest Payment", percentage: 20, color: "#ef4444" },
      { label: "Central Sector Scheme", percentage: 16, color: "#138808" },
      { label: "Defence", percentage: 8, color: "#475569" },
      { label: "Centrally Sponsored Scheme", percentage: 8, color: "#3b82f6" },
      { label: "Other Expenditures", percentage: 8, color: "#94a3b8" },
      { label: "Finance Commission Transfers", percentage: 8, color: "#8b5cf6" },
      { label: "Major Subsidies", percentage: 6, color: "#eab308" },
      { label: "Pensions", percentage: 4, color: "#64748b" }
    ]
  }
};