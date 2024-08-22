import { Resume } from "@/app/dashboard/model/Resumt";
import { ResumeInfo } from "@/app/dashboard/resume/model/ResumeInfo";
import axios from "axios";
import { AxiosResponse } from "axios";

const axiosClient=axios.create({
    baseURL:"/data",
    headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
    }
})


//const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data);

const GetUserResumes=(userEmail: string): AxiosResponse<Resume[]> =>axiosClient.get<Resume[]>('/resumes.json');

//const UpdateResumeDetail=(id: string,data)=>axiosClient.put('/user-resumes/'+id,data)

const GetResumeById=(id: string) : AxiosResponse<ResumeInfo>=>axiosClient.get<ResumeInfo>('/cv.json')

//const DeleteResumeById=(id: string)=>axiosClient.delete('/user-resumes/'+id)

export default{
  //  CreateNewResume,
    GetUserResumes,
    //UpdateResumeDetail,
    GetResumeById,
    //DeleteResumeById
}