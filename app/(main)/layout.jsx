"use client"
import React from 'react'
import { useUser } from "@stackframe/stack";
import AppHeader from './_components/AppHeader'



const DashboardLayout = ({ children }) => {
  useUser({ or: 'redirect' });
  return (

    <div className="flex flex-col h-screen w-screen bg-gray-50 ">
      <AppHeader />
      <div className="p-10 mt-10 md:px-20 lg:px-28 xl:px-40 2xl:px-56" >
      
      {children}
      </div>
    </div>
  )
}
export default DashboardLayout