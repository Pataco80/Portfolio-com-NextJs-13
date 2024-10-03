import React from 'react'
import { PageIntroduction } from '@/app/components/PageIntroduction'
import { ProjectsList } from '@/app/components/pages/projects/ProjectsList'

export default function Projects() {
  return (
    <>
      <PageIntroduction />
      <ProjectsList />
    </>
  )
}
