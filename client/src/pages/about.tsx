import DefaultLayout from "@/layouts/default";
import { Card, CardBody, Image, CardHeader, Divider } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardBody className="flex flex-col md:flex-row items-center gap-6">
              <Image alt="Profile Picture" src="/gradpic.jpg" loading="eager" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Chris Ray</h2>
                <p className="text-lg mb-2">Software Engineer</p>
                <p className="text-default-500">
                  Detail-oriented Computer Science student with experience in
                  full-stack development, specializing in modern JavaScript
                  frameworks and RESTful API design. Proven ability to
                  contribute in Agile teams through internships and academic
                  projects, with hands-on experience using React, Vue.js,
                  Express.js, and PostgreSQL. Strong leadership background
                  through Hack K-State and ACM, with a passion for building
                  reliable software and supporting collaborative technical
                  communities.
                </p>
              </div>
            </CardBody>
          </Card>

          <Card className="mb-8">
            <CardHeader className="flex gap-3">
              <Icon icon="lucide:briefcase" className="text-xl" />
              <div className="flex flex-col">
                <p className="text-md">Experience</p>
                <p className="text-small text-default-500">
                  My professional journey
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">
                  Student Software Engineer
                </h3>
                <p className="text-default-500">
                  Kansas State University • Manhattan, KS
                </p>
                <p className="text-sm text-default-400">
                  August 2024 – May 2025
                </p>
                <ul className="list-disc mt-2 text-default-500 ml-4">
                  <li>
                    Contributed to a 4-person Agile development team to develop
                    a web application for managing the K-State Cyber-Pipeline
                    program.
                  </li>
                  <li>
                    Built and tested over 15 front-end components using Vue.js
                    and the Vitest testing library.
                  </li>
                  <li>
                    Built REST APIs with Express.js and PostgreSQL to handle
                    CRUD operations for 11 different entities, including
                    cohorts, students, teachers, and profiles, enabling seamless
                    data interaction from the back-end to the front-end Pinia
                    stores.
                  </li>
                </ul>
              </div>
              <Divider className="mb-4" />
              <div>
                <h3 className="text-xl font-semibold">
                  Software Engineering Intern
                </h3>
                <p className="text-default-500">Koch • Wichita, KS</p>
                <p className="text-sm text-default-400">
                  May 2023 – August 2023
                </p>
                <ul className="list-disc ml-4 mt-2 text-default-500">
                  <li>
                    Collaborated as part of a 6-person development team
                    following Agile practices using Azure DevOps for sprint
                    planning and progress tracking to modernize and enhance the
                    company’s website with React and TypeScript, improving both
                    visual design and functionality.
                  </li>
                  <li>
                    Implemented approximately five permit-related desktop views,
                    including a complex, custom-styled form built with React
                    Hook Form and Material UI components.
                  </li>
                  <li>
                    Engaged in cross-team intern sessions via Microsoft Teams,
                    collaborating with over 17 interns to share project updates
                    and foster teamwork.
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>

          <Card className="mb-8">
            <CardHeader className="flex gap-3">
              <Icon icon="lucide:folder-open" className="text-xl" />
              <div className="flex flex-col">
                <p className="text-md">Projects</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <h3 className="text-lg font-semibold mb-1">
                Mock Library SQL Project
              </h3>
              <ul className="list-disc list-inside text-default-500 mb-4">
                <li>
                  Created a UI for a mock library using XAML in a C# .NET
                  desktop application, consisting of around 10 components.
                </li>
                <li>
                  Wrote and optimized 9 SQL queries to manage and retrieve mock
                  data.
                </li>
                <li>
                  Led front-end and core database development, including search
                  and CRUD operations for patrons; gained hands-on experience
                  with SQL and C# .NET in a team setting.
                </li>
              </ul>
              <h3 className="text-lg font-semibold mb-1">Neo4j Fundamentals</h3>
              <ul className="list-disc list-inside text-default-500">
                <li>
                  Earned certificates in four Neo4j courses: Cypher
                  Fundamentals, CSV Data Import, Graph Data Modeling, and Neo4j
                  Fundamentals.
                </li>
                <li>
                  Completed a course on the fundamentals of creating a NEO4j
                  graph database, learning when to use one and how to construct
                  one.
                </li>
                <li>
                  Learned the basics of the cypher querying language, such as
                  creating, retrieving, and editing nodes and connections.
                </li>
              </ul>
            </CardBody>
          </Card>

          <Card className="mb-8">
            <CardHeader className="flex gap-3">
              <Icon icon="lucide:users" className="text-xl" />
              <div className="flex flex-col">
                <p className="text-md">Involvement</p>
                <p className="text-small text-default-500">
                  Leadership & Organizations
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <h3 className="text-lg font-semibold mb-1">
                President - Hack K-State
              </h3>
              <p className="text-default-500">March 2022 - May 2024</p>
              <ul className="list-disc list-inside text-default-500 mb-4">
                <li>
                  Managed outreach and logistics for Hack K-State’s annual
                  hackathon, securing 5 sponsors and coordinating participation
                  of over 200 attendees.
                </li>
                <li>
                  Led an 8-person planning team, delegating tasks and tracking
                  deadlines to ensure successful event execution.
                </li>
                <li>
                  Utilized a dashboard to monitor participant registrations and
                  responses, enabling data-driven decisions to improve event
                  planning and outreach efforts.
                </li>
              </ul>
              <h3 className="text-lg font-semibold mb-1">
                Open House Chair - ACM
              </h3>
              <p className="text-default-500">May 2022 - May 2024</p>
              <ul className="list-disc list-inside text-default-500">
                <li>
                  Designed and assembled 4 interactive displays for the Computer
                  Science and Cybersecurity majors, while coordinating outreach
                  to 5 additional student clubs to participate and enhance their
                  presentations.
                </li>
                <li>
                  Oversaw scheduling for approximately 20 volunteers, ensuring
                  consistent booth coverage throughout the day and smooth event
                  operations.
                </li>
                <li>
                  Collaborated with faculty and ACM leadership, gathered
                  post-event feedback, and organized reusable templates and
                  materials for future chairs.
                </li>
              </ul>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="flex gap-3">
              <Icon icon="lucide:code" className="text-xl" />
              <div className="flex flex-col">
                <p className="text-md">Skills</p>
                <p className="text-small text-default-500">
                  My technical toolkit
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Tools & Platforms</h4>
                  <ul className="list-disc list-inside text-default-500">
                    <li>GitHub</li>
                    <li>Visual Studio Code</li>
                    <li>Microsoft Teams</li>
                    <li>Azure DevOps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Languages & Frameworks</h4>
                  <div className="grid grid-cols-2 gap-4 text-default-500">
                    <ul className="list-disc list-inside">
                      <li>TypeScript</li>
                      <li>React</li>
                      <li>Vue</li>
                      <li>Python</li>
                      <li>SQL</li>
                      <li>C#</li>
                    </ul>
                    <ul className="list-disc list-inside">
                      <li>C</li>
                      <li>C++</li>
                      <li>Cypher</li>
                      <li>Razor Pages</li>
                      <li>Vitest</li>
                      <li>Neo4j</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
