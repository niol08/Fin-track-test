'use client';

import React from 'react';
import Header from '../../components/Header';
import Summary from '@/app/components/Summary';
import Table from '@/app/components/Table';
import { TabProvider } from '../../context/TabContext';
import TabContent from '../../components/TabContentProps';
import { useTab } from '../../context/TabContext';

const DashboardContent = () => {
  const { activeTab } = useTab();

  return (
    <div className='p-6'>
      <Header />

      <TabContent
        activeTab={activeTab}
        overviewContent={
          <>
            <Summary />
            <Table />
          </>
        }
        transactionsContent={
          <div className='bg-white p-6 rounded-lg'>
            <h2 className='text-xl font-semibold mb-4'>All Transactions</h2>
            <p className='text-app-small-text'>
              Transactions content coming soon...
            </p>
          </div>
        }
      />
    </div>
  );
};

const DashboardPage = () => {
  return (
    <TabProvider>
      <DashboardContent />
    </TabProvider>
  );
};
export default DashboardPage;
