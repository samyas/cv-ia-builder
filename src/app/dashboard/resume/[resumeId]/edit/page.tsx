"use client"
import ResumeCardItem from "@/app/dashboard/components/ResumeCardItem"
import FormSection from "../../components/FormSection"
import ResumePreview from "../../components/ResumePreview"
import { ResumeInfoContext } from "@/app/context/ResumeInfoContext"
import { useEffect, useState } from "react"
import GlobalApi from "../../../../../../service/GlobalApi"
import { ResumeInfo } from "../../model/ResumeInfo"

const EditResume = () => {
  //  const {resumeId}=useParams();
    const [resumeInfo,setResumeInfo]=useState<ResumeInfo>();
    useEffect(()=>{
       
        GetResumeInfo();
    },[])


    const GetResumeInfo=()=>{
        GlobalApi.GetResumeById('resumeId').then(resp=>{
          setResumeInfo(resp.data);
        })
    }

    return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
        <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
            {/* Form Section  */}
            <FormSection/>
            {/* Preview Section  */}
            <ResumePreview/>
        </div>
</ResumeInfoContext.Provider>
  )
}

export default EditResume