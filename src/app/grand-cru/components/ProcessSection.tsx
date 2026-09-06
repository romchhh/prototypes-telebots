import { PROCESS_IMAGES, PROCESS_STEPS } from '../brand'

export default function ProcessSection() {
  return (
    <section className="process-wrap" id="process">
      <div className="process-intro">
        <div>
          <h2 className="t-title">The restoration process</h2>
          <p className="t-body wide">
            We do not restore Defenders to look new. We restore them to reveal what was
            always there — and to place inside them a standard of craftsmanship that did
            not exist when they left the factory.
          </p>
        </div>
        <div className="process-steps">
          {PROCESS_STEPS.map((step) => (
            <div className="process-step" key={step.title}>
              <strong>{step.title}</strong>
              <p className="t-body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="process-grid">
        {PROCESS_IMAGES.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
        ))}
      </div>

      <div className="process-caption">
        <p className="t-body wide">
          A typical commission takes between six and eighteen months. We keep clients
          informed throughout — photographs from the workshop, decisions on materials,
          progress at every stage.
        </p>
      </div>
    </section>
  )
}
