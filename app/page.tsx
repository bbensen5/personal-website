import Image from "next/image";

const sectionClass =
  "scroll-mt-24 bg-background px-6 py-20 text-foreground sm:px-10 lg:py-24";
const containerClass = "mx-auto flex w-full max-w-6xl flex-col";
const headingClass = "text-left text-3xl font-medium tracking-tight text-highlight sm:text-4xl";
const cardClass =
  "rounded-lg border border-foreground/15 bg-offset p-6 transition-colors hover:border-highlight";

const skills = [
  "Java",
  "Python",
  // "TypeScript",
  // "JavaScript",
  // "Next.js",
  // "React",
  // "Tailwind CSS",
  // "HTML",
  // "CSS",
  "GitHub",
  "VS Code",
  "Pandas",
  "Vercel",
  "BeautifulSoup",
  // "AI tools",
  "Data visualization",
  // "Math",
];

const projects = [
  {
    title: "Air Pollution and Electric Vehicles",
    image: "/liquid-metal.png",
    alt: "Abstract liquid metal project preview",
    description:
      "A research project analyzing how EV sales, GDP, and other factors relate to air pollution and CO2 emissions across countries.",
    tags: ["Python", "Pandas", "GeoPandas", "Matplotlib", "BeautifulSoup"],
  },
  {
    title: "Personal Portfolio Website",
    image: "/window.svg",
    alt: "Portfolio project preview icon",
    description:
      "This site, built with Next.js and Tailwind CSS to showcase my education, projects, skills, and professional interests.",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Coursework Projects",
    image: "/globe.svg",
    alt: "Coursework project preview icon",
    description:
      "A space for class projects, labs, and programming assignments that show my growth in CS fundamentals.",
    tags: ["Java", "Python", "Data structures", "Systems"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main
        id="top"
        className="flex min-h-screen bg-cover bg-center px-6 pt-28 pb-16 sm:px-10 lg:pt-24"
        style={{ backgroundImage: "url(/liquid-metal-dark.png)" }}
      >
        <section className="mx-auto flex w-full max-w-7xl -translate-y-4 flex-col items-center justify-center gap-14 sm:flex-row sm:items-center lg:-translate-y-8 lg:gap-24">
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/slackpfp.JPG"
              alt="Bianca's face"
              width={400}
              height={400}
              priority
              className="rounded-lg border border-foreground/20"
            />
            <div className="flex items-center gap-8">
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground text-foreground transition-colors hover:bg-highlight hover:text-background"
                href="https://github.com/bbensen5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.91c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.96c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.14 10.14 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground text-foreground transition-colors hover:bg-highlight hover:text-background"
                href="https://www.linkedin.com/in/bianca-bensen-897b593b5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.75H3.62v11.13h3.32V8.75ZM5.28 4.12a1.92 1.92 0 1 0 0 3.84 1.92 1.92 0 0 0 0-3.84ZM20.38 13.79c0-3.05-1.63-5.02-4.29-5.02-1.78 0-2.58.98-3.02 1.67V8.75H9.88v11.13h3.32v-5.5c0-1.45.28-2.86 2.07-2.86 1.77 0 1.79 1.66 1.79 2.95v5.41h3.32v-6.09Z" />
                </svg>
              </a>
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground text-foreground transition-colors hover:bg-highlight hover:text-background"
                href="mailto:bianca06162007@gmail.com"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex max-w-4xl flex-1 flex-col items-start gap-6 text-left">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/70">
              CS student and builder
            </p>
            <h1 className="text-4xl font-medium leading-tight tracking-tight text-highlight sm:text-5xl lg:text-6xl">
              Hello, I&apos;m Bianca Bensen
            </h1>
            <p className="max-w-2xl text-xl font-light leading-relaxed text-foreground/85 sm:text-2xl">
              Computer Science student at the University of Washington, building
              projects and exploring how software and AI can solve real problems.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-highlight px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground"
                href="#contact"
              >
                Contact
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-foreground/40 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-highlight hover:text-highlight"
                href="/resume-biancabensen.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <section id="about" className={sectionClass}>
        <div className={`${containerClass} gap-8`}>
          <h2 className={headingClass}>About</h2>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <p className="text-left text-lg font-light leading-8 text-foreground/85">
              I&apos;m a second year student at the University of Washington in
              Seattle, majoring in Computer Science with a minor in Math. I have
              several years of experience with Java and Python and am currently
              building my portfolio through personal projects. My goal is to gain
              experience in software development and learn how AI is used on the
              job. In my free time, I enjoy swimming and playing piano,
              especially classical music.
            </p>
            <article className={cardClass}>
              <h3 className="mb-5 text-xl font-medium text-highlight">Education</h3>
              <dl className="grid gap-4 text-sm">
                <div>
                  <dt className="text-foreground/60">School</dt>
                  <dd className="text-base">University of Washington</dd>
                </div>
                <div>
                  <dt className="text-foreground/60">Location</dt>
                  <dd className="text-base">Seattle, WA</dd>
                </div>
                <div>
                  <dt className="text-foreground/60">Major</dt>
                  <dd className="text-base">Computer Science</dd>
                </div>
                <div>
                  <dt className="text-foreground/60">Minor</dt>
                  <dd className="text-base">Mathematics</dd>
                </div>
                <div>
                  <dt className="text-foreground/60">Expected Graduation</dt>
                  <dd className="text-base">2029</dd>
                </div>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section id="skills" className={sectionClass}>
        <div className={`${containerClass} gap-10`}>
          <h2 className={headingClass}>Skills</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <article
                key={skill}
                className="flex aspect-square flex-col items-center justify-center gap-5 rounded-lg border border-foreground/15 bg-offset p-5 text-center transition-colors hover:border-highlight"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-dashed border-foreground/25 text-xs text-foreground/50">
                  Logo
                </div>
                <h3 className="text-lg font-medium">{skill}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={sectionClass}>
        <div className={`${containerClass} gap-10`}>
          <h2 className={headingClass}>Projects</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className={`${cardClass} overflow-hidden p-0`}>
                <div className="flex h-48 items-center justify-center bg-background">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={520}
                    height={320}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <p className="text-sm font-light leading-6 text-foreground/80">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-background px-3 py-1 text-xs text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className={sectionClass}>
        <div className={`${containerClass} gap-10`}>
          <h2 className={headingClass}>Experience</h2>
          <div className="flex flex-col gap-16 lg:gap-20">
            <article className="grid grid-cols-1 gap-4 sm:grid-cols-[11rem_1fr] sm:gap-10 lg:grid-cols-[13rem_1fr] lg:gap-14">
              <p className="text-base font-light leading-7 text-foreground/70 sm:text-left">
                June 2021 - Sept 2024
              </p>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-medium">Volunteer</h3>
                <p className="text-base font-normal">Woodinville Farmers Market</p>
                <ul className="max-w-3xl list-disc space-y-2 pl-5 text-base font-light leading-6">
                  <li>Transferred and unloaded supplies for vendors</li>
                  <li>Set up tents, booths, and flags</li>
                  <li>Managed the information booth and kids booth</li>
                  <li>Set up games for children and assisted them with activities</li>
                </ul>
              </div>
            </article>
            <article className="grid grid-cols-1 gap-4 sm:grid-cols-[11rem_1fr] sm:gap-10 lg:grid-cols-[13rem_1fr] lg:gap-14">
              <p className="text-base font-light leading-7 text-foreground/70 sm:text-left">
                May 2023 - Aug 2023
              </p>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-medium">Swim Instructor & Lifeguard</h3>
                <p className="text-base font-normal">Gold&apos;s Gym, Woodinville</p>
                <ul className="max-w-3xl list-disc space-y-2 pl-5 text-base font-light leading-6">
                  <li>
                    Taught swim lessons in small groups for kids ages 5-13 and
                    worked one-on-one with them to improve their swimming
                    abilities and technique
                  </li>
                  <li>Assessed students and wrote evaluation reports</li>
                  <li>Conducted routine maintenance checks on the pool</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className={sectionClass}>
        <div className={`${containerClass} gap-8`}>
          <h2 className={headingClass}>Contact</h2>
          <p className="max-w-3xl text-lg font-light leading-8 text-foreground/85">
            I'm open to internships, learning opportunities, collaborations, or just chatting.
          </p>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <form
              className="flex flex-col gap-5 rounded-lg border border-foreground/15 bg-offset p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
              action="mailto:bianca06162007@gmail.com"
              method="post"
              encType="text/plain"
            >
              {/* <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/55">
                  Message
                </p>
                <h3 className="mt-2 text-xl font-medium text-highlight">
                  Send me an email
                </h3>
              </div> */}
              <label className="flex flex-col gap-2 text-sm text-foreground/70">
                Name
                <input
                  className="rounded-md border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-highlight"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-foreground/70">
                Email
                <input
                  className="rounded-md border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-highlight"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-foreground/70">
                Message
                <textarea
                  className="min-h-36 resize-y rounded-md border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-highlight"
                  name="message"
                  placeholder="Write your message here..."
                  required
                />
              </label>
              <button
                className="inline-flex w-fit cursor-pointer rounded-full bg-highlight px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground"
                type="submit"
              >
                Send Message
              </button>
            </form>
            <aside className="flex flex-col gap-5 rounded-lg border border-foreground/15 bg-offset p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
              <div>
                <h3 className="mt-2 text-xl font-medium text-highlight">
                  Other ways to connect
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <span className="block text-sm text-foreground/55">Email</span>
                <a
                  className="px-4 py-3 text-xs"
                  href="mailto:bianca06162007@gmail.com"
                >
                  bianca06162007@gmail.com
                </a>
                <span className="block text-sm text-foreground/55">GitHub</span>
                <a
                  className="px-4 py-3 text-xs"
                  href="https://github.com/bbensen5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View profile
                </a>
                <span className="block text-sm text-foreground/55">LinkedIn</span>
                <a
                  className="px-4 py-3 text-xs"
                  href="https://www.linkedin.com/in/bianca-bensen-897b593b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <footer className="border-t border-foreground/10 bg-background px-6 py-8 text-foreground/65 sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright statement goes here.</p>
          <p>Built by Bianca Bensen.</p>
        </div>
      </footer>
    </div>
  );
}
