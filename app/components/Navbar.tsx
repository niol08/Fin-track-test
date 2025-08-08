'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSidebar } from '../context/SidebarContext';

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchValue);
  };

  const handleMobileSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mobile search query:', searchValue);
    setIsMobileSearchOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node;
    if (
      searchInputRef.current?.contains(target) ||
      searchButtonRef.current?.contains(target)
    ) {
      return;
    }
    setIsSearchExpanded(false);
    if (mobileSearchRef.current && !mobileSearchRef.current.contains(target)) {
      setIsMobileSearchOpen(false);
    }
  };

  useEffect(() => {
    if (isSearchExpanded) {
      searchInputRef.current?.focus();
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      if (!isMobileSearchOpen) {
        setSearchValue('');
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchExpanded, isMobileSearchOpen]);

  useEffect(() => {
    if (isMobileSearchOpen) {
      mobileSearchInputRef.current?.focus();
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      if (!isSearchExpanded) {
        setSearchValue('');
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileSearchOpen, isSearchExpanded]);

  return (
    <>
      <nav className='h-16 flex items-center justify-between relative'>
        <div className='flex items-center w-41 justify-between'>
          {/* Hamburger Menu - Hidden on large screens */}
          <button onClick={toggleSidebar} className='lg:hidden'>
            <Image src='/menu.png' alt='Menu' width={24} height={24} />
          </button>
          <Link href='/dashboard' className='hidden md:block'>
            <Image src='/logo.png' alt='Logo' width={112} height={32} />
          </Link>
        </div>

        <div className='flex items-center justify-end w-111 h-10 gap-3 md:gap-7'>
          <div className='hidden md:flex items-center relative'>
            <div className='flex items-center'>
              <div
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${isSearchExpanded ? 'w-64 opacity-100' : 'w-0 opacity-0'}
                `}
              >
                <form onSubmit={handleSearchSubmit} className='relative'>
                  <input
                    ref={searchInputRef}
                    type='text'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder='Search transactions...'
                    className='w-full pl-4 pr-10 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-app-highlight focus:shadow-sm bg-white transition-colors duration-200'
                  />
                </form>
              </div>
              <button
                ref={searchButtonRef}
                onClick={toggleSearch}
                className={`
                  p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 outline-none focus:bg-gray-100 focus:shadow-sm
                  ${isSearchExpanded ? 'ml-2' : ''}
                `}
              >
                <Image src='/search.png' alt='Search' width={24} height={24} />
              </button>
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            <button
              onClick={toggleMobileSearch}
              className='p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 outline-none focus:bg-gray-100 focus:shadow-sm'
            >
              <Image src='/search.png' alt='Search' width={24} height={24} />
            </button>
          </div>

          <div className='flex items-center'>
            <Image src='/Icon-grid.png' alt='Grid' width={24} height={24} />
          </div>
          <div className='flex items-center'>
            <Image
              src='/profile5.png'
              alt='A professional-looking individual with short dark hair and glasses smiling in a modern office setting.'
              width={40}
              height={40}
            />
          </div>
        </div>
      </nav>
      {isMobileSearchOpen && (
        <div className='md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-4'>
          <div
            ref={mobileSearchRef}
            className='bg-white rounded-lg shadow-lg mx-4 w-full max-w-md p-4 animate-in slide-in-from-top-2 duration-300'
          >
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-lg font-medium text-app-text'>
                Search Transactions
              </h3>
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className='p-1 rounded-lg hover:bg-gray-100 transition-colors'
              >
                <svg
                  className='w-5 h-5 text-gray-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <form onSubmit={handleMobileSearchSubmit} className='space-y-4'>
              <div className='relative'>
                <input
                  ref={mobileSearchInputRef}
                  type='text'
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder='Search transactions...'
                  className='w-full pl-4 pr-12 py-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-app-highlight focus:shadow-sm bg-white transition-colors duration-200'
                />
                <button
                  type='submit'
                  className='absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100 transition-colors'
                >
                  <Image
                    src='/search.png'
                    alt='Search'
                    width={16}
                    height={16}
                  />
                </button>
              </div>
              <div className='flex gap-2'>
                <button
                  type='submit'
                  className='flex-1 bg-app-highlight text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-app-highlight/90 transition-colors'
                >
                  Search
                </button>
                <button
                  type='button'
                  onClick={() => setIsMobileSearchOpen(false)}
                  className='flex-1 bg-gray-100 text-app-text py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors'
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
