export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10">
        <h2 className="text-left text-3xl font-semibold tracking-tight">
            My Blog
        </h2>
    </section>
  )
}
