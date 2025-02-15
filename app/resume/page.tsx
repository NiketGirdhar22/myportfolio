import { Button } from '@/components/ui/button'
import RedirectButton from '@/components/RedirectButton'
import Image from 'next/image'
import authorImage from '@/public/images/authors/niket.png'

export default function Resume() {
  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">

    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>About Me</h1>
        <p className='mt-3 font-light text-muted-foreground text-justify'>
        A highly motivated and skilled Computer and Electronics Engineering student with a solid foundation in both hardware and software systems. Demonstrated expertise in web development, and programming, coupled with a strong passion for innovative technological solutions. Experienced in managing promotional campaigns for collage clubs and developing functional, service-oriented websites. Recognized for exceptional problem-solving abilities, meticulous attention to detail, and a collaborative approach to cross-disciplinary projects.
        </p>
      </div>
      <div className='relative'>
        <Image
            className='flex-1 rounded-lg grayscale'
            src={authorImage}
            alt='Niket Girdhar'
            width={175}
            height={175}
            priority
        />
      </div>
    </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              Python
            </Button>
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              Generative AI
            </Button>
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              LLMs
            </Button>
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              Prompt Engineering
            </Button>
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              RestAPI
            </Button>
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              API Testing - Postman
            </Button>
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              LLMs
            </Button>
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              Data Visualization
            </Button>
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              C/C++
            </Button>
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              Java
            </Button>
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              HTML
            </Button>
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              CSS
            </Button>
            <Button
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md shadow-neutral-300 dark:shadow-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              variant="outline"
            >
              Version Control - Git
            </Button>
          </div>
        </section>

        <footer className="mt-16">
          <h2 className="text-2xl font-semibold">Links</h2>
          <div className="mt-4">
            <RedirectButton redirectUrl="https://drive.google.com/file/d/1ASB7nbAKHjHzvmSYdZbjLEw0vCSBkW7f/view" label="View my CV" />
          </div>
        </footer>
      </div>
    </section>
  )
}
