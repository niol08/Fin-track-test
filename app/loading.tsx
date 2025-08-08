export default function Loading() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='h-16 bg-white border-b border-gray-200 px-4'>
        <div className='flex items-center justify-between h-full'>
          <div className='flex items-center gap-4'>
            <div className='w-6 h-6 bg-gray-200 rounded animate-pulse'></div>
            <div className='w-28 h-8 bg-gray-200 rounded animate-pulse'></div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-8 h-8 bg-gray-200 rounded animate-pulse'></div>
            <div className='w-6 h-6 bg-gray-200 rounded animate-pulse'></div>
            <div className='w-10 h-10 bg-gray-200 rounded-full animate-pulse'></div>
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className='hidden lg:block w-64 bg-white border-r border-gray-200 min-h-screen'>
          <div className='p-4 space-y-2'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='h-9 bg-gray-200 rounded-2xl animate-pulse'
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className='flex-1 p-4 lg:p-6'>
          <div className='mb-6'>
            <div className='flex items-center justify-between mb-4'>
              <div className='flex items-center gap-3'>
                <div className='w-48 h-8 bg-gray-200 rounded animate-pulse'></div>
                <div className='w-16 h-6 bg-gray-200 rounded-full animate-pulse'></div>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-16 h-8 bg-gray-200 rounded-2xl animate-pulse'></div>
                <div className='w-9 h-9 bg-gray-200 rounded animate-pulse'></div>
              </div>
            </div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='flex items-center'>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 bg-gray-200 rounded-full animate-pulse ${
                      i > 0 ? '-ml-3' : ''
                    }`}
                    style={{
                      animationDelay: `${i * 150}ms`,
                    }}
                  ></div>
                ))}
              </div>
              <div className='w-32 h-4 bg-gray-200 rounded animate-pulse'></div>
            </div>
            <div className='flex gap-6 border-b border-gray-200'>
              <div className='w-20 h-8 bg-gray-200 rounded animate-pulse'></div>
              <div className='w-24 h-8 bg-gray-200 rounded animate-pulse'></div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className='bg-white p-4 rounded-lg border border-gray-200 animate-pulse'
                style={{
                  animationDelay: `${i * 200}ms`,
                }}
              >
                <div className='w-24 h-4 bg-gray-200 rounded mb-2'></div>
                <div className='w-32 h-8 bg-gray-200 rounded mb-1'></div>
                <div className='w-16 h-3 bg-gray-200 rounded'></div>
              </div>
            ))}
          </div>
          <div className='bg-white rounded-lg border border-gray-200 overflow-hidden'>
            <div className='hidden md:block border-b border-gray-200 p-4'>
              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-3 h-4 bg-gray-200 rounded animate-pulse'></div>
                <div className='col-span-3 h-4 bg-gray-200 rounded animate-pulse'></div>
                <div className='col-span-2 h-4 bg-gray-200 rounded animate-pulse'></div>
                <div className='col-span-2 h-4 bg-gray-200 rounded animate-pulse'></div>
                <div className='col-span-2 h-4 bg-gray-200 rounded animate-pulse'></div>
              </div>
            </div>
            <div className='divide-y divide-gray-200'>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className='p-4 animate-pulse'
                  style={{
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  <div className='hidden md:grid grid-cols-12 gap-4 items-center'>
                    <div className='col-span-3 h-4 bg-gray-200 rounded'></div>
                    <div className='col-span-3 h-4 bg-gray-200 rounded'></div>
                    <div className='col-span-2 h-4 bg-gray-200 rounded'></div>
                    <div className='col-span-2 h-4 bg-gray-200 rounded'></div>
                    <div className='col-span-2 w-16 h-6 bg-gray-200 rounded-full'></div>
                  </div>
                  <div className='md:hidden space-y-3'>
                    <div className='flex justify-between items-start'>
                      <div className='flex-1 space-y-2'>
                        <div className='w-3/4 h-4 bg-gray-200 rounded'></div>
                        <div className='w-1/2 h-3 bg-gray-200 rounded'></div>
                      </div>
                      <div className='text-right space-y-2'>
                        <div className='w-20 h-4 bg-gray-200 rounded ml-auto'></div>
                        <div className='w-16 h-6 bg-gray-200 rounded-full ml-auto'></div>
                      </div>
                    </div>
                    <div className='flex justify-between items-center pt-2 border-t border-gray-100'>
                      <div className='w-20 h-3 bg-gray-200 rounded'></div>
                      <div className='w-16 h-6 bg-gray-200 rounded-full'></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
