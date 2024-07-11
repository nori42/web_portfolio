import { RefObject } from "react"
export type PageContentRef = {
    about:RefObject<HTMLDivElement>,
    skills:RefObject<HTMLDivElement>,
    projects:RefObject<HTMLDivElement>,
    experiences:RefObject<HTMLDivElement>,
    resume:RefObject<HTMLDivElement>
}