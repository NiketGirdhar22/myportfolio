// app/resume/page.tsx
import Image from 'next/image';
import authorImage from '@/public/images/authors/niket.png';
import { Button } from '@/components/ui/button';
import RedirectButton from '@/components/RedirectButton';
import PageShell from '@/components/page-shell'

export default function Resume() {

  return (
    <PageShell
      eyebrow='Profile'
      title='Resume'
      description='A quick, easier-to-use overview of my background, skills, and resume link.'
    >
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
          <div className="content-panel">
            <h2 className="title no-underline">About me</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              A highly motivated and skilled Computer and Electronics Engineering
              student with a solid foundation in both hardware and software systems.
              Demonstrated expertise in web development, and programming, coupled with
              a strong passion for innovative technological solutions. Experienced in
              managing promotional campaigns for college clubs and developing functional,
              service-oriented websites. Recognized for exceptional problem-solving abilities,
              meticulous attention to detail, and a collaborative approach to cross-disciplinary projects.
            </p>
          </div>
          <div className="media-panel max-w-[260px]">
            <Image
              className="aspect-[4/5] rounded-[1.5rem] object-cover"
              src={authorImage}
              alt="Niket Girdhar"
              width={260}
              height={325}
              priority
            />
          </div>
        </section>

        <section className="content-panel mt-8">
          <h2 className="title no-underline">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Python",
              "Generative AI",
              "LLMs",
              "Dataset Generation",
              "Supervised Learning",
              "Fine-tuning",
              "Reinforcement Learning",
              "Prompt Engineering",
              "RestAPI",
              "API Testing - Postman",
              "Data Visualization",
              "C/C++",
              "Java",
              "HTML",
              "CSS",
              "Version Control - Git",
            ].map(skill => (
              <Button
                key={skill}
                variant="outline"
                className="border-border/60 bg-background/80"
              >
                {skill}
              </Button>
            ))}
          </div>
        </section>

        <footer className="content-panel mt-8">
          <h2 className="title no-underline">Links</h2>
          <div className="mt-6">
            <RedirectButton
              redirectUrl="https://drive.google.com/file/d/1wUPKCJQYg7cYeecF-osO_QM_TJYlz0gl/view?usp=share_link"
              label="View my Resume"
            />
          </div>
        </footer>
    </PageShell>
  );
}
