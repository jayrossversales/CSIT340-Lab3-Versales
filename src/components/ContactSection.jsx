import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Contact"
        subtitle="Let's connect."
      />

      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:jversales6@gmail.com"
          text="jversales6@gmail.com"
        />

        <ContactLink
          label="GitHub"
          href="https://github.com/jayrossversales"
          text="github.com/jayrossversales"
        />

        <ContactLink
          label="Facebook"
          href="https://www.facebook.com/jhaaeee/"
          text="facebook.com/jhaaeee"
        />
      </ul>
    </section>
  )
}

export default ContactSection