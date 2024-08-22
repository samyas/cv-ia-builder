"use client";
import React from 'react'
import Image from "next/image"
import { Button } from '../ui/button'


import { UserButton, useUser } from "@clerk/nextjs";

import Link from 'next/link'

const Header = () => {
  const { user, isSignedIn } = useUser();
    return (
        <div className='p-3 px-5 flex justify-between shadow-md'>
        <Link href="/dashboard">
       <Image src='/logo.svg' className='cursor-pointer' width={100} height={100} alt={''} />
       </Link>
       {isSignedIn ?
           <div className='flex gap-2 items-center'>
                 <Link href="/dashboard">
                   <Button variant="outline">Dashboard</Button>
               </Link>
               <UserButton />
           </div> :
            <Link href="/sign-in">
               <Button>Get Started</Button>
           </Link>
       }

   </div>
    )
}

export default Header