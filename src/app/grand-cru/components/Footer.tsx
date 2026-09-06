import { BRAND, NAV } from '../brand'

export default function Footer() {
  const footerNav = NAV.filter((item) => item.href !== '#contact')

  return (
    <footer id="contact">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/grand-cru" className="footer-logo">
              {BRAND.nameLower}
            </a>
            <p>
              Bespoke Land Rover Defenders, built by hand in Scotland since{' '}
              {BRAND.since}.
            </p>
          </div>
          <nav className="footer-nav">
            {footerNav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {BRAND.name}</span>
          <span>
            {BRAND.location} · {BRAND.site}
          </span>
        </div>
      </div>
    </footer>
  )
}
