'use client';

import React from 'react';

interface TabContentProps {
  activeTab: string;
  overviewContent: React.ReactNode;
  transactionsContent: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({
  activeTab,
  overviewContent,
  transactionsContent,
}) => {
  return (
    <div className='relative overflow-hidden'>
      <div
        className={`
        transition-all duration-300 ease-in-out
        ${
          activeTab === 'overview'
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-full absolute top-0 left-0 w-full'
        }
      `}
      >
        {overviewContent}
      </div>

      <div
        className={`
        transition-all duration-300 ease-in-out
        ${
          activeTab === 'transactions'
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full absolute top-0 left-0 w-full'
        }
      `}
      >
        {transactionsContent}
      </div>
    </div>
  );
};

export default TabContent;
