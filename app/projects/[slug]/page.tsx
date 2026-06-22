import { ProjectDetails } from '@/pages/projects-details/project-details'
import { ProjectSections } from '@/pages/projects-details/project-sections'
import { ProjectPageData } from '@/types/page-info'
import { fetchHygraphQuery } from '@/lib/fetch-hygraph-query'
//import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type ProjectProps = {
  params: Promise<{
    slug: string
  }>
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery {
    project(where: {slug: "${slug}"}) {
    pageThumbnail {
      url
    }
    thumbnail {
      url
    }
    sections {
      title
      image {
        url
        textAlt
      }
    }
    title
    shortDescription
    description {
      raw
      text
    }
    technologies {
      name
    }
    liveProjectUrl
    githubUrl
  }
}
  `
  const data = fetchHygraphQuery<ProjectPageData>(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )

  return data
}

export default async function Project({ params }: ProjectProps) {
  const { slug } = await params
  const { project } = await getProjectDetails(slug)
  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections}/>
    </>
  )
}


