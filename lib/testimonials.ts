import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Testimonial = {
  slug: string;
  name: string;
  title: string;
  date: string;
  content: string;
  contact: string;
};

const testimonialsDirectory = path.join(process.cwd(), 'content/testimonials');

export function getAllTestimonials(): Testimonial[] {
  const files = fs.readdirSync(testimonialsDirectory);

  return files.map((filename) => {
    const filePath = path.join(testimonialsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx$/, ''),
      name: data.name,
      title: data.title,
      date: data.date,
      content,
      contact: data.contact || '',
    };
  });
}