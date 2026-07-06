export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    // <section className="bg-background py-28 text-foreground sm:py-32">
    //     <h2 className="text-left text-3xl font-medium tracking-tight">
    //         My Blog
    //     </h2>
    // </section>
    <div className="min-h-screen bg-background text-foreground">
      <section id="about" className="scroll-mt-24 bg-background py-28 text-foreground sm:py-32 lg:py-36">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <h2 className="text-left text-5xl font-medium tracking-tight text-highlight">
            My Blog
          </h2>
          <p className="max-w-3xl text-left text-xl font-light leading-8">
            More coming soon...
          </p>
        </div>
      </section>
    </div>
  )
}
