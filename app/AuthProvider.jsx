"use client"
import { useStackApp, useUser } from '@stackframe/stack';
import React from 'react'
import { useMutation } from 'convex/react';
import { useEffect } from 'react';
import { api } from "../convex/_generated/api";
import { UserContext } from './_context/UserContext';
import { useState } from 'react';

 function AuthProvider({ children }) {
    const user = useUser();
    console.log("AuthProvider: at beginning of function", user);
    const CreateUser = useMutation(api.users.createUser);
const [userData, setUserData] = useState(); // Initialize userData state
    const CreateNewUser = async () => {
        console.log("AuthProvider: Creating new db user...", user?.displayName);
        const result =  CreateUser({
            name: user?.displayName, // Fallback to "Unknown" if name is not available 
            email: user?.primaryEmail
        })
        setUserData(result); // Update userData state with the result
        console.log("AuthProvider: CreateUser result", result);
    }

    useEffect(() => {
        console.log("AuthProvider: user changed", user);
        user && CreateNewUser(); // Call CreateNewUser if user is available
    }
        , [user]);
        return (
            <div>
                <UserContext.Provider value={{userData, setUserData}}>
                {children}
             </UserContext.Provider>
            </div>
        )
 }
    export default AuthProvider;