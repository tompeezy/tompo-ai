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
            <li><a href="/shop">Shop</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">🤖 AI Automation for Small Business</div>
          <h1>
            Automate Your Business.<br />
            <span className="highlight">Get 20 Hours Back Every Week.</span>
          </h1>
          <p>
            We build AI chatbots, automations, and smart systems for small 
            businesses in Salisbury, NC and beyond. Stop doing work a machine can do.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Book Your Free Consultation →
            </a>
            <a href="#products" className="btn btn-secondary">
              Shop AI Tools — From $12
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="container">
          <div className="proof-bar">
            <div className="proof-item">
              <span className="proof-number">100+</span>
              <span className="proof-label">Small Businesses Using Our AI Tools</span>
            </div>
            <div className="proof-divider"></div>
            <div className="proof-item">
              <span className="proof-number">10-20 hrs</span>
              <span className="proof-label">Saved Per Week on Average</span>
            </div>
            <div className="proof-divider"></div>
            <div className="proof-item">
              <span className="proof-number">24/7</span>
              <span className="proof-label">Your AI Never Sleeps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="shop" id="products">
        <div className="container">
          <div className="section-label">Shop</div>
          <h2 className="section-title">AI Tools You Can Use Today</h2>
          <p className="section-sub">
            Start using AI in your business right now. No tech skills needed.
          </p>
          <div className="shop-grid">
            <div className="product-card">
              <div className="product-badge">🚀 Best Seller</div>
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
            </div>
            <div className="product-card featured">
              <div className="product-badge">🔥 New Release</div>
              <div className="product-header">
                <h3>The AI Business Automation Playbook</h3>
                <div className="product-price">$12</div>
              </div>
              <p className="product-desc">
                Your step-by-step guide to automating your small business. 
                10 copy-paste workflows, tool recommendations, and a 30-day plan 
                to save 10+ hours every week.
              </p>
              <ul className="product-features">
                <li>10 Ready-to-Use Workflows</li>
                <li>30-Day Automation Plan</li>
                <li>Free & Cheap Tool Guide</li>
                <li>No Tech Skills Required</li>
              </ul>
              <a href="https://tompoai.gumroad.com/l/ai-automation-playbook" className="btn btn-primary product-cta" target="_blank" rel="noopener noreferrer">
                Get It Now — $12
              </a>
            </div>
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
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-logo">tompo<span>.ai</span></div>
              <p>AI automation for small businesses. Salisbury, NC &amp; beyond.</p>
            </div>
            <div className="footer-links">
              <h4>Products</h4>
              <a href="https://tompoai.gumroad.com/l/ai-starter-kit" target="_blank" rel="noopener noreferrer">AI Starter Kit — $19</a>
              <a href="https://tompoai.gumroad.com/l/ai-automation-playbook" target="_blank" rel="noopener noreferrer">Automation Playbook — $12</a>
              <a href="https://tompoai.gumroad.com" target="_blank" rel="noopener noreferrer">Gumroad Store</a>
            </div>
            <div className="footer-links">
              <h4>Connect</h4>
              <a href="https://instagram.com/tompo.ai" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com/gettompoai" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://tiktok.com/@teeemhigh" target="_blank" rel="noopener noreferrer">TikTok (Golf)</a>
              <a href="https://pinterest.com/gettompoai" target="_blank" rel="noopener noreferrer">Pinterest</a>
              <a href="mailto:gettompoai@gmail.com">gettompoai@gmail.com</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Tompo AI — Salisbury, NC · Rowan County · tompoai.shop</p>
          </div>
        </div>
      </footer>
    </>
  )
}
