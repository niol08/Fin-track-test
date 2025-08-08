'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import data from '../data.json';
import type { AppData } from '../types';
import StatusBadge from '../components/StatusBadgeProps';

type SortKey = 'date' | 'remark' | 'amount' | 'currency' | 'type';
type SortOrder = 'asc' | 'desc';

interface SortConfig {
  key: SortKey;
  order: SortOrder;
}

const Table = () => {
  const typedData = data as AppData;
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [showTooltip, setShowTooltip] = useState<
    SortKey | 'mobile-sort' | null
  >(null);

  const sortedTransactions = useMemo(() => {
    if (!sortConfig) return typedData.transactions;

    return [...typedData.transactions].sort((a, b) => {
      const { key, order } = sortConfig;
      let comparison = 0;

      switch (key) {
        case 'date':
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          comparison = dateA - dateB;
          break;
        case 'remark':
          comparison = a.remark.localeCompare(b.remark);
          break;
        case 'amount':
          comparison = a.amount - b.amount;
          break;
        case 'currency':
          comparison = a.currency.localeCompare(b.currency);
          break;
        case 'type':
          if (a.type === 'Credit' && b.type === 'Debit') comparison = -1;
          else if (a.type === 'Debit' && b.type === 'Credit') comparison = 1;
          else comparison = 0;
          break;
      }

      return order === 'desc' ? -comparison : comparison;
    });
  }, [typedData.transactions, sortConfig]);

  const handleSort = (key: SortKey, order: SortOrder) => {
    setSortConfig({ key, order });
    setShowTooltip(null);
  };

  const toggleTooltip = (key: SortKey | 'mobile-sort') => {
    setShowTooltip(showTooltip === key ? null : key);
  };

  const getSortOptions = (key: SortKey) => {
    switch (key) {
      case 'date':
        return [
          { label: 'Latest to Oldest', order: 'desc' as SortOrder },
          { label: 'Oldest to Latest', order: 'asc' as SortOrder },
        ];
      case 'remark':
        return [
          { label: 'A to Z', order: 'asc' as SortOrder },
          { label: 'Z to A', order: 'desc' as SortOrder },
        ];
      case 'amount':
        return [
          { label: 'Ascending', order: 'asc' as SortOrder },
          { label: 'Descending', order: 'desc' as SortOrder },
        ];
      case 'currency':
        return [
          { label: 'A to Z', order: 'asc' as SortOrder },
          { label: 'Z to A', order: 'desc' as SortOrder },
        ];
      case 'type':
        return [
          { label: 'Credit', order: 'asc' as SortOrder },
          { label: 'Debit', order: 'desc' as SortOrder },
        ];
      default:
        return [];
    }
  };

  const formatAmount = (amount: number, type: 'Credit' | 'Debit') => {
    const formattedAmount = `$${amount.toLocaleString()}`;
    return type === 'Debit' ? `-${formattedAmount}` : formattedAmount;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <>
      <div className='hidden md:block overflow-hidden'>
        <div className='text-app-small-text-62'>
          <div className='grid grid-cols-12 gap-4 px-4 py-2 font-medium text-[12px] border-b border-gray-200'>
            <div className='col-span-3 relative'>
              <div className='flex items-center justify-start'>
                <span>Date</span>
                <button
                  onClick={() => toggleTooltip('date')}
                  className='hover:bg-white/10 p-1 rounded transition-colors'
                >
                  <Image
                    src='/caret-down.png'
                    alt='sort'
                    width={12}
                    height={12}
                  />
                </button>
              </div>
              {showTooltip === 'date' && (
                <div className='absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-max'>
                  {getSortOptions('date').map((option) => (
                    <button
                      key={option.order}
                      onClick={() => handleSort('date', option.order)}
                      className='block w-full text-left px-3 py-2 text-sm text-app-text hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg'
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className='col-span-3 relative'>
              <div className='flex items-center justify-start'>
                <span>Remark</span>
                <button
                  onClick={() => toggleTooltip('remark')}
                  className='hover:bg-white/10 p-1 rounded transition-colors'
                >
                  <Image
                    src='/caret-down.png'
                    alt='sort'
                    width={12}
                    height={12}
                  />
                </button>
              </div>
              {showTooltip === 'remark' && (
                <div className='absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-max'>
                  {getSortOptions('remark').map((option) => (
                    <button
                      key={option.order}
                      onClick={() => handleSort('remark', option.order)}
                      className='block w-full text-left px-3 py-2 text-sm text-app-text hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg'
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className='col-span-2 relative'>
              <div className='flex items-center justify-start'>
                <span>Amount</span>
                <button
                  onClick={() => toggleTooltip('amount')}
                  className='hover:bg-white/10 p-1 rounded transition-colors'
                >
                  <Image
                    src='/caret-down.png'
                    alt='sort'
                    width={12}
                    height={12}
                  />
                </button>
              </div>
              {showTooltip === 'amount' && (
                <div className='absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-max'>
                  {getSortOptions('amount').map((option) => (
                    <button
                      key={option.order}
                      onClick={() => handleSort('amount', option.order)}
                      className='block w-full text-left px-3 py-2 text-sm text-app-text hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg'
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className='col-span-2 relative'>
              <div className='flex items-center justify-start'>
                <span>Currency</span>
                <button
                  onClick={() => toggleTooltip('currency')}
                  className='hover:bg-white/10 p-1 rounded transition-colors'
                >
                  <Image
                    src='/caret-down.png'
                    alt='sort'
                    width={12}
                    height={12}
                  />
                </button>
              </div>
              {showTooltip === 'currency' && (
                <div className='absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-max'>
                  {getSortOptions('currency').map((option) => (
                    <button
                      key={option.order}
                      onClick={() => handleSort('currency', option.order)}
                      className='block w-full text-left px-3 py-2 text-sm text-app-text hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg'
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className='col-span-2 relative'>
              <div className='flex items-center justify-start'>
                <span>Type</span>
                <button
                  onClick={() => toggleTooltip('type')}
                  className='hover:bg-white/10 p-1 rounded transition-colors'
                >
                  <Image
                    src='/caret-down.png'
                    alt='sort'
                    width={12}
                    height={12}
                  />
                </button>
              </div>
              {showTooltip === 'type' && (
                <div className='absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-max'>
                  {getSortOptions('type').map((option) => (
                    <button
                      key={option.order}
                      onClick={() => handleSort('type', option.order)}
                      className='block w-full text-left px-3 py-2 text-sm text-app-text hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg'
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='divide-y divide-gray-200'>
          {sortedTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className='grid grid-cols-12 gap-4 px-4 items-center py-2 hover:bg-gray-50 transition-colors'
            >
              <div className='col-span-3 font-light text-app-text text-[13px]'>
                {formatDate(transaction.date)}
              </div>
              <div className='col-span-3 font-light text-app-text text-[13px]'>
                {transaction.remark}
              </div>
              <div className='col-span-2 font-light text-app-text text-[13px]'>
                {formatAmount(transaction.amount, transaction.type)}
              </div>
              <div className='col-span-2 font-light text-app-small-text text-[13px]'>
                {transaction.currency}
              </div>
              <div className='col-span-2'>
                <StatusBadge status={transaction.type} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='block md:hidden space-y-3'>
        <div className='flex items-center justify-end px-4 py-2'>
          <div className='relative'>
            <button
              onClick={() => toggleTooltip('mobile-sort')}
              className='flex items-center gap-1 px-3 py-1 text-xs bg-white border border-gray-200 rounded-md hover:bg-gray-50'
            >
              <span>Sort</span>
              <Image src='/caret-down.png' alt='sort' width={10} height={10} />
            </button>
            {showTooltip === 'mobile-sort' && (
              <div className='absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-max'>
                <button
                  onClick={() => handleSort('date', 'desc')}
                  className='block w-full text-left px-3 py-2 text-sm text-app-text hover:bg-gray-50 first:rounded-t-lg'
                >
                  Latest First
                </button>
                <button
                  onClick={() => handleSort('amount', 'desc')}
                  className='block w-full text-left px-3 py-2 text-sm text-app-text hover:bg-gray-50'
                >
                  Highest Amount
                </button>
                <button
                  onClick={() => handleSort('type', 'asc')}
                  className='block w-full text-left px-3 py-2 text-sm text-app-text hover:bg-gray-50 last:rounded-b-lg'
                >
                  Credits First
                </button>
              </div>
            )}
          </div>
        </div>
        {sortedTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className='bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow'
          >
            <div className='flex items-start justify-between mb-2'>
              <div className='flex-1'>
                <h3 className='font-medium text-app-text text-[14px] mb-1'>
                  {transaction.remark}
                </h3>
                <p className='text-xs text-app-small-text'>
                  {formatDate(transaction.date)}
                </p>
              </div>
              <div className='text-right'>
                <div className='font-semibold text-app-text text-[14px] mb-1'>
                  {formatAmount(transaction.amount, transaction.type)}
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between pt-2 border-t border-gray-100'>
              <span className='text-xs text-app-small-text'>
                Currency: {transaction.currency}
              </span>
              <StatusBadge status={transaction.type} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Table;
