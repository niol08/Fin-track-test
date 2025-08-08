'use client';

import Link from 'next/link';

export default function NotFound() {
  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center'>
        <div className='mb-4'>
          <svg
            className='mx-auto h-12 w-12 text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.137 0-4.146-.832-5.636-2.364M6.343 7.343A7.963 7.963 0 0112 5c4.418 0 8 3.582 8 8a7.966 7.966 0 01-.657 3.172'
            />
          </svg>
        </div>
        <h1 className='text-2xl font-bold text-gray-900 mb-2'>404</h1>
        <h2 className='text-xl font-semibold text-gray-700 mb-4'>
          Page Not Found
        </h2>
        <p className='text-gray-600 mb-6'>
          Sorry, we couldn&#39;t find the page you&#39;re looking for. It might
          have been moved or deleted.
        </p>
        <div className='space-y-3'>
          <Link
            href='/dashboard'
            className='block w-full bg-app-highlight text-white py-2 px-4 rounded-lg hover:bg-app-highlight/90 transition-colors duration-200'
          >
            Go to Dashboard
          </Link>
          <button
            onClick={handleGoBack}
            className='w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200'
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
