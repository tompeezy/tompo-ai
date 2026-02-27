export const metadata = {
  title: 'Shop AI Tools — Tompo AI',
  description: 'Ready-to-use AI tools for small businesses. ChatGPT prompts, automation playbooks, and more. No tech skills needed.',
}

export default function Shop() {
  const products = [
    {
      badge: '🚀 Best Seller',
      title: 'The Small Business AI Starter Kit',
      price: '$19',
      description: '56 ready-to-use ChatGPT prompts for marketing, sales, customer service, and operations — plus a quick-start guide and weekly planner.',
      features: [
        '56 ChatGPT Prompts (copy & paste)',
        'Marketing Quick-Start Guide',
        'Weekly AI Planner Template',
        'Works with Free ChatGPT',
        'Covers Sales, Support & Ops',
        'Instant Digital Download',
      ],
      href: 'https://tompoai.gumroad.com/l/ai-starter-kit',
      cta: 'Get the Starter Kit — $19',
      featured: false,
    },
    {
      badge: '🔥 New Release',
      title: 'The AI Business Automation Playbook',
      price: '$12',
      description: 'Your step-by-step guide to automating your small business. 5 chapters on automation strategy, 10 copy-paste workflows, and a 30-day plan to save 10+ hours every week.',
      features: [
        '16-Page Action-Packed PDF',
        '5 Chapters on AI Automation',
        '10 Ready-to-Use Workflows',
        '30-Day Automation Plan',
        'Free & Cheap Tool Guide',
        'No Tech Skills Required',
      ],
      href: 'https://tompoai.gumroad.com/l/ai-automation-playbook',
      cta: 'Get the Playbook — $12',
      featured: false,
    },
    {
      badge: '✨ Just Dropped',
      title: 'Social Media Content Calendar + Canva Templates Kit',
      price: '$27',
      description: '30 days of done-for-you social media content — captions, hashtags, posting schedule, and 15 Canva template blueprints. Just customize, post, and grow.',
      features: [
        '30-Day Content Calendar',
        '50 Ready-to-Post Captions',
        '15 Canva Template Blueprints',
        'Hashtag Strategy Guide',
        'Best Times to Post Cheat Sheet',
        'Content Repurposing Playbook',
      ],
      href: 'https://tompoai.gumroad.com/l/hworgb',
      cta: 'Get the Content Kit — $27',
      featured: true,
    },
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <a href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
            tompo<span>.ai</span>
          </a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/shop" style={{ color: 'var(--accent-light)' }}>Shop</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="shop-hero">
        <div className="container">
          <div className="hero-badge">🛍️ AI Tools for Small Business</div>
          <h1>
            Start Using AI <span className="highlight">Today.</span>
          </h1>
          <p>
            No tech skills. No monthly fees. Just practical AI tools you can 
            use right now to save time and grow your business.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="shop" id="products">
        <div className="container">
          <div className="shop-grid">
            {products.map((product, i) => (
              <div key={i} className={`product-card ${product.featured ? 'featured' : ''}`}>
                <div className="product-badge">{product.badge}</div>
                <div className="product-header">
                  <h3>{product.title}</h3>
                  <div className="product-price">{product.price}</div>
                </div>
                <p className="product-desc">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <a
                  href={product.href}
                  className="btn btn-primary product-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {product.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle CTA Banner */}
      <section className="coming-soon">
        <div className="container">
          <div className="coming-soon-card">
            <div className="coming-soon-badge">💰 Best Value</div>
            <h3>Get All 3 Products — Save $8</h3>
            <div className="product-price">$50 <span style={{fontSize: '0.5em', textDecoration: 'line-through', opacity: 0.6}}>$58</span></div>
            <p>
              Grab the AI Starter Kit + Automation Playbook + Content Calendar Kit 
              together. Everything you need to automate your marketing, save time, 
              and grow your business — for less than a nice dinner.
            </p>
            <div className="coming-soon-notify">
              <a href="mailto:gettompoai@gmail.com?subject=I want the bundle deal" className="btn btn-secondary">
                📧 Get the Bundle Deal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>Need Custom AI Automation?</h2>
            <p>
              Our tools are a great start — but if you want AI built specifically 
              for your business, let's talk. Free consultation, no strings attached.
            </p>
            <a href="mailto:gettompoai@gmail.com" className="btn btn-primary">
              📧 Book a Free Consultation
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
              <a href="https://tompoai.gumroad.com/l/hworgb" target="_blank" rel="noopener noreferrer">Content Calendar Kit — $27</a>
              <a href="https://tompoai.gumroad.com" target="_blank" rel="noopener noreferrer">Gumroad Store</a>
            </div>
            <div className="footer-links">
              <h4>Connect</h4>
              <a href="https://instagram.com/tompo.ai" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com/gettompoai" target="_blank" rel="noopener noreferrer">Facebook</a>
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
