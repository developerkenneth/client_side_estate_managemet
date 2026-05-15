import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="px-gutter py-stack-xl min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="max-w-xl text-center">
        <h1 className="font-headline-xl text-primary-dark mb-4">404 — Page not found</h1>
        <p className="font-body-md text-primary-dark/80 leading-relaxed mb-6">
          The page you’re looking for doesn’t exist yet. Use the navigation above or return to the home page.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-soft bg-copper px-6 py-4 text-white font-subheading tracking-[0.1em] hover:brightness-110 transition-all"
        >
          Return home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
