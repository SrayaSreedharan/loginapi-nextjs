import React from 'react'
import UserHeader from '../component/UserHeader';
import UserFooter from '../component/UserFooter';

export default function UserLayout({ children }) {
  return (
    <>
     <UserHeader/>
        <main className="p-6">{children}</main>
    <UserFooter/>
    </>
  );
}
