import { BRAND, PROJECTS } from '../brand'

export default function ProjectsSection() {
  return (
    <section className="projects-wrap" id="projects">
      <div className="section-intro">
        <h2 className="t-title">Our projects</h2>
        <p className="t-body wide">
          Every {BRAND.name} vehicle is a one-off commission — conceived, built and
          finished by hand in Scotland. Each with its own brief, its own character, and
          its own story on the road.
        </p>
      </div>

      {PROJECTS.map((project) => (
        <article className="project" key={project.title}>
          <div className="project-inner">
            <div className="project-text">
              <span className="project-meta">{project.meta}</span>
              <h3 className="t-title">{project.title}</h3>
              {project.paragraphs.map((text) => (
                <p className="t-body" key={text.slice(0, 40)}>
                  {text}
                </p>
              ))}
            </div>
            <div className="project-gallery">
              {project.images.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
