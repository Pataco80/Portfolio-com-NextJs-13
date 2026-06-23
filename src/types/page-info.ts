// Import plugins types
import { RichTextContent } from '@graphcms/rich-text-types'

// Import files from types
import { knownTech, Project } from '@/types/projects'
import { WorkExperience } from '@/types/works-experience'

// Types
export type SurfaceTone = 'base' | 'sky950'

export type Social = {
  name:string,
  iconSvg:string,
  url:string
}

export type ProjectsPageData = {
  projects:Project[]
}

export type ProjectPageData = {
  project: Project
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
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
  workExperienceIntro: {
    raw:RichTextContent
  }
  workExperience:WorkExperience[]
}



// Export global page types
export type HomePageData = {
  page:HomePageInfo
}