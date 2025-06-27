import React from 'react';

import TopHeader from '../components/layout/TopHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';

/**
 * DashboardOverviewPage is the main page of the application.
 * It provides a high-level overview of key metrics using a series of stat cards.
 * The page is structured with a fixed header and a scrollable main content area.
 */
const DashboardOverviewPage: React.FC = () => {
  return (
    // The main container uses a flex-col layout to position the header and main content.
    // bg-secondary provides the light gray background for the content area, contrasting with the white header.
    <div className="flex min-h-screen w-full flex-col bg-secondary">
      <TopHeader />
      <main className="flex-1 p-6">
        {/* Main content is centered and constrained in width */}
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Dashboard Overview
            </h1>
            <StatsCardGrid />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardOverviewPage;
