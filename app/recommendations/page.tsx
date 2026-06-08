import Recommendations from '@/components/recommendations';
import { getAllRecommendations } from '@/lib/recommendations';
import PageShell from '@/components/page-shell'

export default function Resume() {
  const recommendations = getAllRecommendations();

  return (
    <PageShell
      eyebrow='Testimonials'
      title='Recommendations'
      description='What collaborators and mentors have said, presented in a cleaner, more readable format.'
    >
      <Recommendations recommendations={recommendations} />
    </PageShell>
  );
}
