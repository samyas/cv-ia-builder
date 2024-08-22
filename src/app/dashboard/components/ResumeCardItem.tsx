import { Loader2Icon, MoreVertical, Notebook } from 'lucide-react'
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Link from 'next/link'
import Image from 'next/image'

const ResumeCardItem = ({resume,refreshData}) => {
    const [openAlert,setOpenAlert]=useState(false);
    const [loading,setLoading]=useState(false);
    return (
    <div className=''>
        <Link href="/dashboard/resume/12344/edit">
            <div className='p-14  bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200h-[280px] rounded-t-lg border-t-4' style={{borderColor:resume?.themeColor}}>
                    <div className='flex items-center justify-center h-[180px] '>
                    {/* <Notebook/> */}
                    <Image src="/cv.png" width={80} height={80} alt={''} />
                    </div>
            </div>
        </Link>
    <div className='border p-3 flex justify-between  text-white rounded-b-lg shadow-lg'style={{ background:resume?.themeColor }}>
      <h2 className='text-sm'>{resume.title}</h2>
        <DropdownMenu>
            <DropdownMenuTrigger>
            <MoreVertical className='h-4 w-4 cursor-pointer'/>
            </DropdownMenuTrigger>
    <DropdownMenuContent>
     
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>View</DropdownMenuItem>
      <DropdownMenuItem>Download</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
      
    </DropdownMenuContent>
  </DropdownMenu>

  <AlertDialog open={openAlert}>
  
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel onClick={()=>setOpenAlert(false)}>Cancel</AlertDialogCancel>
      <AlertDialogAction
      disabled={loading}>
        {loading? <Loader2Icon className='animate-spin'/>:'Delete'}
        </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  </div>
  </div>
  )
}

export default ResumeCardItem