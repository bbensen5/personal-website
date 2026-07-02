import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-12 text-foreground sm:px-10"
      //style={{ fontFamily: '"Times New Roman", Times, serif' }}
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 bg-background">
        <section className="flex w-full flex-col items-center justify-center gap-14 sm:flex-row lg:gap-24 sm:items-center">
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
          <div className="flex max-w-4xl flex-1 flex-col items-start gap-6 text-left text-foreground">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-foreground">
              Hello, I'm Bianca Bensen
            </h1>
            <p className="text-lg leading-8 text-foreground">
              I'm a second year student at the University of Washington in Seattle, majoring in Computer Science with a minor in Math.
              I am currently working on building my portfolio and having fun with creating personal projects.
              My goal is to gain experience working in the software development industry and learn about how AI is used on the job.
              I have been interested in programming since I started high school, and with the rise of AI, it opens up a whole new frontier for me to explore.
              In my free time, I enjoy swimming and playing piano, especially classical music. 
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}