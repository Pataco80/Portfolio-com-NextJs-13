import { fetchHygraphQuery } from '@/lib/fetch-hygraph-query'
import { HomePageData, ProjectsPageData } from '@/types/page-info'

// Query de la page d'accueil
export const getHomePageData = async (): Promise<HomePageData> => {
	const query = `query MyQuery {
  page(where: {slug: "home"}) {
    title
    slug
    introduction {
      raw
    }
    socials {
      name
      iconSvg
      url
    }
    technologies {
      name
    }
    profilePicture {
      url
      textAlt
    }
    knownTechs {
      name
      iconSvg
      startDate
    }
    highlightProjects {
      title
      slug
      thumbnail{
        url
        textAlt
      }
      shortDescription
      technologies{
        name
      }
    }
    workExperienceIntro{
      raw
    }
    workExperience {
      compagnyName
      compagnyUrl
      compagnyLogo{
        url
        textAlt
      }
      description{
        raw
      }
      startDate
      endDate
      technologies{
        name
      }
    }
  }
}`
	return fetchHygraphQuery(query)
}

// Query de la page projets (liste)
export const getProjectsPageData = async (): Promise<ProjectsPageData> => {
	const query = `
    query ProjectsQuery {
    projects {
      title
      slug
      shortDescription
      thumbnail {
        url
        textAlt
      }
      technologies {
        name
      }
    }
  }
  `
	return fetchHygraphQuery(query)
}
