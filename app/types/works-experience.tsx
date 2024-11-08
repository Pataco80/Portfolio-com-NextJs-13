// Import plugins types
import { RichTextContent } from '@graphcms/rich-text-types'

// Import files from types
import { knownTech } from '@/app/types/projects'


// Export global component types
export type WorkExperience = {
  compagnyName: string,
  compagnyUrl:string,
  compagnyLogo :{
    url: string,
    textAlt:string
  },
  role:string,
  description: {
    raw:RichTextContent
  }
  startDate:string,
  endDate:string,
  technologies: knownTech[]
}