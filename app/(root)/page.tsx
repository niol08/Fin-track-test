'use client';

import React from 'react';

const Page = () => {
  React.useEffect(() => {
    window.location.replace('/dashboard');
  }, []);
  return null;
};

export default Page;
