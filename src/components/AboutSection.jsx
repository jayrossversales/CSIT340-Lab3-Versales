import SectionHeading from './SectionHeading'
import Fact from './Fact'

function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="About"
        subtitle="A glimpse of who I am."
      />

      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I was born and raised in Poblacion, San Remigio, and moved to Cebu City for
        college. IT was not originally my choice, but along the way I learned to
        explore and appreciate different things. Outside academics, I enjoy
        discovering new food and places. My goal is to finish college, find a
        stable job, and support my family.
      </p>

      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  )
}

export default AboutSection