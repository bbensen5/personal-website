import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-0 px-0 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/slackpfp.JPG"
          alt="Bianca's face"
          width={400}
          height={400}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Greetings and salutations
            My name is Bianca Bensen
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="font-medium text-zinc-950 dark:text-zinc-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mystery
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://github.com/bbensen5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/github-logo.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            My GitHub
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
