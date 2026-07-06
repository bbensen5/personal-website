import Image from "next/image";

const sectionClass =
  "scroll-mt-24 bg-background py-28 text-foreground sm:py-32 lg:py-36";
const containerClass =
  "mx-auto flex w-full max-w-6xl flex-col";
const headingClass =
  "text-left text-5xl font-medium tracking-tight text-highlight";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className={`${containerClass} gap-12 bg-background`}>
        <section className="flex w-full flex-col items-center justify-center gap-14 py-16 sm:flex-row sm:items-center lg:gap-24 lg:py-24">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/slackpfp.JPG"
              alt="Bianca's face"
              width={400}
              height={400}
              priority
            />
            <div className="flex items-center gap-8">
              <a
                className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground text-foreground transition-colors hover:bg-foreground hover:text-background"
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground text-foreground transition-colors hover:bg-foreground hover:text-background"
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground text-foreground transition-colors hover:bg-foreground hover:text-background"
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
          <div className="flex max-w-4xl flex-1 flex-col items-start gap-6 pt-4 text-left sm:pt-8">
            <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl text-highlight">
              Hello, I'm Bianca Bensen
            </h1>
            <p className="max-w-2xl text-xl font-light leading-relaxed text-foreground/80 sm:text-2xl">
              Computer Science student at the University of Washington, building
              projects and exploring how software and AI can solve real problems.
            </p>
          </div>
        </section>
      </main>
    
      <section id="about" className={sectionClass}>
        <div className={`${containerClass} gap-8`}>
          <h2 className={headingClass}>About</h2>
          <p className="max-w-3xl text-left text-xl font-light leading-8">
            I'm a second year student at the University of Washington in Seattle, majoring in Computer Science with a minor in Math.
            I am currently working on building my portfolio and having fun with creating personal projects.
            My goal is to gain experience working in the software development industry and learn about how AI is used on the job.
            I have been interested in programming since I started high school, and with the rise of AI, it opens up a whole new frontier for me to explore.
            In my free time, I enjoy swimming and playing piano, especially classical music.
          </p>
        </div>
      </section>
      
      <section id="education" className={sectionClass}>
        <div className={`${containerClass} gap-10`}>
          <h2 className={headingClass}>Education</h2>
          <div className="flex flex-col gap-12">
            <article className="flex flex-col gap-2 border-l-2 border-foreground/20 pl-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-medium">
                  B.S. in Computer Science
                </h3>
                <p className="text-base font-light text-foreground/70">Expected 2029</p>
              </div>
              <p className="text-lg font-normal">
                University of Washington, Seattle
              </p>
              <p className="max-w-3xl text-lg font-light leading-8">
                Relevant coursework: Foundations of Computing, Intermediate
                Data Programming, Hardware/Software Interface
              </p>
            </article>
            <article className="flex flex-col gap-2 border-l-2 border-foreground/20 pl-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-medium">High School Diploma</h3>
                <p className="text-base font-light text-foreground/70">2021 – 2025</p>
              </div>
              <p className="text-lg font-normal">Woodinville High School</p>
            </article>
          </div>
        </div>
      </section>
      
      <section id="experience" className={sectionClass}>
        <div className={`${containerClass} gap-10`}>
          <h2 className={headingClass}>Experience</h2>
          <div className="flex flex-col gap-16 lg:gap-20">
            <article className="grid grid-cols-1 gap-4 sm:grid-cols-[11rem_1fr] sm:gap-10 lg:grid-cols-[13rem_1fr] lg:gap-14">
              <p className="text-base font-light leading-7 text-foreground/70 sm:text-left">
                June 2021 - September 2024
              </p>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium">Volunteer</h3>
                <p className="text-lg font-normal">Woodinville Farmers Market</p>
                <ul className="max-w-3xl list-disc space-y-2 pl-5 text-lg font-light leading-6">
                  <li>Transferred and unloaded supplies for vendors</li>
                  <li>Set up tents, booths, and flags</li>
                  <li>Managed the information booth and kids booth</li>
                  <li>Set up games for children and assisted them with activities</li>
                </ul>
              </div>
            </article>
            <article className="grid grid-cols-1 gap-4 sm:grid-cols-[11rem_1fr] sm:gap-10 lg:grid-cols-[13rem_1fr] lg:gap-14">
              <p className="text-base font-light leading-7 text-foreground/70 sm:text-left">
                May 2023 - August 2023
              </p>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium">Swim Instructor & Lifeguard</h3>
                <p className="text-lg font-normal">Gold's Gym, Woodinville</p>
                <ul className="max-w-3xl list-disc space-y-2 pl-5 text-lg font-light leading-6">
                  <li>
                    Taught swim lessons in small groups for kids ages 5-13 and
                    worked one-on-one with them to improve their swimming abilities
                    and technique
                  </li>
                  <li>Assessed students and wrote evaluation reports</li>
                  <li>Conducted routine maintenance checks on the pool</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      <section id="projects" className={sectionClass}>
        <div className={`${containerClass} gap-10`}>
          <h2 className={headingClass}>Projects</h2>
          <div className="grid gap-8 sm:grid-cols-1">
            <article className="flex flex-col gap-3 rounded-lg border border-foreground/15 p-6 bg-offset hover:bg-highlight">
              <h3 className="text-2xl font-medium">Air Pollution and Electric Vehicles Around the World</h3>
              <p className="text-lg font-light leading-8">
                A research project analyzing how EV sales, GDP, and other factors contribute to air
                pollution and CO2 emissions in different countries around the globe. I focused on finding
                relevant data sets and normalizing them to be easier to work with. I also used BeautifulSoup for webscraping to extract
                data when downloading data sets was not available. I created different kinds of graphs and maps to
                show the relationships and trends between EVs and CO2 across varying countries.
                The main libraries used for these graphs were Pandas, GeoPandas, and MatPlotLib.
              </p>
              <div className="mt-auto flex gap-4 text-sm font-normal">
                {/* <a href="#" className="underline underline-offset-4 hover:text-neutral-600">
                  Live demo
                </a>
                <a href="#" className="underline underline-offset-4 hover:text-neutral-600">
                  Source code
                </a> */}
                <p>Python</p>
              </div>
            </article>
            {/* <article className="flex flex-col gap-3 rounded-lg border border-foreground/15 p-6">
              <h3 className="text-xl font-medium">Another Project</h3>
              <p className="text-lg font-light leading-8">
                Add another project here — personal apps, class work, hackathon
                builds, or anything you want to highlight.
              </p>
              <div className="mt-auto flex gap-4 text-sm font-normal">
                <a href="#" className="underline underline-offset-4 hover:text-neutral-600">
                  Live demo
                </a>
                <a href="#" className="underline underline-offset-4 hover:text-neutral-600">
                  Source code
                </a>
              </div>
            </article> */}
          </div>
        </div>
      </section>
    </div>
  );
}
