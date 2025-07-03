// components/blog-card.tsx
import React from "react";
import { Card, CardBody, CardFooter, Link, link } from "@heroui/react";
import clsx from "clsx";

type BlogCardProps = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
};

export const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <Card className="max-w-[400px]">
      <CardBody>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-default-500">{excerpt}</p>
      </CardBody>
      <CardFooter className="flex justify-between">
        <Link
          className={clsx(
            link({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium",
          )}
          color="foreground"
          href={`/blog/${id}`}
        >
          Read More
        </Link>
        <span className="text-default-400">{formattedDate}</span>
      </CardFooter>
    </Card>
  );
};
