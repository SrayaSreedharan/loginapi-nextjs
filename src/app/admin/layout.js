import React from 'react'
import AdminHeader from '../component/AdminHeader';
import AdminFooter from '../component/AdminFooter';

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminHeader/>
        <main className="p-6">{children}</main>
      <AdminFooter/>
      </>
      
  );
}
