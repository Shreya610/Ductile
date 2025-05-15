import { section } from "./section"

export interface engineerCard {
    heading1: string
    heading2?: string
    paragraph: string
    img: string
    details: string[]
    subDetails?: section[]
}