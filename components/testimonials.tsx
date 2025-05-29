import React from "react";

export interface Testimonial {
  slug: string;
  name: string;
  title: string;
  date: string;
  content: string;
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <ul className="flex flex-col gap-8 w-full">
      {testimonials.map(({ slug, name, title, date, content }) => (
        <li
          key={slug}
          className="w-full rounded-xl border border-border bg-background p-6 shadow-sm transition-transform duration-300 transform hover:scale-105 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="mt-2 whitespace-pre-line text-gray-700 dark:text-gray-300">
            {content}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            {new Date(date).toLocaleDateString()}
          </p>
        </li>
      ))}
    </ul>
  );
}
