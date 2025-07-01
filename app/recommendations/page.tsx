import Recommendations from '@/components/recommendations';
import { getAllRecommendations } from '@/lib/recommendations';

export default function Resume() {
  const recommendations = getAllRecommendations();

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">

        <section className="mt-12">
          <h2 className="title no-underline">Recommendations</h2>
          <div className="mt-6">
            <Recommendations recommendations={recommendations} />
          </div>
        </section>

      </div>
    </section>
  );
}
