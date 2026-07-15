import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import RecentCertificates from '@/components/recent-certificates'
import RecentExperiences from '@/components/recent-experiences'
import RecentPublications from '@/components/recent-publications'
import RecentEvents from '@/components/recent-events'
import RecentRecommendations from '@/components/recent-recommendations'

export default function Home() {
  return (
    <section className='page-frame'>
      <div className='container max-w-6xl'>
        <Intro />

        <div className='mt-16'>
          <RecentProjects />
          <RecentPosts />
          <RecentExperiences />
          <RecentRecommendations />
          <RecentCertificates />
          <RecentEvents />
          <RecentPublications />
        </div>
      </div>
    </section>
  )
}
