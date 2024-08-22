export interface ResumeInfo{
    firstName:string;
    lastName:string;
    jobTitle:string;
    address:string;
    phone:string;
    email:string;
    themeColor:string;
    summary:string;
    experiences: Array<Experience>;
    educations: Array<Education>;
    skills: Array<Skill>;
}


export interface Experience{
    id:number;
    title:string;
    companyName:string;
    city:string;
    state:string;
    startDate:string;
    endDate:string;
    currentlyWorking:boolean;
    workSummary:string;
  
}

export interface Education {
    id:number;
    universityName:string;
    startDate:string;
    endDate:string;
    degree:string;
    major:string;
    description:string;
}


export interface Skill {
    id:number;
    name:string
    rating:number;
}