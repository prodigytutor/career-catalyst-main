"use client"
import React from 'react'
import { useUser } from "@stackframe/stack";
import { FeatureAssistants } from './_components/FeatureAssistants';
import { History } from './_components/History';
import { Feedback } from './_components/Feedback';
import { UserHeader } from './_components/UserHeader';

const DashboardPage = () => {
  const user = useUser({ or: "redirect" });
  console.log("dashboard user", user)
  return (
    <div className="flex flex-col justify-between bg-gray-50 ">
      <UserHeader />
      <FeatureAssistants user={user} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <History />
        <Feedback />
      </div>
    </div>
  )
}
export default DashboardPage