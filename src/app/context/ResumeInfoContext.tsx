import { createContext } from "react";
import { ResumeInfo } from "../dashboard/resume/model/ResumeInfo";

export const ResumeInfoContext=createContext<ResumeInfo| null>(null);