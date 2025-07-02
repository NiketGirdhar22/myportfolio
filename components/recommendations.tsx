import React from "react";
import RedirectButton from '@/components/RedirectButton';

export interface Recommendation {
  slug: string;
  name: string;
  title: string;
  date: string;
  content: string;
  contact: string;
}

export default function Recommendations({ recommendations }: { recommendations: Recommendation[] }) {
  return (
    <ul className="flex flex-col gap-8 w-full">
      {recommendations.map(({ slug, name, title, date, content, contact }) => (
        <li
          key={slug}
          className="w-full rounded-xl border border-border bg-background p-6 shadow-sm transition-transform duration-300 transform hover:scale-105 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="mt-2 whitespace-pre-line text-gray-700 dark:text-gray-300">
            {content}
          </p>
          <div className="mt-4 flex justify-between items-center text-xs text-muted-foreground">
            <span>
              {new Date(date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </span>
            <RedirectButton redirectUrl={contact} label="Contact Recommender" />
          </div>
        </li>
      ))}
    </ul>
  );
}