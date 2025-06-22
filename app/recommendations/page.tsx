import Testimonials from '@/components/testimonials';
import { getAllTestimonials } from '@/lib/testimonials';

export default function Resume() {
  const testimonials = getAllTestimonials();

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">

        <section className="mt-12">
          <h2 className="title no-underline">Recommendations</h2>
          <div className="mt-6">
            <Testimonials testimonials={testimonials} />
          </div>
        </section>

      </div>
    </section>
  );
}
