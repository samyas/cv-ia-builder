"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useUser } from "@clerk/nextjs"
import { Loader2, PlusSquare } from "lucide-react"
import { useState } from "react"

const AddResume = () => {
    const [openDialog,setOpenDialog]=useState(false)
    const [resumeTitle,setResumeTitle]=useState();
   // const {user}=useUser();
    const [loading,setLoading]=useState(false);
   // const navigation=useNavigate();
    const onCreate=async()=>{
        setLoading(true)
       // const uuid=uuidv4();
        const data={
            data:{
                title:resumeTitle,
                //resumeId:uuid,
             //   userEmail:user?.primaryEmailAddress?.emailAddress,
              //  userName:user?.fullName
            }
        }

        /*GlobalApi.CreateNewResume(data).then(resp=>{
            console.log(resp.data.data.documentId);
            if(resp)
            {
                setLoading(false);
                navigation('/dashboard/resume/'+resp.data.data.documentId+"/edit");
            }
        },(error)=>{
            setLoading(false);
        })*/

    }
  return (
    <div >
        <div className='p-14 py-24 border 
        items-center flex 
        justify-center bg-secondary
        rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed'
        onClick={()=>setOpenDialog(true)}
        >
            <PlusSquare  />
        </div>

    <Dialog open={openDialog}>
   
    <DialogContent>
        <DialogHeader>
        <DialogTitle>Create New Resume</DialogTitle>
        <DialogDescription>
           
                Add a title for your new resume
              
        </DialogDescription>
        </DialogHeader>
        <div>
            <Input className="my-2" 
                placeholder="Ex.Full Stack resume"
                onChange={(e)=>setResumeTitle(e.target.value)}
                />
        </div>

        <DialogFooter>
        <div className='flex justify-end gap-5'>
            <Button onClick={()=>setOpenDialog(false)} variant="ghost">Cancel</Button>
            <Button  disabled={!resumeTitle||loading}
            onClick={()=>onCreate()}>
                {loading?
                <Loader2 className='animate-spin' /> :'Create'   
            }
                </Button>
        </div>
            </DialogFooter>
    </DialogContent>
    </Dialog>

</div>
  )
}

export default AddResume