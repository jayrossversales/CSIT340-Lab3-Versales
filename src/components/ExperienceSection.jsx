import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Experience"
        subtitle="A look at my journey in IT."
      />

      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web development, databases, systems analysis, and other areas of information technology."
        />

        <TimelineItem
          period="2025 – 2026"
          title="IT Laboratory Activities"
          place="CCS Computer Laboratory"
          description="Gained hands-on experience with computer hardware, including basic wiring and laboratory activities."
        />

        <TimelineItem
          period="2024 – 2025"
          title="First Year in Information Technology"
          place="Cebu Institute of Technology – University"
          description="Built my first web page and worked on my first IT projects as I began exploring different areas of technology."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection