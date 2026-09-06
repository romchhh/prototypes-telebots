import { BRAND } from '../brand'

export default function AboutSection() {
  return (
    <section className="intro" id="about">
      <div className="intro-rule" />
      <p className="t-lead">
        For fifteen years, {BRAND.name} has been the quiet reference point for those who
        understand what a Land Rover Defender can become — not a replica, not a trend,
        but a considered object built to last.
      </p>
      <p className="t-body wide">
        We work from a workshop in Scotland, restoring and reimagining classic Defenders
        with the same materials and sensibility you might find in a tweed mill or a
        cabinet maker&apos;s bench: walnut, teak, tartan, leather, steel.
      </p>
      <p className="t-body wide">
        Every commission begins with the vehicle itself — its history, its scars, its
        potential. {BRAND.name} does not publish a catalogue. We publish projects. Each
        one picks up where the last left off.
      </p>
    </section>
  )
}
