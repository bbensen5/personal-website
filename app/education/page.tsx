export const metadata = {
  title: 'Education',
  description: 'My education.',
}

export default function Page() {
  return (
    <section className="bg-background px-6 py-20 text-foreground sm:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
          <h2 className="text-left text-3xl font-semibold tracking-tight">
            My Education
          </h2>
          <p className="max-w-3xl text-left text-lg leading-8">
            University of Washington, Seattle
          </p>
        </div>
      </section>
  )
}
