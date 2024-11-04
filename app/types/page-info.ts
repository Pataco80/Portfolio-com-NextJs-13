import {knownTech, Project} from '@/app/types/projects'
import { RichTextContent } from '@graphcms/rich-text-types'
export type Social = {
  iconSvg:string,
  url:string
}

export type HomePageInfo = {
  introduction: {
    raw:RichTextContent
  }
  technologies: knownTech[]
  profilePicture: {
    url: string,
    textAlt:string
  }
  socials: Social[]
  knownTechs: knownTech[]
  highlightProjects:Project[]
}

export type HomePageData = {
  page:HomePageInfo
}