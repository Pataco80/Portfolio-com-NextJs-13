import { ProjectDetails } from '@/features/projects-details/project-details'
import { ProjectSections } from '@/features/projects-details/project-sections'
import { CircuitDivider } from '@/components/shared/circuit-divider'
import { ProjectPageData } from '@/types/page-info'
import { fetchHygraphQuery } from '@/lib/fetch-hygraph-query'
import type { Metadata } from 'next'
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

export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {
	const { slug } = await params
	const { project } = await getProjectDetails(slug)
	if (!project) return { title: 'Projet introuvable — DWDeveloppement' }
	return {
		title: `${project.title} — DWDeveloppement`,
		description: project.shortDescription,
	}
}

export default async function Project({ params }: ProjectProps) {
	const { slug } = await params
	const { project } = await getProjectDetails(slug)
	if (!project) notFound()
	return (
		<>
			<ProjectDetails project={project} />
			<CircuitDivider variant='hero' animate />
			<ProjectSections sections={project.sections} />
		</>
	)
}
