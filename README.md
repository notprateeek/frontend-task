# Frontend Development Problem Statement

## Project Overview
This project involves building a responsive web application based on a provided design mockup for a "Global Stats" dashboard. The dashboard displays key statistics related to blockchain wallets, transactions, and assets across various chains. The goal is to implement the design using **Next.js** as the frontend framework and **Redux** for state management, ensuring a seamless and scalable user experience across different devices.

## Design links
https://drive.google.com/drive/folders/1qpC6ZSnGWXMTzaQQyUZTdd-HZULDTsKc?usp=sharing

## Design Mockup
The design mockup provided includes the following key elements:
- **Global Stats Section**: Displays four key metrics:
  - Total Wallets Scored: 12,750
  - Total Transactions Tracked: 40.12K
  - Total Chains Scored: 110
  - zKTL Real world scores generated: 8,654
- **Graph Section**: A bar graph showing wallet distribution across different value ranges (0-200, 200-400, 400-600, 600-800, 800-1000) with corresponding counts (e.g., 1500, 1200, 900, 600, 100).
- **Assets Table**: Lists assets (e.g., USDC, USDT, ETH, BASE, ARB) with columns for Borrow Volume, Collateral Volume, and Total Volume.
- **Chains Table**: Lists blockchain chains (e.g., Ethereum, Base, Bera, Polygon, Arbitrum) with columns for Volume, UAW (Unique Active Wallets), and Transactions.
- **Navigation and Filters**: Options to view "All Chains" and tabs for "Overview," "Liquidations," and "Loan Sizes."

## Requirements

### Technical Stack
- **Framework**: Next.js (v14 or latest stable version)
- **State Management**: Redux (with Redux Toolkit for modern usage)
- **Styling**: CSS Modules, Tailwind CSS, or any preferred CSS-in-JS solution (e.g., styled-components) to ensure responsiveness and maintainability.
- **Responsive Design**: The application must be fully responsive and work seamlessly on desktop, tablet, and mobile devices.

### Functional Requirements
1. **Global Stats Display**:
   - Render the four key metrics in a card layout with appropriate icons and styling as per the mockup.
   - Ensure real-time or mock data updates (data will be managed via Redux store).

2. **Graph Implementation**:
   - Create a bar graph to visualize wallet distribution across value ranges.
   - Use a charting library (e.g., Chart.js or Recharts) integrated with Next.js.
   - Ensure the graph is responsive and scales appropriately on different screen sizes.

3. **Tables for Assets and Chains**:
   - Implement two tables (Assets and Chains) with dynamic data.
   - Include search functionality for both tables to filter assets and chains.
   - Use pagination for tables with a default of 5 items per page and navigation controls.
   - Ensure tables are scrollable and responsive on smaller screens.

4. **Navigation and Filters**:
   - Implement a dropdown or toggle for "All Chains" selection.
   - Create tab navigation for "Overview," "Liquidations," and "Loan Sizes" with the "Overview" tab active by default.
   - Ensure filter interactions update the displayed data accordingly.

5. **State Management with Redux**:
   - Set up a Redux store to manage global state for metrics, graph data, and table data.
   - Use Redux Toolkit to create slices for different data domains (e.g., stats, assets, chains).
   - Implement actions and reducers to handle data updates and user interactions.

6. **Responsiveness**:
   - Use media queries or a CSS framework to ensure the layout adapts to various screen sizes.
   - Optimize table and graph layouts for mobile devices (e.g., stacked tables or simplified graphs).

### Non-Functional Requirements
- **Performance**: Ensure fast load times and smooth interactions, leveraging Next.js static generation or server-side rendering where applicable.
- **Accessibility**: Adhere to WCAG 2.1 guidelines, including proper ARIA labels and keyboard navigation.
- **Code Quality**: Follow best practices, including modular component structure, consistent naming conventions, and comprehensive comments.
- **Testing**: Include basic unit tests for components and Redux actions using a testing library like Jest and React Testing Library.

## Deliverables
- A fully functional Next.js application hosted on a Git repository (e.g., GitHub).
- A `README.md` file with setup instructions, dependencies, and a brief guide to run the project locally.
- A deployed version of the application (e.g., Vercel) for review.

## Setup Instructions
1. Fork the repo `https://github.com/elitex45/frontend-task.git`
2. Clone the repository: `git clone <your-repo-url>`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open http://localhost:3000 to view the app in the browser.
6. Push your updates and submit the repo link to gurukiran@zeru.finance with title "Frontend Task Submission"

## Mock Data
For development purposes, use the following mock data:
```
- **Global Stats**: { wallets: 12750, transactions: 40120, chains: 110, zkScores: 8654 }
- **Wallet Distribution**: { "0-200": 1500, "200-400": 1200, "400-600": 900, "600-800": 600, "800-1000": 100 }
- **Assets**: [
  { name: "USDC", borrowVolume: "$20B", collateralVolume: "100M", totalVolume: "1B" },
  { name: "USDT", borrowVolume: "$18B", collateralVolume: "150M", totalVolume: "1.5B" },
  { name: "ETH", borrowVolume: "$12B", collateralVolume: "200M", totalVolume: "2B" },
  { name: "BASE", borrowVolume: "$10B", collateralVolume: "10M", totalVolume: "100M" },
  { name: "ARB", borrowVolume: "$8B", collateralVolume: "50M", totalVolume: "500M" }
]
- **Chains**: [
  { name: "Ethereum", volume: "$20B", uaw: "100M", transactions: "1B" },
  { name: "Base", volume: "$18B", uaw: "150M", transactions: "1.5B" },
  { name: "Bera", volume: "$12B", uaw: "200M", transactions: "2B" },
  { name: "Polygon", volume: "$10B", uaw: "10M", transactions: "100M" },
  { name: "Arbitrum", volume: "$8B", uaw: "50M", transactions: "500M" }
]
```

## Timeline
- Complete this frontend in next 3 days of receiving this problem statement.

## Additional Notes
- Document any assumptions or deviations from the mockup in the `README.md`.

Happy coding! Let’s build an amazing dashboard! 🚀
