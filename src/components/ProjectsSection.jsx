import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Projects"
        subtitle="Things I have built."
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Koniature"
          description="An Android eco-shop application with user accounts, product browsing, cart, favorites, and profile features."
          tech="Kotlin · Android"
          link="https://github.com/jayrossversales"
        />

        <ProjectCard
          year="2026"
          title="Smart Campus Service Hub"
          description="A web-based campus service system for managing student payments and transaction records."
          tech="PHP · MySQL"
          link="https://github.com/jayrossversales"
        />

        <ProjectCard
          year="2026"
          title="GORA"
          description="A student-focused application project designed with account registration, login, dashboard, and profile features."
          tech="Application Development"
          link="https://github.com/jayrossversales"
        />

        <ProjectCard
          year="2026"
          title="React Portfolio"
          description="A personal portfolio built with reusable React components as part of my CSIT340 coursework."
          tech="React · Tailwind CSS"
          link="https://github.com/jayrossversales"
        />
      </div>
    </section>
  )
}

export default ProjectsSection