import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className='main-layout'>
        <Sidebar />
        <main className='overflow-auto'>{children}</main>
      </div>
    </>
  );
}
