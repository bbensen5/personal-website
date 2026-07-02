import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col flex-1 items-start justify-center bg-zinc-50 dark:bg-black"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <main className="flex flex-1 w-full max-w-5xl flex-col gap-8 py-0 px-0 bg-white dark:bg-black">
        <section className="flex w-full flex-col items-start gap-8 sm:flex-row">
          <Image
            //className="dark:invert"
            src="/slackpfp.JPG"
            alt="Bianca's face"
            width={400}
            height={400}
            priority
          />
          <div className="flex max-w-md flex-col items-start gap-6 text-left">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Hello, I'm Bianca Bensen
            </h1>
            <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-150">
              I'm a second year student at the University of Washington in Seattle, majoring in Computer Science with a minor in Math.
              I am currently doing an internship at Moonveil AI and working on projects using the tools and AI they provide.
              My goal is to gain experience working in the software development industry and learn about how AI is used on the job.
              I have been interested in programming since I started high school, and with the rise of AI, it opens up a whole new frontier to explore.
              In my free time, I enjoy swimming and playing piano, especially classical music. 
            </p>
          </div>
        </section>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://github.com/bbensen5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              //className="dark:invert"
              src="/github-logo.svg"
              alt="GitHub Logo"
              width={16}
              height={16}
            />
            V
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
