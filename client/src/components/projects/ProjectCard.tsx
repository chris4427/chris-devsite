import React from "react";
import { Button, Card, CardBody, CardFooter, Chip, Link } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

type ProjectCardProps = {
  id?: number;
  title: string;
  description: string;
  github: string;
  demo: string;
  languages: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  github,
  demo,
  languages,
}) => {
  const languageList = languages?.split(",").map((lang) => lang.trim());

  const languageColors: Record<string, string> = {
    // First project languages
    Vue: "bg-green-500 text-white", // Vue green
    JavaScript: "bg-yellow-400 text-black", // JS yellow
    Express: "bg-gray-800 text-white", // Dark gray for Express
    PostgreSQL: "bg-blue-700 text-white", // PostgreSQL blue
    Docker: "bg-blue-400 text-white", // Docker blue

    // Second project languages
    "C#": "bg-purple-700 text-white", // C# purple
    ".NET": "bg-indigo-600 text-white", // .NET indigo
    XAML: "bg-cyan-500 text-white", // Cyan-ish for XAML
    SQL: "bg-orange-500 text-white", // Orange for SQL
    "Microsoft SQL Server": "bg-red-600 text-white", // MS SQL red

    // Third project languages (some repeated)
    "Razor Pages": "bg-blue-600 text-white", // Blue for Razor Pages

    // fallback for any others
    default: "bg-gray-300 text-gray-800",
  };

  return (
    <Card className="max-w-[400px]">
      <CardBody className="pt-2 pb-4 px-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex gap-1">
            <Button
              as={Link}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              variant="flat"
              size="sm"
              isIconOnly
            >
              <Icon icon="lucide:github" className="w-4 h-4" />
            </Button>
            {demo !== "n/a" && (
              <Button
                as={Link}
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                color="secondary"
                variant="flat"
                size="sm"
                isIconOnly
              >
                <Icon icon="lucide:external-link" className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
        <p className="text-default-500">{description}</p>
      </CardBody>
      <CardFooter className="flex gap-1">
        {languageList?.map((lang) => (
          <Chip
            key={lang}
            className={`text-xs font-semibold rounded-full ${
              languageColors[lang] || "bg-gray-300 text-gray-800"
            }`}
          >
            {lang}
          </Chip>
        ))}
      </CardFooter>
    </Card>
  );
};
