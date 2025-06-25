import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import RecentCertificates from '@/components/recent-certificates'
import RecentExperiences from '@/components/recent-experiences'
import RecentPublications from '@/components/recent-publications'
import RecentEvents from '@/components/recent-events'

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />
        <RecentProjects />
        <RecentCertificates />
        <RecentExperiences />
        <RecentEvents />
        <RecentPublications />


      </div>
    </section>
  )
}
