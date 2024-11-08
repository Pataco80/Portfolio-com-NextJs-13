// Imports GraphCMS types
import { RichTextContent } from '@graphcms/rich-text-types'

// Types Props
export type knownTech = {
  iconSvg: string,
  name: string,
  startDate:string
}

export type ProjectSection = {
  title:string,
  image:{
    url:string,
    textAlt:string
  }
}

// Export global projects types
export type Project = {
  slug: string,
  title:string,
  thumbnail: {
    url:string,
    textAlt:string
  },
  shortDescription: string,
  description: {
    raw:RichTextContent
  },
  liveProjectUrl?:string,
  gitHubUrl?:string,
  technologies: knownTech[],
  pageThumbnail: {
    url:string,
    textAlt: string,
  },
  sections: ProjectSection[],
}