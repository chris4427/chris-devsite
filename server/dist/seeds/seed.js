"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.blogPost.create({
        data: {
            title: "How I Built My Personal Developer Site",
            date: new Date("2025-07-03T16:21:00Z"),
            excerpt: "Documenting how I put together my developer portfolio site, from tech choices to challenges.",
            content: `<!DOCTYPE html>
                <html lang="en">

                <body>
                  <p className="flex gap-2 flex-wrap">
                    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
                    <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"
                      alt="Express"/>
                    <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"/>
                    <img src="https://img.shields.io/badge/Prisma-0C344B?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma"/>
                    <img src="https://img.shields.io/badge/Heroui-008080?style=for-the-badge&logo=heroui&logoColor=white" alt="Heroui"/>
                  </p>
                  <hr>

                  <h2>Why I Built the Site</h2>
                  <p>
                    Most of the work I have done before this project involved improving or adding features to existing websites and never
                    building one from the ground up. I wanted to change that. I was curious what it would be like to start with nothing
                    and make all the decisions myself.
                  </p>
                  <p>
                    I decided that a developer profile would be a good project to challenge myself with building and would be the
                    perfect website to work on while I am job hunting. I also thought it would be interesting to blog about the process,
                    so that anyone that sees this can better understand my process as a developer.
                  </p>
                  <p>
                    With that being said, I think it would be best to talk about the tech stack and how I decided on what frameworks and
                    libraries I should use.
                  </p>

                  <h2>Tech Stack</h2>

                  <h3>Frontend</h3>
                  <p>
                    I chose <strong>React</strong> for the frontend because I'm very familiar with it and enjoy working with the
                    ecosystem around it. The large community means there are tons of helpful libraries, tools, and resources available
                    when I get stuck or want to try something new.
                  </p>
                  <p>
                    I also used <strong>Vite</strong> as my build tool because it's less opinionated than frameworks like Next.js. This
                    gave me more flexibility to structure the project how I wanted and kept the setup simple and fast.
                  </p>
                  <p>
                    I use <strong>TanStack Query</strong> to manage server state and data fetching in my frontend. This allows
                    components to stay simple and focused without needing additional global state management libraries.
                  </p>
                  <p>Here’s a summary of the component libraries I considered before choosing to go with <strong>HeroUI</strong>:</p>
                  <ul>
                    <li><strong>MUI</strong>: Most familiar, but I found the default styling unattractive and not fitting the look I
                      wanted.</li>
                    <li><strong>Joy UI</strong>: Modern aesthetic but felt unstable due to frequent updates and missing some components
                      I needed.</li>
                    <li><strong>shadcn/ui</strong>: Difficult to import and out of the box styling didn’t meet my expectations.</li>
                  </ul>
                  <p>Choosing HeroUI allowed me to focus more on building functionality instead of styling from scratch.</p>

                  <h3>Backend</h3>
                  <p>
                    For the backend, I chose <strong>Express</strong> because my team used it during our senior project at K-State, and
                    I found it straightforward and pleasant to work with.
                  </p>
                  <p>
                    I decided to use <strong>Prisma</strong> as the ORM. During that senior project, we used <strong>Knex</strong>
                    because that was what our instructor recommended, but he mentioned he doesn’t prefer Knex anymore. Prisma seemed
                    like a popular and modern alternative, so I wanted to get experience with it.
                  </p>
                  <p>
                    For the database, I went with <strong>SQLite</strong>. It felt simpler than setting up a full SQL server since my
                    backend just needs to store some blog posts and cards linking to my projects. I don't feel that I need a SQL
                    database for that, but I figured it was a good opportunity to practice building a backend for my project.
                  </p>

                  <h2>Design Choices</h2>
                  <p>
                    Since I’m not a designer, I found the <strong>HeroUI Chat</strong> tool incredibly helpful during the design
                    process. It’s an AI chatbot built by the HeroUI team that understands their entire component library. You can
                    describe the sections you want such as a hero banner, blog layout, or about card and it generates a great looking UI
                    using their components. It saved me a lot of time and helped me stay consistent with modern design patterns without
                    needing deep UI/UX expertise.
                  </p>

                  <h3>HeroUI Design:</h3>
                  <img src="/blogImages/HeroUIMockup.png" alt="HeroUI Site Image">

                  <h3>My Finalish Design:</h3>
                  <img src="/blogImages/ChrisSite.png" alt="Chris Site Image">

                  <h2>Challenges & What I Learned</h2>
                  <p>
                    The biggest challenge I ran into was choosing a UI library that looked good out of the box but was also easy to
                    implement.
                  </p>
                  <p>
                    Outside of that, I didn’t face too many major roadblocks, but I did end up learning a lot, especially on the
                    backend.
                    Most of my past experience has been frontend-focused, so this project pushed me to get more comfortable with backend
                    development. I learned how to:
                  </p>
                  <ul>
                    <li>Set up an <strong>Express API</strong></li>
                    <li>Query a <strong>SQLite database</strong> using <strong>Prisma</strong></li>
                    <li>Use <strong>TanStack Query</strong> for efficient frontend data fetching and caching</li>
                  </ul>
                  <p>
                    By the time this project is finished, I hope to have a much stronger grasp of what it takes to <strong>build and
                      deploy a fullstack website from scratch</strong>—something I can confidently put in my portfolio and apply to
                    future projects.
                  </p>
                </body>

                </html>`,
        },
    });
    await prisma.project.createMany({
        data: [
            {
                title: "Cyber-Pipeline K-State",
                description: "An admin dashboard system built to manage participants in the K-State Cyber-Pipeline Program.",
                languages: "Vue, JavaScript, Express, PostgreSQL, Docker",
                github: "https://github.com/PatrickArnold02/cyber-pipeline",
                demo: "n/a",
            },
            {
                title: "SQL Mock Library",
                description: "A mock library management system built to practice writing and optimizing SQL queries.",
                languages: "C#, .NET, XAML, SQL, Microsoft SQL Server",
                github: "https://github.com/chris4427/LibraryDatabaseApplication",
                demo: "n/a",
            },
            {
                title: "DinoDiner POS and Website",
                description: "A point-of-sale system and website developed for a university OOP course project.",
                languages: "C#, .NET, XAML, Razor Pages",
                github: "https://github.com/chris4427/DinoDiner",
                demo: "n/a",
            },
        ],
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
