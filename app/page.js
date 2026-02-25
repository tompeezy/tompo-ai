export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-logo">
            tompo<span>.ai</span>
          </div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">🤖 AI Automation for Small Business</div>
          <h1>
            Stop Doing Work<br />
            <span className="highlight">A Machine Can Do</span>
          </h1>
          <p>
            We build AI-powered chatbots, automations, and smart systems 
            that save your business 10-20 hours a week. Serving Salisbury, NC 
            and Rowan County.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get a Free Consultation →
            </a>
            <a href="#services" className="btn btn-secondary">
              See What We Build
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-label">Services</div>
          <h2 className="section-title">What We Automate</h2>
          <p className="section-sub">
            Every business has tasks that eat up time. We turn those into 
            systems that run themselves.
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💬</div>
              <h3>AI Customer Chatbots</h3>
              <p>
                24/7 chatbot on your website that answers questions, books 
                appointments, and captures leads — even while you sleep.
              </p>
              <div className="service-price">Starting at $500</div>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Workflow Automation</h3>
              <p>
                Automate repetitive tasks — invoicing, follow-ups, data entry, 
                email responses. If you do it more than twice, we automate it.
              </p>
              <div className="service-price">Starting at $300</div>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Smart Reporting</h3>
              <p>
                AI-generated daily/weekly reports on your business metrics. 
                Know what's happening without digging through spreadsheets.
              </p>
              <div className="service-price">Starting at $200</div>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Social Media Automation</h3>
              <p>
                AI-written posts, scheduled content, and automated responses 
                across your social platforms. Stay visible without the grind.
              </p>
              <div className="service-price">Starting at $400</div>
            </div>
            <div className="service-card">
              <div className="service-icon">📧</div>
              <h3>Email &amp; Lead Systems</h3>
              <p>
                Automated follow-up sequences, lead scoring, and smart email 
                campaigns that nurture customers on autopilot.
              </p>
              <div className="service-price">Starting at $350</div>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Custom AI Solutions</h3>
              <p>
                Got a unique problem? We build custom AI tools tailored to 
                your specific business needs. If you can describe it, we can build it.
              </p>
              <div className="service-price">Custom Quote</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-label">Process</div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub">
            Simple. Fast. No tech knowledge needed on your end.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Free Consultation</h3>
              <p>Tell us what's eating your time. We'll identify what can be automated.</p>
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

      {/* Results */}
      <section className="results" id="results">
        <div className="container">
          <div className="section-label">Impact</div>
          <h2 className="section-title">What AI Automation Does</h2>
          <p className="section-sub">
            Real results for real businesses.
          </p>
          <div className="results-grid">
            <div className="result-card">
              <div className="result-number">10-20h</div>
              <p>Saved per week on average</p>
            </div>
            <div className="result-card">
              <div className="result-number">24/7</div>
              <p>Your AI works while you don't</p>
            </div>
            <div className="result-card">
              <div className="result-number">3-5 days</div>
              <p>From concept to live system</p>
            </div>
            <div className="result-card">
              <div className="result-number">$0</div>
              <p>To find out if it's right for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section className="shop" id="shop">
        <div className="container">
          <div className="section-label">Shop</div>
          <h2 className="section-title">AI Tools You Can Use Today</h2>
          <p className="section-sub">
            Grab our digital products and start using AI in your business immediately.
          </p>
          <div className="shop-grid">
            <div className="product-card">
              <div className="product-badge">🚀 Digital Product</div>
              <div className="product-header">
                <h3>The Small Business AI Starter Kit</h3>
                <div className="product-price">$19</div>
              </div>
              <p className="product-desc">
                56 ready-to-use ChatGPT prompts for marketing, sales, customer 
                service, and operations — plus a quick-start guide and weekly planner.
              </p>
              <ul className="product-features">
                <li>56 ChatGPT Prompts</li>
                <li>Marketing Quick-Start Guide</li>
                <li>Weekly AI Planner</li>
                <li>Works with Free ChatGPT</li>
              </ul>
              <a href="https://tompoai.gumroad.com/l/ai-starter-kit" className="btn btn-primary product-cta" target="_blank" rel="noopener noreferrer">
                Get It Now — $19
              </a>
              <a href="https://www.etsy.com/shop/TompoAI" className="product-alt-link" target="_blank" rel="noopener noreferrer">
                Also available on Etsy →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Automate Your Business?</h2>
            <p>
              Book a free 15-minute call. We'll tell you exactly what we can 
              automate and how much time you'll save. No pressure, no BS.
            </p>
            <a href="mailto:gettompoai@gmail.com" className="btn btn-primary">
              📧 Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Tompo AI — Salisbury, NC · Rowan County · tompoai.shop</p>
        </div>
      </footer>
    </>
  )
}

