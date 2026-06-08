import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'
import SectionShell from '@/components/section-shell'

export default async function RecentProjects() {
  const projects = await getProjects(4)

  const recentProjects = projects.slice(0, 2)
  return (
    <SectionShell
      eyebrow='Builds'
      title='Recent projects'
      description='A more visual snapshot of the systems, tools, and interfaces I have been shipping.'
      href='/projects'
      linkLabel='All projects'
    >
      <Projects projects={recentProjects} />
    </SectionShell>
  )
}
