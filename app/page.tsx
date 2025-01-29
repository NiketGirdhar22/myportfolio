import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import RecentCertificates from '@/components/recent-certificates'
import RecentExperiences from '@/components/recent-experiences'
import RecentPatents from '@/components/recent-patents'

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />
        <RecentProjects />
        <RecentCertificates />
        <RecentExperiences />
        <RecentPatents />

      </div>
    </section>
  )
}
