"use client"
import React from 'react'
import { useUser } from "@stackframe/stack";
import { Button } from '@/components/ui/button';
import { CoachingOptions } from '@/services/Options';
import { BlurFade } from "@/components/magicui/blur-fade";
import { View } from 'lucide-react';
import Image from 'next/image';
import { UserInputDialog } from './UserInputDialog';
export const FeatureAssistants = () => {
    const user = useUser();
    return (
        <div className="flex flex-row justify-between items-center w-screen">
           
            <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6
             gap-5">
                {CoachingOptions.map((option, index) => (
                    <BlurFade key={option.icon} delay={0.25 + index * 0.05} inView>
                        <UserInputDialog coachingOption={option}>

                            <div key={index} className="flex flex-col justify-center items-center bg-white shadow-sm rounded-lg p-2 mt-2 hover:shadow-md transition duration-300 ease-in-out cursor-pointer">

                                <Image src={option.icon} alt={option.name} width={250} height={250} className="h-[75px] w-[75px] rounded-full hover:rotate-12 cursor-pointer transition-all" />
                                <h2>{option.name}</h2>

                            </div>
                        </UserInputDialog>
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}
