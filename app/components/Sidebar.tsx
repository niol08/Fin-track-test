'use client';

import Link from 'next/link';
import data from '../data.json';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSidebar } from '../context/SidebarContext';
import { AppData } from '../types';

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, closeSidebar } = useSidebar();
  const typedData = data as AppData;

  return (
    <>
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'
          onClick={closeSidebar}
        />
      )}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='lg:hidden border-b border-gray-200 flex items-center justify-between px-4 pb-2 pt-2'>
          <div className='flex items-center'>
            <Link href='/dashboard'>
              <Image src='/logo.png' alt='Logo' width={112} height={32} />
            </Link>
          </div>

          <button
            onClick={closeSidebar}
            className='p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200'
            aria-label='Close sidebar'
          >
            <svg
              className='w-6 h-6 text-app-text'
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

        <nav className='flex-1 p-4 lg:px-0'>
          <ul className='space-y-1'>
            {typedData.sidebar.items.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.label} className='group'>
                  <Link
                    href={item.href}
                    onClick={closeSidebar}
                    className={`
                      block h-9 px-4 py-2 font-medium leading-5 rounded-[14px] transition-all duration-200 ease-in-out
                      ${
                        isActive
                          ? 'bg-app-highlight-16 text-app-highlight-text'
                          : 'text-app-text hover:bg-gray-100 hover:text-app-highlight-text active:bg-app-highlight-16 active:text-app-highlight-text'
                      }
                    `}
                  >
                    <span className='block'>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
