// Import plugins types
import { RichTextContent } from '@graphcms/rich-text-types'

// Import files from types
import { knownTech, Project } from '@/app/types/projects'
import { WorkExperience } from '@/app/types/works-experience'

// Types
export type Social = {
  iconSvg:string,
  url:string
}

export type ProjectsPageData = {
  projects:Project[]
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
  highlightProjects: Project[]
  workExperience:WorkExperience[]
}

// Export global page types
export type HomePageData = {
  page:HomePageInfo
}