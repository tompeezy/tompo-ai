import ChatWidget from './components/ChatWidget'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <a href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/logo.svg" alt="Tompo AI" style={{ width: '36px', height: '36px', borderRadius: '8px' }} />
            tompo<span>.ai</span>
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-badge">🤖 AI Automation for Small Business</div>
          <h1>Stop Doing Work<br /><span className="highlight">A Machine Can Do</span></h1>
          <p>We build AI-powered chatbots, automations, and smart systems that save your business 10-20 hours a week. Serving Salisbury, NC and Rowan County.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get a Free Consultation →</a>
            <a href="#services" className="btn btn-secondary">See What We Build</a>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-label">Services</div>
          <h2 className="section-title">What We Automate</h2>
          <p className="section-sub">Every business has tasks that eat up time. We turn those into systems that run themselves.</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💬</div>
              <h3>AI Customer Chatbots</h3>
              <p>24/7 chatbot on your website that answers questions, books appointments, and captures leads — even while you sleep.</p>
              <div className="service-price">Starting at $500</div>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Workflow Automation</h3>
              <p>Automate repetitive tasks — invoicing, follow-ups, data entry, email responses. If you do it more than twice, we automate it.</p>
              <div className="service-price">Starting at $300</div>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Smart Reporting</h3>
              <p>AI-generated daily/weekly reports on your business metrics. Know what&apos;s happening without digging through spreadsheets.</p>
              <div className="service-price">Starting at $200</div>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Social Media Automation</h3>
              <p>AI-written posts, scheduled content, and automated responses across your social platforms. Stay visible without the grind.</p>
              <div className="service-price">Starting at $400</div>
            </div>
            <div className="service-card">
              <div className="service-icon">📧</div>
              <h3>Email &amp; Lead Systems</h3>
              <p>Automated follow-up sequences, lead scoring, and smart email campaigns that nurture customers on autopilot.</p>
              <div className="service-price">Starting at $350</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Custom AI Solutions</h3>
              <p>Got a unique problem? We build custom AI tools tailored to your specific business needs. If you can describe it, we can build it.</p>
              <div className="service-price">Custom Quote</div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-label">Process</div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub">Simple. Fast. No tech knowledge needed on your end.</p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Free Consultation</h3>
              <p>Tell us what&apos;s eating your time. We&apos;ll identify what can be automated.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>We Build It</h3>
              <p>Our AI team builds your custom solution — usually in 3-5 days.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>You Approve</h3>
              <p>We walk you through everything. You test it. You love it.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>It Runs</h3>
              <p>Your automation goes live. You get your time back. We handle support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="results" id="results">
        <div className="container">
          <div className="section-label">Impact</div>
          <h2 className="section-title">What AI Automation Does</h2>
          <p className="section-sub">Real results for real businesses.</p>
          <div className="results-grid">
            <div className="result-card">
              <div className="result-number">10-20h</div>
              <p>Saved per week on average</p>
            </div>
            <div className="result-card">
              <div className="result-number">24/7</div>
              <p>Your AI works while you don&apos;t</p>
            </div>
            <div className="result-card">
              <div className="result-number">3-5 days</div>
              <p>From concept to live system</p>
            </div>
            <div className="result-card">
              <div className="result-number">$0</div>
              <p>To find out if it&apos;s right for you</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Automate Your Business?</h2>
            <p>Fill out the form below and we&apos;ll get back to you within 24 hours with a free automation plan. No pressure, no BS.</p>
            <ContactForm />
            <div className="cta-options" style={{ marginTop: '24px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '.9rem' }}>Or reach out directly:</span>
              <a href="mailto:gettompoai@gmail.com" className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '.85rem' }}>📧 gettompoai@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Tompo AI — Salisbury, NC · Rowan County · tompoai.shop</p>
        </div>
      </footer>

      <ChatWidget />
    </>
  )
}
