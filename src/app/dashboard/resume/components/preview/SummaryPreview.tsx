
import { ResumeInfo } from "../../model/ResumeInfo"

const SummaryPreview = ({resumeInfo}: {resumeInfo: ResumeInfo|null}) => {
  return (
    <p className='text-xs'>
        {resumeInfo?.summary}
    </p>
      )
}

export default SummaryPreview