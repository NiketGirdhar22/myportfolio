import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Recommendation = {
  slug: string;
  name: string;
  title: string;
  date: string;
  content: string;
  contact: string;
};

const recommendationsDirectory = path.join(process.cwd(), 'content/recommendations');

export function getAllRecommendations(): Recommendation[] {
  const files = fs.readdirSync(recommendationsDirectory);

  const recommendations = files.map((filename) => {
    const filePath = path.join(recommendationsDirectory, filename);
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

  return recommendations.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
