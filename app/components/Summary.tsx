import React from 'react';
import data from '../data.json';
import type { AppData } from '../types';
import Image from 'next/image';

const Summary = () => {
  const typedData = data as AppData;

  const formatValue = (label: string, value: number) => {
    if (
      label.includes('Balance') ||
      label.includes('Credits') ||
      label.includes('Debits')
    ) {
      return `$${value.toLocaleString()}`;
    }
    return value.toString();
  };

  const summaryItems = [
    {
      label: 'Total Balance',
      value: typedData.dashboardSummary.totalBalance,
      change: typedData.dashboardSummary.balanceChange,
    },
    {
      label: 'Total Credits',
      value: typedData.dashboardSummary.totalCredits,
      change: typedData.dashboardSummary.creditsChange,
    },
    {
      label: 'Total Debits',
      value: typedData.dashboardSummary.totalDebits,
      change: typedData.dashboardSummary.debitsChange,
    },
    {
      label: 'Transactions',
      value: typedData.dashboardSummary.transactionCount,
      change: typedData.dashboardSummary.transactionChange,
    },
  ];

  return (
    <>
      <h2 className='text-medium font-bold my-3'>Summary</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6'>
        {summaryItems.map((item, index) => (
          <div
            key={index}
            className='bg-app-credit-debit-bg-9 px-4 py-5 rounded-lg border-gray-200 hover:shadow-md transition-shadow'
          >
            <div className='flex flex-col'>
              <div className='flex items-center justify-between mb-1.5'>
                <span className='text-app-small-text text-[12px] font-bold'>
                  {item.label}
                </span>
                <Image
                  src='/dots-horizontal.png'
                  alt='menu dots'
                  width={16}
                  height={16}
                  className='opacity-60 hover:opacity-100 cursor-pointer transition-opacity'
                />
              </div>
              <div className='flex flex-col'>
                <span className='text-xl font-bold text-app-text'>
                  {formatValue(item.label, item.value)}
                </span>
                <span className='text-[10px] font-thin text-app-increment-text'>
                  {item.change >= 0 ? '+' : ''}
                  {item.change}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Summary;
