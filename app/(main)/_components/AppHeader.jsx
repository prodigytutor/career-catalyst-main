import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'



const AppHeader = () => {
    return (
        <div className="p-3 h-20 shadow-sm flex justify-between items-center mr-3" >
            <Image src="/career-catalyst.png" alt="Logo" width={300} height={250} />
            <UserButton/>
        </div>
    )
}
export default AppHeader