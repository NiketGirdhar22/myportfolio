import ProjectsWithSearch from '@/components/projects-with-search'
import { getProjects } from '@/lib/projects'
import PageShell from '@/components/page-shell'


export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <PageShell
      eyebrow='Project archive'
      title='Projects'
      description='A more visual browse through shipped work, experiments, and practical builds.'
    >
        <ProjectsWithSearch projects={projects} />
    </PageShell>
  )
}
