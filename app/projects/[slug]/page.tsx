import { ProjectDetails } from '@/app/components/pages/projects/ProjectDetails'
import { ProjectSections } from '@/app/components/pages/projects/ProjectSections'
import { ProjectPageData } from '@/app/types/page-info'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query'
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
  console.log(project)
  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections}/>
    </>
  )
}


