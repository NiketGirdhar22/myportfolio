import Recommendations from '@/components/recommendations'
import SectionShell from '@/components/section-shell'
import { getAllRecommendations } from '@/lib/recommendations'

export default function RecentRecommendations() {
  const recommendations = getAllRecommendations().slice(0, 2)

  return (
    <SectionShell
      eyebrow='Testimonials'
      title='Recommendations'
      description='Notes from collaborators and mentors who have seen how I approach engineering, learning, and teamwork.'
      href='/recommendations'
      linkLabel='All recommendations'
    >
      <Recommendations recommendations={recommendations} />
    </SectionShell>
  )
}
