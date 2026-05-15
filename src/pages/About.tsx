import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="px-gutter py-stack-xl max-w-container-max mx-auto">
      <div className="space-y-6">
        <h1 className="font-headline-xl text-primary-dark">About Veridian Estates</h1>
        <p className="font-body-md text-primary-dark/80 leading-relaxed">
          Veridian Estates creates elevated residential experiences with a focus on refined architecture, tailored service, and destination-quality living.
        </p>
        <p className="font-body-md text-primary-dark/80 leading-relaxed">
          This route-based setup is now ready for expansion into additional pages, authenticated dashboards, and client-facing property tools.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-soft bg-copper px-6 py-4 text-white font-subheading tracking-[0.1em] hover:brightness-110 transition-all"
        >
          Back to home
        </Link>
      </div>
    </section>
  )
}

export default About
