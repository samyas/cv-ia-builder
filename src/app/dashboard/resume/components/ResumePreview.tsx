import { ResumeInfoContext } from "@/app/context/ResumeInfoContext"
import { useContext } from "react"
import PersonalDetailPreview from "./preview/PersonalDetailPreview"
import SummaryPreview from "./preview/SummaryPreview"
import ExperiencePreview from "./preview/ExperiencePreview"
import EducationalPreview from "./preview/EducationalPreview"
import SkillsPreview from "./preview/SkillsPreview"
import { ResumeInfo } from "../model/ResumeInfo"

const ResumePreview = () => {
    const {resumeInfo,setResumeInfo}=useContext<ResumeInfo>(ResumeInfoContext)
   // const resumeInfo=useContext<ResumeInfo|null>(ResumeInfoContext)
    return (
        <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
        borderColor:resumeInfo?.themeColor
    }}>
         {/* Personal Detail  */}
         <PersonalDetailPreview resumeInfo={resumeInfo} />
        {/* Summary  */}
        <SummaryPreview resumeInfo={resumeInfo} />
        {/* Professional Experience  */}
           {resumeInfo?.experiences?.length>0&& <ExperiencePreview resumeInfo={resumeInfo} />}
        {/* Educational  */}
        {resumeInfo?.educations?.length>0&&   <EducationalPreview resumeInfo={resumeInfo} />}
        {/* Skilss  */}
        {resumeInfo?.skills?.length>0&&    <SkillsPreview resumeInfo={resumeInfo}/>}
    </div>
  )
}

export default ResumePreview