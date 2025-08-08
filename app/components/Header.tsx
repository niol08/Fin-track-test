'use client';

import Image from 'next/image';
import StatusBadge from './StatusBadgeProps';
import { useTab } from '../context/TabContext';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const { activeTab, setActiveTab } = useTab();
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const iconRef = useRef<HTMLButtonElement>(null);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'transactions', label: 'Transactions' },
  ];

  const toggleShareTooltip = () => {
    setShowShareTooltip(!showShareTooltip);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node;
    if (iconRef.current && !iconRef.current.contains(target)) {
      setShowShareTooltip(false);
    }
  };

  useEffect(() => {
    if (showShareTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showShareTooltip]);

  return (
    <section className=' w-full font-public-sans text-app-text flex-col justify-between'>
      <div className='flex items-center h-10 justify-between mb-3'>
        <div className='flex items-center justify-between gap-2'>
          <div className='flex items-center gap-1'>
            <span className='font-bold leading-10 text-2xl sm:text-xl'>
              Wallet Ledger
            </span>
            <Image
              src='/caret-down.png'
              alt='caret down'
              width={16}
              height={16}
              className='mt-1'
            />
          </div>
          <StatusBadge status='Active' />
        </div>
        <div className='hidden sm:flex items-center justify-between w-31'>
          <button
            onClick={() => {
              console.log('Share clicked');
            }}
            className='w-19 h-9 bg-app-thick-highlight flex justify-center items-center text-app-thick-highlight-text rounded-[16px] text-center font-medium text-[12px] hover:bg-app-thick-highlight/90 hover:shadow-sm active:bg-app-thick-highlight/80 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'
          >
            Share
          </button>
          <button className='p-1 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200'>
            <Image
              src='/iconButtonOutlinedStandard.png'
              alt='More options'
              width={36}
              height={36}
            />
          </button>
        </div>
        <div className='sm:hidden relative'>
          <button
            ref={iconRef}
            onClick={toggleShareTooltip}
            className='p-1 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200'
          >
            <Image
              src='/iconButtonOutlinedStandard.png'
              alt='More options'
              width={36}
              height={36}
            />
          </button>

          {showShareTooltip && (
            <div className='absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10'>
              <button
                onClick={() => {
                  console.log('Share clicked');
                  setShowShareTooltip(false);
                }}
                className='w-19 h-9 bg-app-thick-highlight flex justify-center items-center text-app-thick-highlight-text rounded-[16px] text-center font-medium text-[12px] m-2 hover:bg-app-thick-highlight/90 hover:shadow-sm active:bg-app-thick-highlight/80 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer'
              >
                Share
              </button>
            </div>
          )}
        </div>
      </div>

      <div className='flex items-center gap-2 mb-3'>
        <div className='flex items-center'>
          <div className='relative z-40'>
            <Image src='/profile1.png' alt='Profile 1' width={36} height={36} />
          </div>
          <div className='relative -ml-3 z-30'>
            <Image src='/profile2.png' alt='Profile 2' width={36} height={36} />
          </div>
          <div className='relative -ml-3 z-20'>
            <Image src='/profile3.png' alt='Profile 3' width={36} height={36} />
          </div>
          <div className='relative -ml-3 z-10'>
            <Image src='/profile4.png' alt='Profile 4' width={36} height={36} />
          </div>
        </div>
        <span className='hidden sm:inline text-app-small-text-62 text-[12px] font-thin'>
          Ava, Liam, Noah +12 others
        </span>
      </div>

      <div className='relative '>
        <div className='flex'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                w-24 py-2 text-sm transition-colors duration-200 text-center text-[12px] font-thin
                ${
                  activeTab === tab.id
                    ? 'text-app-current-tab'
                    : 'text-app-small-text-62 hover:text-app-text'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className='absolute bottom-0 left-0 w-full h-0.5 bg-gray-200' />
        <div
          className='absolute bottom-0 left-0 h-0.5 bg-app-current-tab transition-all duration-300 ease-in-out'
          style={{
            width: '6em',
            transform:
              activeTab === 'overview' ? 'translateX(0px)' : 'translateX(6em)',
          }}
        />
      </div>
    </section>
  );
};

export default Header;
