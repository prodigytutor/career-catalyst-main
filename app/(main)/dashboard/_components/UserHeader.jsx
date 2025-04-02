"use client"
import React from 'react'
import { useUser } from "@stackframe/stack";
import { Button } from '@/components/ui/button';
export const UserHeader = () => {
    const user = useUser();
    return (
            <div className="flex flex-row justify-between items-start bg-gray-100">
                <div className="flex flex-col justify-between items-start bg-gray-100">
                    <h2 className="text-medium text-gray-500">My Workspace</h2>
                    <h2 className="text-3xl font-bold">Welcome back, {user?.displayName}</h2>
                </div>
                <Button className="mt-1">Profile</Button>
            </div>
    )
}
