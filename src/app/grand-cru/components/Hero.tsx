import { BRAND } from '../brand'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-content">
        <h1 className="hero-title">
          {BRAND.nameLower} <span className="hero-year">{BRAND.heroYear}</span>
        </h1>
        <p className="hero-subtitle">{BRAND.tagline}</p>
        <div className="hero-ctas">
          <a href="#about" className="hero-btn">about us</a>
          <a href="#projects" className="hero-btn">our projects</a>
          <a href="#process" className="hero-btn">the process</a>
        </div>
      </div>
    </section>
  )
}
